const fs = require("fs");
const path = require("path");

const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const resolvers = require("./graphql/resolvers");

const { posts } = require("./api/posts/posts.router");

const app = express();

const typeDefs = gql(
  fs.readFileSync(path.join(__dirname, "graphql", "schema.graphql"), {
    encoding: "utf8",
  })
);

const apollo = new ApolloServer({ typeDefs, resolvers });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));
app.use("/api", helmet());

app.use(express.static("client"));

module.exports = { app, apollo };
