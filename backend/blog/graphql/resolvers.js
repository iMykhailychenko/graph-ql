const { PostModel } = require("../models/posts.model");

const Query = {
  post: async (root, variables) => await PostModel.findOne(variables),
  posts: async () => await PostModel.find(),
};

module.exports = { Query };
