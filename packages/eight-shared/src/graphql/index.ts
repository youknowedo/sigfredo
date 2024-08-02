import { DocumentNode } from "graphql";
import { authDefs } from "./user";
export * from "../generated/graphql";

export const typeDefs: DocumentNode[] = [authDefs];

export type Context<T = any> = {
    userId?: string;
    sessionId?: string;
    models: T;
};
