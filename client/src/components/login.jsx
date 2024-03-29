import React, { useState } from 'react'; 
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";  
import { useNavigate } from 'react-router-dom';

import axios from "axios";


export default function Login() { 
 const [email, setEmail] = useState("") ; 
 const [password, setPassword] = useState("") ;  
 const navigate = useNavigate()

 const handleSubmit = async () => {
  // e.preventDefault();
  try {
      const user = await axios
    .post('http://localhost:4000/users/login',{email,password})
    .then((res)=>{ console.log(res.data.id); 
    localStorage.setItem('id' , res.data.id);
    navigate('/home');
  
  
  })
  //   console.log(user); 
     // Data received from the server
  }  catch (error) {
      alert   (error.response.data.message);
      
  }   
};


  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
/*                 onSubmit={handleSubmit}
 */                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email" 
                  autoFocus
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password" 
                  onChange={(e)=>{setPassword(e.target.value)}}

                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  // type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }} 
                  onClick={()=>{handleSubmit()}}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item >
                    <Link href="/register" variant="body2" >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
  

