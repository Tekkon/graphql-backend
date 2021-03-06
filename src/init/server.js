// Core
import express from "express";
import { ApolloServer } from "apollo-server-express";
import session from 'express-session';
import cors from 'cors';
import { sessionOptions, corsOptions } from "./config";
import http from 'http';

// Schema Types
import schema from './types.graphql'

// Resolvers
import { resolvers } from './resolvers'

// API
import { api as starshipsAPI } from '../bus/starships/dataSource'

// Middleware
import { readToken } from "./readToken";

const app = express();

app.use(session(sessionOptions));
app.use(cors(corsOptions));
app.use(readToken);

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources: () => {
    return {
      starshipsAPI
    }
  },
  context: ({ req, res }) => {
    return { req, res }
  },
  playground: {
    settings: {
      "request.credentials": "include"
    }
  }
});

server.applyMiddleware({ app, cors: false });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

export { server, httpServer, app };