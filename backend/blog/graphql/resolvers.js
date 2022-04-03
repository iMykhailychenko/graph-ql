const { PostModel } = require("../api/posts/posts.model");

const Query = {
  post: async (root, filters) => await PostModel.findOne(filters),
  posts: async () => await PostModel.find(),
};

module.exports = { Query };
