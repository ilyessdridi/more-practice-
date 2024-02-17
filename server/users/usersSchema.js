const mongoose =require('mongoose'); 
const UserSchema = new mongoose.Schema({  
 name : { 
  type : 'string',
  required : [true, "please provide a name"] ,
  unique : false,

  
 },
  email :  { 
    type : "string" , 
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  } ,
  password : { 
    type : "string" ,  
    required: [true, "Please provide a password!"], 
    unique : false
  } 
}) 

module.exports =  mongoose.model ("User", UserSchema) ; 
