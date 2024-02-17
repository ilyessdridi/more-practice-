const mongoose = require('mongoose') ;
const mongoUri = 'mongodb+srv://ilyess:ilyess@cluster0.d3nnqvp.mongodb.net/?retryWrites=true&w=majority' ; 
  async function connectToMongoDB() {
    try {
      await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
  
  connectToMongoDB();


  
  
  
  
