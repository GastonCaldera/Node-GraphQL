// graphQL wrapper
const {gql} = require("apollo-server");

module.exports = gql`
    type User{
        id: ID!
        name: String!
        email: String!
    }
    type Query{
        users: [User]
    }
    input CreateUserInput{
        name: String!
        email: String!
    }
    input UpdateUserInput{
        name: String
        email: String
    }
    type DeletePayload{
        id: ID!
    }
    
    type Mutation{
        createUser(input: CreateUserInput!): User!
        updateUser(id: ID, input: UpdateUserInput!): User!
        deleteUser(id: ID): DeletePayload!
    }
`;
