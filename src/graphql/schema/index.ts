import { buildSchema, GraphQLSchema } from 'graphql';

export const schema: GraphQLSchema = buildSchema(`
type User {
  id: ID!
  Name: String!
  Email: String!
  Phone:String!
}

input UserInput {
  Name: String!
  Email: String!
  Phone:String!
}

type RootQuery {
    viewProfile: User
    getAllUsers:[User]
    getSingleUser(id:ID!):User
  }
  type RootMutation {
    createUser(userInput: UserInput): String
    updateUser(name: String!, email: String!): User
    deleteUser(id:ID!):String
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);
