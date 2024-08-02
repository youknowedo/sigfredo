import { gql } from "graphql-tag";

export const authDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        password_hash: String!
        location: Location
    }

    type Location {
        longitude: Float!
        latitude: Float!
        timestamp: String!
    }

    type Session {
        id: ID!
        user_id: ID!
        expires_at: String!
    }

    type Mutation {
        signup(email: String!, username: String!, password: String!): Session
        login(username: String!, password: String!): Session

        userLocation(longitude: Float!, latitude: Float!): Location
    }

    type Query {
        currentUser(): User
        user(id: ID!): User
    }
`;
