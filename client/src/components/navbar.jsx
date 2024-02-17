import React from "react";  
import Drower from "./leftDrower"
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { 
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core"; 
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { Link } from "react-router-dom"; 
import IconButton from '@mui/material/IconButton'; 
import FavoriteIcon from '@mui/icons-material/Favorite';   
import InputBase from '@mui/material/InputBase';  
import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import SearchIconWrapper from '@mui/icons-material/SearchIconWrapper';



const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex-grow",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10), 
    marginRight : theme.spacing(10),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
})); 

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(100),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));    
// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));


// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));


function Navbar() {
  const classes = useStyles(); 
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          DonDon 
        </Typography>  
        
        {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <div className={classes.navlinks}>
            {/* <Link to="/" className={classes.link}>
              Home
            </Link> */}
            <Link to="/contact" className={classes.link}>
              Contact
            </Link> 
            <Link to="/login" className={classes.link}>
              SignUp
            </Link>
            {/* <IconButton edge="end" color="inherit" aria-label="menu"> */} 
            {/* <IconButton color="inherit" aria-label="menu"> 
          <FavoriteIcon />
        </IconButton>

            <IconButton edge="end" color="inherit" aria-label="menu"> 
          <ShoppingCartSharpIcon />
         </IconButton> */} 
         <Drower />
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;