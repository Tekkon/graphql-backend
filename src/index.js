import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const schema = gql`
  type Query {
      hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello, client!'
  }
}

const PORT = 4000;

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`)
});