const { app, apollo } = require("./app");
const { Database } = require("./db");
const { port } = require("./config/app.config");

const db = new Database();

class Server {
  static async run() {
    await db.connect();
    await apollo.start();
    apollo.applyMiddleware({ app, path: "/graphql" });

    app.listen(port, () => {
      console.log("App is running on url http://localhost:" + port);
    });
    process.on("SIGILL", db.disconnect);
  }
}

Server.run().catch(console.log);
