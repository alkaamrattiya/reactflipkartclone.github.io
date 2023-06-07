import { AppBar, Box, Drawer, IconButton, List, ListItem, Toolbar,styled } from '@mui/material'
import React, { useState } from 'react'
import alklogo from "./alklogo.png"
import plus from "./plus.png"
import { Menu}from '@mui/icons-material';

// component
import Search from './Search'
import CustomBottons from './CustomBottons'
import { Link } from 'react-router-dom'

const StyledHeader =styled(AppBar)`
backgrond:#2874f0;
heigth:45px;`
const Component=styled(Link)`
margin-left:12%;
text-decoration:none;

`
const Pluss = styled('img')({
  width:50,
  height:50
  })

const CustButtonWrapper=styled(Box)(({theme})=>({
margin:'0 5% 0 auto',
[theme.breakpoints.down('md')]:{
  display:'none'
}
}));
const MenuButton = styled(IconButton)(({theme})=>({
display:'none',
[theme.breakpoints.down('md')]:{
  display:'block'
}
}))

const Header = () => {
 const [open ,setOpen] = useState(false);
 const handleOpen=()=>{
  setOpen(true);
 };
 const handleClose=()=>{
 setOpen(false);
 }

 const list=()=>(
  <Box style={{width:200}} onClick={handleClose}>
    <List>
      <ListItem button>
       <CustomBottons/>
      </ListItem>
    </List>
  </Box>
 )

  return (
    <StyledHeader>
        <Toolbar>
        <MenuButton color="inherit" onClick={handleOpen}>
           <Menu/>
        </MenuButton>
        <Drawer open={open} onClose={handleClose} >
          {list()}
        </Drawer>
     <Component to='/' style={{display:"flex"}}>
     <img src={alklogo} alt='img' style={{width:60}}/>
     <Box component={"h1"} style={{color:'#ffe500'}}>plus</Box>
     <Pluss src={plus} alt="img"/>

     </Component>
     <Search/>
     <CustButtonWrapper>
     <CustomBottons/>
    </CustButtonWrapper>
     </Toolbar>
    </StyledHeader>
  )
}

export default Header;