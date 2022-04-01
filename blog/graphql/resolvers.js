const { PostModel } = require("../api/posts/posts.model");

const Query = {
  post: async (id) => await PostModel.findOne(id),
  posts: async () => await PostModel.find(),
};

module.exports = { Query };
