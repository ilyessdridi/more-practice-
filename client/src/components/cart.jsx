import * as React from 'react';   
import ButtonGroup from '@mui/material/ButtonGroup';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@mui/material'; 
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail'; 
import MenuIcon from '@mui/icons-material/Menu'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Favorite from '@mui/icons-material/Favorite';
import ShoppingCartSharp from '@mui/icons-material/ShoppingCartSharp'; 
import AccountBoxIcon from '@mui/icons-material/AccountBox'; 
import LogoutIcon from '@mui/icons-material/Logout'; 
import { useNavigate } from 'react-router-dom';  
import { useState,useEffect } from 'react'; 
import axios from 'axios'; 


export default function TemporaryDrawer() {
    const Navigate = useNavigate()  
    const [cartProducts,setCartProducts] = useState([]) 
  const [state, setState] = React.useState({ right: false});  
  const [counter,setCounter]=useState(0)  
  const handleIncrement =()=>{ 
    setCounter(counter +1)
  }   
  const handleDecrement =()=>{ 
    setCounter( counter -1 )
   }
useEffect(() =>{  
  
  axios.get("http://localhost:4000/cart/getAll") 
  .then((res)=>{setCartProducts(res.data)})
},[])
  
const deleteOneProduct = (id)=>{ 
  axios.delete(`http://localhost:4000/cart/delete/${id}`) 
  .then(()=>{console.log("product deleted")})
}

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    > 
    {cartProducts.map((product, index) =>{ 
      return (   
        // <Grid> 
      <>
        <Card sx={{ maxWidth: 200, marginLeft : 20,  marginTop : 2, marginBottom : 2, maxHeight : 320}}  
        >
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image= {product.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>  
          <Typography gutterBottom variant="H6" component="div">
            {product.price} DT
          </Typography> 
          
        <Button  
        
        onClick={()=>{deleteOneProduct(product._id)}} 
        // onClick={()=>{console.log(product._id);}}
        >
          <DeleteIcon 

             ></DeleteIcon>
        </Button>
        </CardContent>
      </Card>   
        {/* <ButtonGroup size="small" aria-label="small outlined button group"> 
        <Button onClick={handleIncrement}>+</Button> 
        <Typography >Quantity : {counter}</Typography>
        <Button  onClick={handleDecrement}>-</Button> */}
        {/* {displayCounter && <Button disabled>{this.state.counter}</Button>}
        {displayCounter && <Button onClick={this.handleDecrement}>-</Button>} */}
      {/* </ButtonGroup> */}
     
      </>
     
      )
    })}
  
    </Box>
  );

  return (
    <div> 
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <ShoppingCartSharp onClick={toggleDrawer(anchor, true)}>{anchor}</ShoppingCartSharp>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          > 
           <Typography gutterBottom variant="h4" component="div" marginLeft={8}>
            Your Shopping Cart
          </Typography> 
          <Divider>Don</Divider>
            {list(anchor)} 
            <Divider>Don</Divider>
           <Typography variant = "h5" marginLeft={5}>Total : 155  </Typography>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}