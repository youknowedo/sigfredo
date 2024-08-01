import { gql } from "graphql-tag";

export const authDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        password_hash: String!
    }

    type Session {
        id: ID!
        user_id: ID!
        expires_at: String!
    }

    type Mutation {
        createUser(
            email: String!
            username: String!
            password: String!
        ): Session

        login(username: String!, password: String!): Session
    }
`;
