const router = require("express").Router();  
const {getAll  , deleteProduct,addProduct} =require ("./cartController")

router.get("/getAll",getAll) ; 
// router.get("/getOne",getOne) ;  
router.delete ("/delete/:id",deleteProduct) ; 
router.post("/addProduct", addProduct) 



module.exports = router ;