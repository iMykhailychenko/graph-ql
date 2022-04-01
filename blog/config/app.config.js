require("dotenv").config();

const {
  PORT,
  MONGODB_URI,
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
} = process.env;

const port = PORT || 3000;
const isMongoVarVisible = Boolean(
  MONGO_INITDB_ROOT_USERNAME && MONGO_INITDB_ROOT_PASSWORD
);

const mongoUrl = MONGODB_URI;
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
