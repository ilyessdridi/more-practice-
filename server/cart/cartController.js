const cart = require("./cartSchema")  


async function getAll(req, res) {
    const products = await cart.find({}).populate({ path: "_id", select: "name" });
    res.send(products);
  } 


 const deleteProduct = (req , res) => {  
    
    cart
      .deleteOne({id : req.params.id}) 
      console.log("Product deleted !!");
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