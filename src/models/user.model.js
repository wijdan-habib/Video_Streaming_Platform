import mongoose, { mongo, Schema } from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  avatar: {
    type: String, //cloudinary url
    required: true,
  },
  coverImage: {
    type: String, //cloudinary url
  },
  watchHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
  password : {
    type:String,
    required:[true, 'password is required'],

  },
  refreshToken:{
    type:String
  }
},{timestamps: true})
;
UserSchema.pre("save",async function (next){
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()
} )
UserSchema.methods.isPasswordCorrect = async function (password) {
return await bcrypt.compare(password, this.password)
}
//generate token
UserSchema.methods.generateAccessToken = function (){
 jwt.sign({
    _id : this._id,
    email : this.email,
    fullname : this.fullname,
    username: this.username
})
process.env.ACCESS_TOKEN_SECRET,
{
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
}
}
//RefrshToken
UserSchema.methods.generateRefreshToken = function (){
 jwt.sign({
    _id : this._id,
})
process.env.REFRESH_TOKEN_SECRET,
{
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
}
}
UserSchema.methods.generateRefreshToken = function (){}
export const User = mongoose.model("User", UserSchema);
