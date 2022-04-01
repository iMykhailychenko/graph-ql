const { Router } = require("express");
const { PostsController } = require("./posts.controller");

const router = Router();

router.post("/", PostsController.create);

module.exports = { posts: router };
