const mongoose = require('mongoose') ;
const mongoUri = 'mongodb+srv://ilyess:ilyess@cluster0.d3nnqvp.mongodb.net/?retryWrites=true&w=majority' ; 

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  
  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });
  
  db.once('open', () => {
    console.log('Connected to MongoDB');
    // Your MongoDB-related code goes here
  });





