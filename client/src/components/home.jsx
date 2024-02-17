import React, {useEffect,useState} from 'react' 
import Navbar from './navbar' 
import AllProducts from './allProducts'   
// import Drower from "./leftDrower" 
import NewNavBar from "./newNavbar" 
import Cart from "./cart"

export default function Home() {   

  return (
    <div>   
      {/* <Drower />
      <Navbar  />    */} 
      {/* <Cart /> */}
      <NewNavBar /> 
     
      
      <AllProducts /> 
    </div>
  )
}
