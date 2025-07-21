const { UserModel, ProfileModel } = require("../models")
const ApiError = require("../utils/ApiError")
const httpStatus = require("http-status")
const { generateToken } = require("../utils/Token.utils")

class AuthService{
   static async RegisterUser(body){
     const {email,password,name} = body

      const checkExist = await UserModel.findOne({})
      if(checkExist)
      {
        throw new ApiError(httpStatus.BAD_REQUEST,"User has Already Registered")
        return
      }

      const user = await UserModel.create({
          email,password,name
      })

      const token = generateToken(user)
      const refresh_token = generateToken(user,'2d')

      await ProfileModel.create({
           user: user._id,
           refresh_token
      })

      return{
        msg: "User Registered Successfully!",
        token: token
      }

   }

   static async LoginUser(body){
     const {email,password,name} = body
       
     const checkExist = await UserModel.findOne({email})
       if(!checkExist)
       {
          throw new ApiError(httpStatus.BAD_REQUEST,"User not Registered")
          return
       }
    

      if(password !== checkExist.password)
      {
         throw new ApiError(httpStatus.BAD_REQUEST,"Inavalid Credentials!")
         return
      }

      const token = generateToken(user)

      return{
        msg: "User Login Successfully!",
        token: token
      }

   }
}

module.exports = AuthService