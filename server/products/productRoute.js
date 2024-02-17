const router = require("express").Router();  
const {getAll , getOne , addProduct} =require ("./productController")

router.get("/getAll",getAll) ; 
// router.get("/getOne",getOne) ;  
router.post("/addProduct",addProduct) ; 


module.exports = router ;
