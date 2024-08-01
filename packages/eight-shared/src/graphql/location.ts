import { gql } from "graphql-tag";
import type { QueryResolvers } from "../generated/graphql";

export const locationDefs = gql`
    type Location {
        userId: ID!
        longitude: Float!
        latitude: Float!
        timestamp: String!
    }

    type Mutation {
        setLocation(userId: ID!, longitude: Float!, latitude: Float!): Location
    }

    type Query {
        getLocation(userId: ID!): Location
    }
`;

export const locationResolvers: QueryResolvers = {};
