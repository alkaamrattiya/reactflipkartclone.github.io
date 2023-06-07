import { Box, Button, styled } from '@mui/material'
import React, { useState } from 'react';
import {ShoppingCart as Cart, FlashOn as Flash} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { payUsingPaytm } from '../../service/Api';
import {post} from '../../utils/paytm';

const LeftContainer = styled(Box)(({theme})=>({
minWidth:'40%',
padding:'40px 0 0 80px',
[theme.breakpoints.down('lg')]:{
  padding:'20px 40px'
}
}))

const Imagee = styled('img') ({
 padding:'15px'
});
const Buttonn = styled(Button)(({theme})=>({
width:'48%',
height:'50px',
borderRadius:'2px',
[theme.breakpoints.down('lg')]:{
  width:"46%"
},
[theme.breakpoints.down('sm')]:{
  width:"48%"
}
}))


const DetailActionItem = ({product}) => {
  const navigate = useNavigate(); 
  const dispatch =useDispatch();

  const [quantity,setQuantity]=useState(1);
  const {id}= product;

  const addItemtoCart =()=>{
    dispatch(addToCart(id,quantity))
  navigate('/cart');
  }

  const buyNow = async()=>{
    let response = await payUsingPaytm({amount:50,email:"codeforinterview01@gmail.com"});
    let information={
      action:'https://securegw-stage.paytm.in/order/process',
      params:response
    }
    post (information);
  }
  return (
    <LeftContainer>
       <Box style={{padding:'15px 20px', border:'1px solid #f0f0f0',width:'90%'}}>
         <Imagee src={product.detailUrl} alt='detail'/>
       </Box>
       <Buttonn variant='contained' onClick={()=>addItemtoCart()} style={{marginRight:10, background:'#ff9f00'}}><Cart/>Add to Cart</Buttonn>
       <Buttonn variant='contained'onClick={()=>buyNow()} style={{background:'#fb541b'}}><Flash/>Buy now</Buttonn>
    </LeftContainer>
  )
}

export default DetailActionItem