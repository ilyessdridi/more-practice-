const mongoose = require('mongoose') ; 
const CartSchema = new mongoose.Schema ({ 
  name :  { 
    type :'string' , 
    required : true, 
  } , 
  imageUrl :   { 
    type :'string' , 
    required : true, 
  } , 
  price : Number ,  
  userId : String , 
}) 



module.exports =  mongoose.model ("Cart", CartSchema) ; 
