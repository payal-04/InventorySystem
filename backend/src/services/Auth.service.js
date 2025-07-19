const { UserModel } = require("../models")
const ApiError = require("../utils/ApiError")

class AuthService{
   static async RegisterUser(body){
     const {email,password,name} = body

      const checkExist = await UserModel.findOne({})
      if(!checkExist)
      {
        throw new ApiError()
      }
   }
}

module.exports = AuthService