const router = require("express").Router()
const AuthValidation = require("../validations/Auth.validation")
const Validation = require("../middlewares/Validation")
const AuthController = require("../controllers/Auth.controller")

router.post("/register",AuthValidation.RegisterUser,Validation, AuthController.RegisterUser)
router.post("/login",AuthValidation.LoginUser,Validation, AuthController.LoginUser)
router.post("/profile",AuthValidation.LoginUser,Validation,AuthController.LoginUser)

module.exports = router