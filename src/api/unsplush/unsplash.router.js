const { Router } = require("express");
const { UnsplashController } = require("./posts.controller");

const router = Router();

router.get("/unsplash", UnsplashController.get);
router.get("/photos/*", UnsplashController.get);
router.get("/a/*", UnsplashController.get);
router.get("/t/*", UnsplashController.get);
router.get("/main*", UnsplashController.get);
router.get("/user-route*", UnsplashController.get);
router.get("/user-feed-sub-route*", UnsplashController.get);
router.get("/runtime*", UnsplashController.get);

module.exports = { unsplash: router };
