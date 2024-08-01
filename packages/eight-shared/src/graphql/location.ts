import { gql } from "graphql-tag";
import type { QueryResolvers } from "../generated/graphql";

export const locationDefs = gql`
    type Query {
        hello: String
    }
`;

export const locationResolvers: QueryResolvers = {
    hello: () => "Hello world!",
};
