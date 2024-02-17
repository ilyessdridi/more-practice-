const Product = require("./productSchema")  


async function getAll(req, res) {
    const products = await Product.find({}).populate({ path: "_id", select: "name" });
    res.send(products);
  } 


 const addProduct = (req , res) => {  
    
    Product
      .insertMany({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
       
      })
      .then((data) => {
        res.send(data); 
        console.log("product added successfully");
      });
 }  

 module.exports = {getAll, addProduct}