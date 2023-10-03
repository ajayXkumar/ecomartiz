const mongoose= require("mongoose")

const usermodel=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    
},{ collection: 'custom_users' });
const User=mongoose.model("User" , usermodel)
module.exports=User;