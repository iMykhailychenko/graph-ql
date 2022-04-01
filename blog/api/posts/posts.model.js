const mongoose = require("mongoose");

const PostScheme = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  crated: { type: Date, required: true, default: new Date() },
  edited: { type: Date, required: true, default: new Date() },
});

module.exports.PostModel = mongoose.model("Post", PostScheme);
