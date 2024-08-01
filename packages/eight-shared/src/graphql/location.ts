import { gql } from "graphql-tag";

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
