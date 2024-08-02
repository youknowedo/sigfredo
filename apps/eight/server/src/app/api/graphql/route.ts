import { lucia } from "@/lib/auth";
import { models, Models } from "@/lib/graphql/models";
import { resolvers } from "@/lib/graphql/resolver";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { Context, typeDefs } from "eight-shared/graphql";
import { NextRequest } from "next/server";

const server = new ApolloServer<Context<Models>>({
    typeDefs,
    resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest, Context<Models>>(
    server,
    {
        context: async (req): Promise<Context<Models>> => {
            const sessionId = req.headers.get("Session") ?? undefined;
            let userId: string | undefined = undefined;
            if (sessionId) {
                const user = await lucia
                    .validateSession(sessionId)
                    .then((su) => su.user);

                userId = user?.id;
            }

            return {
                userId,
                sessionId,
                models: models({ userId, sessionId }),
            };
        },
    }
);

export { handler as GET, handler as POST };
