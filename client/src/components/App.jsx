import React from 'react';
import './App.css';  
import { BrowserRouter as Router, Route, Link ,Routes} from 'react-router-dom';
import Login from './login';  
import Cart from './cart'; 
import Home from './home';  
import Navbar from './navbar';
import Register from './register'; 
import Favorite from "./favorite" 
import Profile from './Profile';




function App() {
  return (  
    
    
    
    
    <Router>  
      {/* <Navbar/>  */}
      <Routes> 
        <Route  path = "/" element = {<Home />} ></Route>
  
  <Route path="/Login"  element={<Login />} />  
  <Route path="/register" element={<Register />} />
        
        <Route path="/Cart" element={<Cart />} /> 
        <Route path="/HOME" element={<Home />} /> 
        <Route path="/Favorite" element={<Favorite />} /> 
        <Route path="/Profile" element={<Profile />} />
    
        </Routes>
   </Router>  
   
  );
}

export default App;
