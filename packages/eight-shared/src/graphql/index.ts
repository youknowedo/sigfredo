import { DocumentNode } from "graphql";
import { locationDefs, locationResolvers } from "./location";
export type { MutationResolvers, QueryResolvers } from "../generated/graphql";

export const typeDefs: DocumentNode[] = [locationDefs];
