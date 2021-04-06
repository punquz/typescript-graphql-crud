import * as express from 'express';
import * as graphqlHttp from 'express-graphql';
const app = express();

import { schema } from './graphql/schema/index';
import * as graphQlResolver from './graphql/resolver/index';
//Single graphql endpoint
app.use(
  '/graphql',
  graphqlHttp.graphqlHTTP({
    schema,
    rootValue: graphQlResolver,
    graphiql: true,
    customFormatErrorFn: (error: any) => ({
      message: error.message,
    }),
  })
);

export default app;
