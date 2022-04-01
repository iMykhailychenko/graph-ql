const Joi = require("joi");

const postSchema = Joi.object({
  title: Joi.string().min(1).max(150).required(),
  image: Joi.string().max(500).required(),
  description: Joi.string().max(2050).required(),
});

module.exports = { postSchema };
