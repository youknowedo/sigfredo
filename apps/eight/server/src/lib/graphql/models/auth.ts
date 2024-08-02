import { lucia } from "@/lib/auth";
import { db } from "@/lib/db";
import { userTable } from "@/lib/schema/user";
import { eq, or } from "drizzle-orm";
import { Context, Session } from "eight-shared/graphql";
import { GraphQLError } from "graphql";
import { generateIdFromEntropySize } from "lucia";
import { ModelContext } from ".";

export const auth = (context: ModelContext) => ({
    signup: async (
        email: string,
        username: string,
        password: string
    ): Promise<Session> => {
        console.log("signup", email, username, password);

        const userDuplicate:
            | {
                  email: string;
                  username: string;
              }
            | undefined = await db
            .select({
                email: userTable.email,
                username: userTable.username,
            })
            .from(userTable)
            .where(
                or(eq(userTable.email, email), eq(userTable.username, username))
            )
            .limit(1)
            .then((u) => u[0]);

        if (userDuplicate) {
            const isEmailDuplicate = userDuplicate.email === email;

            throw new GraphQLError(
                isEmailDuplicate
                    ? "User with email already exists"
                    : "Username taken",
                {
                    extensions: {
                        code: isEmailDuplicate
                            ? "EMAIL_IN_USE"
                            : "USERNAME_IN_USE",
                    },
                }
            );
        }

        // TODO: Validate email, password & username

        const passwordHash = await Bun.password.hash(password, {
            algorithm: "argon2id",
            memoryCost: 19456,
            timeCost: 2,
        });
        const id = generateIdFromEntropySize(10);

        db.insert(userTable).values({
            id,
            email,
            username,
            passwordHash,
        });

        const session = await lucia.createSession(id, {});

        return {
            id: session.id,
            user_id: id,
            expires_at: session.expiresAt.toString(),
        };
    },

    login: async (username: string, password: string): Promise<Session> => {
        console.log("login", username, password);

        const user = await db
            .select()
            .from(userTable)
            .where(eq(userTable.username, username))
            .limit(1)
            .then((u) => u[0]);

        if (!user) {
            // MAYBE TODO: Hash password anyway to prevent timing attacks
            throw new GraphQLError("Invalid email or password", {
                extensions: {
                    code: "INVALID_CREDENTIALS",
                },
            });
        }

        const validPassword = await Bun.password.verify(
            password,
            user.passwordHash,
            "argon2id"
        );
        if (!validPassword) {
            throw new GraphQLError("Invalid email or password", {
                extensions: {
                    code: "INVALID_CREDENTIALS",
                },
            });
        }

        const session = await lucia.createSession(user.id, {});

        return {
            id: session.id,
            user_id: user.id,
            expires_at: session.expiresAt.toString(),
        };
    },
});
