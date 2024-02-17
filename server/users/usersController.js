const bcrypt = require('bcrypt');
const User = require ("./usersSchema") ; 
const jwt = require("jsonwebtoken");

const register = (request,response)=> {  
    
    const {
        body: { name , email, password },
      } = request;
  
      if ( !name && !email && !password) {
        return response.status(301).json({
          message: "Please fill all fields",
        });
      }
      if (email.includes("@") === false) {
        return response.status(301).json({
          message: "Invalid Email",

        });
      }   
      
      if (password.length < 4) {
        return response.status(301)
        .json({
          message: "Invalid Password  (minimum 4 characters ) ",
        });
      }
    //hash the password 10 times or 10 salt rounds 
    bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => { 
        console.log( "hash : "  ,hashedPassword);
      // create a new user instance and collect the data
      const user = new User({ 
        name : request.body.nametr
        
        ,
        email: request.body.email,
        password: hashedPassword,
      });

      // save the new user
      user
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    //catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
 

}  




const login = (request,response)=> {  
  User.findOne({ email: request.body.email })

  // if email exists
  .then((user) => {
    // compare the password entered and the hashed password found
    bcrypt
      .compare(request.body.password, user.password)

      // if the passwords match
      .then((passwordCheck) => {

        // check if password matches
        if(!passwordCheck) {
          return response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        }

        //   create JWT token
        const token = jwt.sign(
          {
            userId: user._id,
            userEmail: user.email,
          },
          "RANDOM-TOKEN",
          { expiresIn: "24h" }
        );

        //   return success response
        response.status(200).send({
          message: "Login Successful",
          email: user.email,
          token, 
          id : user._id,
        });
      })
      // catch error if password does not match
      .catch((error) => {
        response.status(400).send({
          message: "Passwords does not match",
          error,
        });
      });
  })
  // catch error if email does not exist
  .catch((e) => {
    response.status(404).send({
      message: "Email not found",
      e,
    });
  });
} 
module.exports = {login , register }