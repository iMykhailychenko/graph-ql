require("dotenv").config();

const { PORT, MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD } =
  process.env;

const port = PORT || 3000;
const isMongoVarVisible = Boolean(
  MONGO_INITDB_ROOT_USERNAME && MONGO_INITDB_ROOT_PASSWORD
);

const mongoUrl = "mongodb://localhost:27017";
const mongoUser = MONGO_INITDB_ROOT_USERNAME;
const mongoPass = MONGO_INITDB_ROOT_PASSWORD;
const mongoDbName = "graphql";

module.exports = {
  port,
  mongoUrl,
  mongoUser,
  mongoPass,
  mongoDbName,
  isMongoVarVisible,
};
