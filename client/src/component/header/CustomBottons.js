import { Badge, Box, Button, Typography, styled } from '@mui/material'
import React, { useState,useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DataContext } from '../../context/Dataprovider';
//component
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';
import { Link } from 'react-router-dom';


import { useSelector } from 'react-redux';

const Wrapper = styled(Box)(({theme})=>({
display:'flex',
margin:'0 3% 0 auto',
'& > button,& > p , & > div ':{
 marginRight:'42px',
 fontSize:'18px',
 alignItem:'center'
},
[theme.breakpoints.down('md')]:{
  display:"block"
}
}))

const Container = styled(Link)(({theme})=>({
display:'flex',
textDecoration:'none',
color:'inherit',
[theme.breakpoints.down('md')]:{
  display:"block"
}
}))
const LogButton = styled(Button)`
color:#2874f0;
background:#fff;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:700;
height:38px;


`

const CustomBottons = () => {
  const [open ,setOpen]= useState(false);
  const { account ,setAccount}= useContext(DataContext);

  const { CartItem}= useSelector(state=> state.cart);
const openDialog =()=>{
  setOpen(true);
}

  return (
    <Wrapper>
    {
      account ? <Profile account={account} setAccount={setAccount}/>:
      <LogButton variant="contained" onClick={()=>openDialog()}>Login</LogButton>
    }
     
     <Typography style={{marginTop:3,width:180}}>Become a seller</Typography>
     <Typography style={{marginTop:3}}>More</Typography>
     <Container to="/cart">
     <Badge badgeContent={ CartItem ?.length} color ='secondary'>
     <ShoppingCartIcon/>
      </Badge>
     <Typography style={{marginLeft:10}}>Cart</Typography>
     </Container>
     <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
    </Wrapper>
  )
}

export default CustomBottons;