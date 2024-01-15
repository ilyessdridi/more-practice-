import React from 'react';
import './App.css';  
import { BrowserRouter as Router, Route, Link ,Routes} from 'react-router-dom';
import Login from './login';  
import Cart from './cart';





function App() {
  return ( 
    
   <Router>  
      <Routes>
  
  <Route path="/Login"  element={<Login />} /> 
        
        <Route path="/Cart" element={<Cart />} />
    
        </Routes>
   </Router> 
   
  );
}

export default App;
