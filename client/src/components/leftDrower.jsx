import * as React from 'react';
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
import Favorite from '@mui/icons-material/Favorite';
import ShoppingCartSharp from '@mui/icons-material/ShoppingCartSharp'; 
import AccountBoxIcon from '@mui/icons-material/AccountBox'; 
import LogoutIcon from '@mui/icons-material/Logout'; 
import { useNavigate } from 'react-router-dom';

export default function TemporaryDrawer() {
    const Navigate = useNavigate() 
    const handelClick = (text)=>{ 
    //  if (text == "Favorite") {Navigate("/favorite")} 
    //   if (text == "Cart") {Navigate("/cart")}  
      if (text == "Profile") {Navigate("/Profile")}   
      if (text == "Logout") {  
        localStorage.removeItem("id");
        Navigate("/Login")} 
    console.log(text);
    }
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  }); 

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {['Favorite', 'Cart'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={()=>{handelClick(text)}}>
              <ListItemIcon >
                {index % 2 === 0 ? <Favorite  /> : <ShoppingCartSharp />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider /> */}
      <List >
        {['Profile', 'Logout'].map((text, index) => (
          <ListItem  key={text} disablePadding>
            <ListItemButton onClick={()=>{handelClick(text)}}>
              <ListItemIcon>
                {index % 2 === 0 ? <AccountBoxIcon /> : <LogoutIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div> 
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}