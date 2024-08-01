import { MutationResolvers, QueryResolvers } from "eight-shared/graphql";

export const locationQueries: QueryResolvers = {
    getLocation: async (userId: string) => {
        return {};
    },
};

export const locationMutations: MutationResolvers = {};
