const httpStatus = require("http-status")
const AuthService = require("../services/Auth.service")
const CatchAsync = require("../utils/CatchAsync")

class AuthController{
   static RegisterUser = CatchAsync(async(req,res)=>{
      const res_obj = await AuthService.RegisterUser(req.body);
      res.status(httpStatus.CREATED).send(res_obj)
   })
}

module.exports = AuthController