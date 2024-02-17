const express = require('express');
const app = express();
const port = 4000; 
const cors = require("cors"); 
var db = require('./db') 



app.use(cors()) ;
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "../client/public"));



app.get('/', (req, res) => {res.status(200).send('Hello, Express!');}); 

app.use('/users' ,require("./users/usersRoute")) 
app.use("/products" , require("./products/productRoute"))
app.use("/cart" , require("./cart/cartRoute"))




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

