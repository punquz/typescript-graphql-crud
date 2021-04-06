"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
exports.schema = graphql_1.buildSchema(`
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
