import { Context, Resolvers } from "eight-shared/graphql";
import { Models } from "./models";

export const resolvers: Resolvers<Context<Models>> = {
    Query: {},
    Mutation: {
        signup: async (_, args, context) => {
            const { email, username, password } = args;

            return context.models.auth.signup(email, username, password);
        },
        login: async (_, args, context) => {
            const { username, password } = args;

            return context.models.auth.login(username, password);
        },
        userLocation: async (_, args, context) => {
            const { longitude, latitude } = args;

            return context.models.user.setLocation(longitude, latitude);
        },
    },
};
