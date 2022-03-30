const { PostModel } = require("./posts.model");
const { postSchema } = require("./posts.validation");

class PostsService {
  static async create(body) {
    const value = await postSchema.validateAsync(body);
    return await PostModel.create(value);
  }
}

module.exports = { PostsService };
