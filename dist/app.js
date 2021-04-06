"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const graphqlHttp = require("express-graphql");
const app = express();
const index_1 = require("./graphql/schema/index");
const graphQlResolver = require("./graphql/resolver/index");
//Single graphql endpoint
app.use('/graphql', graphqlHttp.graphqlHTTP({
    schema: index_1.schema,
    rootValue: graphQlResolver,
    graphiql: true,
    customFormatErrorFn: (error) => ({
        message: error.message,
    }),
}));
exports.default = app;
