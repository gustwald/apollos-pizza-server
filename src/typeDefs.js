import { ApolloServer, gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    pizzas: [Pizza!]!
  }
  type Pizza {
    id: ID!
    name: String!
  }
  type Mutation {
    createPizza(name: String!): Pizza!
    deletePizza(name: String!): Pizza
  }
`;
