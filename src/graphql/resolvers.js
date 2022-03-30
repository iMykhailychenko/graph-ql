const { PostModel } = require("../api/posts/posts.model");

const Query = {
  post: async () => await PostModel.find(),
};

module.exports = { Query };
