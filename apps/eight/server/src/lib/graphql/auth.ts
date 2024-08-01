import { hash, verify } from "@node-rs/argon2";
import { eq, or } from "drizzle-orm";
import { MutationResolvers, QueryResolvers } from "eight-shared/graphql";
import { GraphQLError } from "graphql";
import { generateIdFromEntropySize } from "lucia";
import { lucia } from "../auth";
import { db } from "../db";
import { userTable } from "../schema/auth";

export const authQueries: QueryResolvers = {};

export const authMutations: MutationResolvers = {
    createUser: async (_, args) => {
        const { email, password, username } = args;

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

        const passwordHash = await hash(password, {
            // recommended minimum parameters
            memoryCost: 19456,
            timeCost: 2,
            outputLen: 32,
            parallelism: 1,
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

    login: async (_, args) => {
        const { username, password } = args;

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

        const validPassword = await verify(user.passwordHash, password, {
            memoryCost: 19456,
            timeCost: 2,
            outputLen: 32,
            parallelism: 1,
        });
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
};
