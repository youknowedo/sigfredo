import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { postLocationDefs } from "eight-shared/graphql/mutations";
import { gql } from "graphql-tag";
import { NextRequest } from "next/server";

const resolvers = {
    Query: {
        hello: () => "Hello world!",
    },
};

const server = new ApolloServer({
    typeDefs: [postLocationDefs],
    resolvers: [resolvers],
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
