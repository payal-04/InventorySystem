const router = require("express").Router()
const AuthValidation = require("../validations/Auth.validation")
const Validation = require("../middlewares/Validation")
const AuthController = require("../controllers/Auth.controller")

router.post("/register",AuthValidation.RegisterUser,Validation, AuthController.RegisterUser)

module.exports = router