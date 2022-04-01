const { PostsService } = require("./posts.service");

class PostsController {
  static async create(req, res) {
    try {
      await PostsService.create(req.body);
      res.redirect("/new-post/success.html");
    } catch (e) {
      console.log(e);
      res.redirect("/new-post/error.html");
    }
  }
}

module.exports = { PostsController };
