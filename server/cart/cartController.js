const cart = require("./cartSchema")  


async function getAll(req, res) {
    const products = await cart.find({})
    res.json(products);
  } 


 const deleteProduct = (req , res) => {  
    
    cart
      .deleteOne({_id : req.params.id})  
      .then(()=>  console.log("Product deleted !!")) 
      .catch((err)=> res.send(err));
      
 }   

 const addProduct = (req , res) => {  
    
    cart
      .insertMany({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        price: req.body.price, 
        userId : req.body.userId
       
      })
      .then((data) => {
        res.send(data); 
        console.log("product added successfully");
      });
 }  

 module.exports = {getAll, deleteProduct,addProduct}