const joi = require("joi");

function courseValidation(req, res, next) {
  const schema = joi.object({
    title: joi.string().required(),
    courseCode: joi.string().required(),
    // .pattern(/^[A-Z]{3}[0-9]{3}$/),
    description: joi.string().required(),
    courses: joi.array(),
    // credits: joi.number().required().max(4).min(1),
    // department: joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({
      message: "Invalid course body",
      error: error.message,
    });
  }
  next();
}

module.exports = {
  courseValidation,
};
