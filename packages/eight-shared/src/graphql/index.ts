import { DocumentNode } from "graphql";
import { authDefs } from "./user";
export type {
    MutationResolvers,
    QueryResolvers,
    Resolvers,
} from "../generated/graphql";

export const typeDefs: DocumentNode[] = [authDefs];

export type Context = {
    userId: string;
    sessionId: string;
};
