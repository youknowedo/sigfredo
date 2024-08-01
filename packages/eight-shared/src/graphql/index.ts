import { DocumentNode } from "graphql";
import { authDefs } from "./auth";
import { locationDefs } from "./location";
export type {
    MutationResolvers,
    QueryResolvers,
    Resolvers,
} from "../generated/graphql";

export const typeDefs: DocumentNode[] = [authDefs, locationDefs];
