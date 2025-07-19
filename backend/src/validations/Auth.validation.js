const { body } = require("express-validator");

class Authvalidation {
  static RegisterUser = [
    body("name").notEmpty().withMessage("Name cannot be empty"),
    body("email").notEmpty().withMessage("Email cannot be Empty")
      .isEmail().withMessage("Email must be Valid"),
    body("password").notEmpty().withMessage("Password is required")
      .isLength({ min: 8 }).withMessage("Password must have minimum 8 characters"),
  ];
}

LoginUser = [
  body("name").notEmpty().withMessage("Name cannot be empty"),
    body("email").notEmpty().withMessage("Email cannot be Empty")
      .isEmail().withMessage("Email must be Valid"),
    body("password").notEmpty().withMessage("Password is required")
      .isLength({ min: 8 }).withMessage("Password must have minimum 8 characters"),
]

module.exports = Authvalidation;