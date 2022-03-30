const Joi = require("joi");

const postSchema = Joi.object({
  title: Joi.string().min(1).max(250).required(),
  image: Joi.string().required(),
  description: Joi.string().max(1000).required(),
});

module.exports = { postSchema };
