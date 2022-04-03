const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const { UnsplashController } = require("./controller");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));
app.use("/api", helmet());

app.use(UnsplashController.get);

app.listen(4000, () => {
  console.log("App is running on url http://localhost:" + 4000);
});
