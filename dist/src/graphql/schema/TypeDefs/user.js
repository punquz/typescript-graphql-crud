"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userType = void 0;
const graphql_1 = require("graphql");
exports.userType = new graphql_1.GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        Name: { type: graphql_1.GraphQLString },
        Email: { type: graphql_1.GraphQLString },
        Phone: { type: graphql_1.GraphQLString },
    }),
});
