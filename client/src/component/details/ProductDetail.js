import { Box, Table, TableBody, TableCell, TableRow, Typography, styled } from '@mui/material'
import React from 'react';
import {LocalOffer as Badge }from '@mui/icons-material';


const SmallText = styled(Box)`
font-size:14px;
vertical-align:baseline;
& >p{
 font-size:14px;
 margin-Top:10px;
}
`;
const StyledBadge = styled(Badge)`
margin-right:10px;
color:#00cc00;
font-size:15px;
`;
const ColumnText = styled(TableRow)`
font-size:14px;
vertical-align:baseline;
& > td {
 font-size:14px;
 margin-top:10px ;
 border:none;
}
`

const ProductDetail = ({product}) => {
 const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
 const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
 const date= new Date (new Date().getTime()+(5*24*60*60*1000));
  return (
    <div>
      <Typography>{product.title.longTitle}</Typography>
         <Typography style={{marginTop:5,color:'#878787',fontSize:14}}>8 rating & 1 Reviews
           <Box component='span'><img src={fassured} alt='fsss' style={{width:77,marginLeft:20}}/></Box>
         </Typography>
           <Typography>
            <Box component='span'style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{color:'#388E3C'}}>{product.price.discount}off</Box>
          </Typography>
          <Typography>Available offers</Typography>
          <SmallText>
            <Typography><StyledBadge/>Bank OfferFlat ₹1250 Discount on HDFC Bank Credit Card EMI Transactions on orders of ₹15,000 and above T&C</Typography>
            <Typography><StyledBadge/>10% off on DBS Bank Debit and Credit Card Transactions, up to ₹1500. On orders of ₹5,000 and aboveT&C</Typography>
            <Typography><StyledBadge/>10% off on DBS Bank Debit and Credit Card Transactions, up to ₹1500. On orders of ₹5,000 and aboveT&C</Typography>
            <Typography><StyledBadge/>Flat ₹4000 Discount on HDFC Bank Credit Card EMI Transactions on orders of ₹50,000 and aboveT&C</Typography>
            <Typography><StyledBadge/>10% off on IndusInd Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹7,500 and aboveT&C</Typography>
            <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank CardT&C</Typography>
            <Typography><StyledBadge/>No cost EMI ₹1,417/month. Standard EMI also available</Typography>
          </SmallText>
          <Table>
           <TableBody>
             <ColumnText>
              <TableCell style={{color:"#878787"}}>Delivery</TableCell>
              <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString() } | ₹40 </TableCell>
             </ColumnText>
             <ColumnText>
              <TableCell style={{color:"#878787"}}>Warranty</TableCell>
              <TableCell >No Warranty</TableCell>
             </ColumnText>
             <ColumnText>
              <TableCell style={{color:"#878787"}}>Seller</TableCell>
              <TableCell >
                <Box component='span' style={{color:'#2874f0'}}>SuperComNet</Box>
                <Typography>GST invoice available</Typography>
                <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
              </TableCell>
             </ColumnText>
             <ColumnText>
              <TableCell colSpan={2}>
               <img src={adURL} style={{width:390}} alt='coin'/>
               </TableCell>
               </ColumnText>
               <ColumnText>
              <TableCell style={{color:"#878787"}}>Description</TableCell>
              <TableCell >{product.description}</TableCell>
             </ColumnText>
           </TableBody>

          </Table>
    </div>
  )
}

export default ProductDetail