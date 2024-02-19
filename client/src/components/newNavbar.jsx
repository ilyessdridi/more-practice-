import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; 
import LeftDrower from "./leftDrower" 
import Favorite from '@mui/icons-material/Favorite';
import ShoppingCartSharp from '@mui/icons-material/ShoppingCartSharp'; 
import Cart from "./cart" 


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
        </IconButton> */} 
          <LeftDrower />
          <Typography variant="h6" component="div" sx={{ flexGrow: 20 }} marginLeft={5}>
            Don
          </Typography> 
          <Cart />  
          
           
 
          {/* <Button color="inherit">Login</Button>  */} 
          {/* <IconButton sx={{ 
            color :"white", 
            marginRight : 5
          }}>  */}
            {/* <Favorite   />
          </IconButton  >  */} 

           {/* <IconButton sx={{ 
            color :"white", 
            
          }}> 
            <ShoppingCartSharp />
          </IconButton> */}  
          

        </Toolbar>
      </AppBar>
    </Box>
  );
}
