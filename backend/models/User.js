const mongoose=require("mongoose");

const userMogoose=new mongoose.Schema({
   fName:String,
   lName:String,
   email:String,
   password:String
});

const User=mongoose.model("User",userMogoose);

module.exports=User;