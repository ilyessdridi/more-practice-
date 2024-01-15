const express = require('express');
const app = express();
const port = 4000; 
const cors = require("cors"); 
var db = require('./db')


app.use(cors()) ;
app.use(express.json());




app.get('/', (req, res) => {res.status(200).send('Hello, Express!');}); 








app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

