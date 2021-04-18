import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import config from "./config";
import { Models } from "./models/index";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
export const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: Models,
  });
  server.applyMiddleware({ app });
  await mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen(4000);

  console.log("http://localhost:4000");
};
startServer();
