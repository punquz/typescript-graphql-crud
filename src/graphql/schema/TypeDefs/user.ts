import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const userType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    id: { type: GraphQLID },
    Name: { type: GraphQLString },
    Email: { type: GraphQLString },
    Phone: { type: GraphQLString },
  }),
});
