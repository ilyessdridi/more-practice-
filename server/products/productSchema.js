const mongoose =require('mongoose'); 
const productSchema = new mongoose.Schema({  
 name : { 
  type : 'string',
  required : [true, "please provide a name"] ,
 
 },
  imageUrl :  { 
    type : "string" , 
    required: [true, "Please provide the image"],
    
  } ,
  description : { 
    type : "string" ,  
    required: [true, "Please provide the description"], 
    
  }  ,  
  price : Number 
    
  }

) 

module.exports =  mongoose.model ("Product", productSchema) ; 
