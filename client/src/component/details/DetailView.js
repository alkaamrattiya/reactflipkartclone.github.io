import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { useParams} from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productAction';
import { Box, Grid, styled } from '@mui/material';
import DetailActionItem from './DetailActionItem';
import ProductDetail from './ProductDetail';

const Component = styled(Box)`
backgrond:#F2F2F2;
margin-top:55px;
`;
const Container = styled(Grid)(({theme})=>({
  backgrond:'#ffffff',
  display:'flex',
  [theme.breakpoints.down('md')]:{
    margin:0
  }
}))



const RightContainer = styled(Grid)`
margin-top:50px;

`

const DetailView = () => {
const dispatch = useDispatch();
const {id} = useParams();
const {loading,product} =  useSelector(state =>state.getProductDetails);

  useEffect(()=>{
     if(product && id !==product.id)

     dispatch(getProductDetails(id))
  },[dispatch,id,loading,product])

  console.log(product);

  return (
    <Component>
    {
       product && Object.keys(product).length &&
         <Container container>
           {/*left side data */}                  
            <Grid item lg={4} md={4} sm={8} xs={12}>
              <DetailActionItem product={product}/>
            </Grid>
            {/*right side data */}    
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
               <ProductDetail product={product}/>
            </RightContainer>
         </Container>
    }
    </Component>
  )
}

export default DetailView