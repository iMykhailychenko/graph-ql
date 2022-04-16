const mongoose = require("mongoose");

const {
  mongoUrl,
  mongoUser,
  mongoPass,
  mongoDbName,
  isMongoVarVisible,
} = require("../config/app.config");

class Database {
  constructor() {
    this.database = null;
  }

  collection(collection) {
    return this.database.collection(collection);
  }

  async connect() {
    console.log("Connecting to MongoDB ...");

    if (!isMongoVarVisible) {
      throw new Error("Env variables is not available");
    }

    const connectionState = new Promise((resolve) => {
      mongoose.connection.on("error", (e) => {
        console.log("Failed to connect to MongoDB");
        console.error(e);
        process.exit(1);
      });
      mongoose.connection.on("open", () => {
        console.log("Database connection successful");
        resolve();
      });
    });

    console.log("Connecting to MongoDB, mongoUrl: ", mongoUrl);
    await mongoose.connect(mongoUrl, {
      user: mongoUser,
      pass: mongoPass,
      dbName: mongoDbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    return connectionState;
  }

  async disconnect() {
    await mongoose.connection.close();
  }
}

module.exports = { Database };
