const {body} = require("express-validator")

class Authvalidation{

   static RegisterUser = [
         body("name").notEmpty().withMessage("Name cannot be empty"),
         body("email").isEmail().withMessage("Email must be Valid"),
         notEmpty().withMessage("Name cannot be Empty"),
         body("password").isLength({min:8}).withMessage("Password must have minimum8 characters").notEmpty().withMessage("Password is required")
   ]


}

modules.exports = Authvalidation