import * as React from 'react'; 
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card'; 
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid,Button, CardActionArea, CardActions } from '@mui/material';
import axios from 'axios'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
// import Button from '@mui/material/Button'; 
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Checkbox from '@mui/material/Checkbox';
// import { addProduct } from '../../../server/cart/cartController';


const theme = createTheme() 


export default function MultiActionAreaCard() { 
   const [products , setProducts] = useState([]) ;  
   const [checked , setChecked] = useState(true) ;   
   const [userId,setUserId] = useState("")
   console.log(userId); 


   useEffect(() =>{
    setUserId( localStorage.getItem('id')) ; 
 
   },[])
    
   
  //    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  // };
//    const [color, setColor] = useState('primary');

//    const handleClick = () => {
//     // Change the color to 'error' (red) when the button is clicked
//     setColor('error');
//   };


   useEffect(()=>{ 
    axios.get("http://localhost:4000/products/getAll") 
    .then((res)=>{setProducts(res.data)})
   },[]) 

   const addToCart =(product)=>{ 
    axios.post("http://localhost:4000/cart/addProduct" , {name : product.name ,imageUrl : product.imageUrl , price : product.price , userId })  
    console.log(product);
   }

  return (  
    <> 
    <Grid  > 
    <Checkbox defaultChecked = {false} />
    
    
    </Grid>
    <Grid overflow= {"auto"} container spacing={100}  rowSpacing={8} columnSpacing={-10} position = {"absolute"}  
    >
        {products.map((product)=>{ 
            return (   
               <Grid  
                // container
                // spacing={2}
                // direction="row"
                // justify="flex-start"
                // alignItems="flex-start"  
                item  
                xs={3}  
                justify-content =  "flex-end"  
                

               
                           >
                <ThemeProvider 
                 theme={theme} >
                 <Card   
 style={{ margin: theme.spacing(2) }} 
 direction = "row"  
                    sx={{ maxWidth: 400 }}  
                   > 
    
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // height="140"
                    image= {product.imageUrl}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      {product.description} 
                    </Typography> */}
                  </CardContent>
               
                  <Typography size="small" color="primary" variant='h6' marginLeft={2} >
                       {product.price} DT
                  </Typography>
               
                </CardActionArea> 
                {/* <FavoriteBorderIcon /> */} 
                <CardActions disableSpacing >
                {/* <IconButton aria-label="add to favorites" color="error" >
          <FavoriteIcon />
        </IconButton>  */}
        <IconButton  aria-label="add to shopping cart" color='primary' onClick={()=> {addToCart(product)}} > 
        <AddShoppingCartIcon /> 
        </IconButton>
                </CardActions>
              </Card> 
              </ThemeProvider> 
               </Grid>
       )
        })}
   
    </Grid> 
    </>
  );
}
