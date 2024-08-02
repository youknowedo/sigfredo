import { db } from "@/lib/db";
import { locationTable, userTable } from "@/lib/schema/user";
import { eq } from "drizzle-orm";
import { GraphQLError } from "graphql";
import { ModelContext } from ".";

export const user = (context: ModelContext) => ({
    get: async (id: string) => {
        const u = await db
            .select()
            .from(userTable)
            .where(eq(userTable.id, id))
            .limit(1)
            .then((u) => u[0]);

        if (!u)
            throw new GraphQLError("User not found", {
                extensions: {
                    code: "NOT_FOUND",
                },
            });

        return u;
    },
    current: async () => {
        if (!context.userId)
            throw new GraphQLError("Unauthorized", {
                extensions: {
                    code: "UNAUTHORIZED",
                },
            });

        const u = db
            .select()
            .from(userTable)
            .where(eq(userTable.id, context.userId))
            .limit(1)
            .then((u) => u[0]);

        if (!u)
            throw new GraphQLError("User not found", {
                extensions: {
                    code: "NOT_FOUND",
                },
            });

        return u;
    },

    // MAYBE TODO: Move inside of user model
    setLocation: async (longitude: number, latitude: number) => {
        if (!context.userId)
            throw new GraphQLError("Unauthorized", {
                extensions: {
                    code: "UNAUTHORIZED",
                },
            });

        const location = {
            longitude,
            latitude,
            timestamp: new Date().toISOString(),
        };

        await db
            .update(locationTable)
            .set({
                longitude: location.longitude,
                latitude: location.latitude,
                timestamp: location.timestamp,
            })
            .where(eq(locationTable.userId, context.userId));

        return location;
    },
});
