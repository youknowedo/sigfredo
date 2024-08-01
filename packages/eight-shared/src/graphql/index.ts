import { DocumentNode } from "graphql";
import { QueryResolvers } from "../generated/graphql";
import { locationDefs, locationResolvers } from "./location";

export const typeDefs: DocumentNode[] = [locationDefs];
export const resolvers: QueryResolvers[] = [locationResolvers];
