import { Box, InputBase, List, ListItem, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { getProducts } from '../../redux/actions/productAction';
import {useSelector , useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

const Searchc = styled(Box)`
 background:#fff;
 width:34%;
 border-radius: 2Px;
 margin-left:10px;
 display:flex;
 `
const Searchinput = styled(InputBase)`
 padding-left:20px ;
 width:100%;
 font-size:unset;
 `
 const Searchicon = styled(Box)`
 color:blue;
 padding:10px;
 ` ;
 const ListWrapper=styled(List)`
 position:absolute;
 background:#ffffff;
 color:#000;
 margin-top:36px;
 `


const Search = () => {
const [text, setText]= useState('');
const {products} = useSelector (state => state.getProducts);
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(getProducts())
},[dispatch])

const getText= (text)=>{
setText(text);
}

  return (
   <Searchc>
   <Searchinput 
   placeholder='Search for products,brands and more'
   onChange={(e)=>getText(e.target.value)} 
   value={text}
   />
   
   <Searchicon>
    <SearchIcon/>
   </Searchicon>
   {
    text &&
    <ListWrapper>
      {
        products.filter(product =>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
          <ListItem>
          <Link to={`/product/${product.id}`}
          onClick={()=>setText('')}
          style={{textDecoration:'none', color:'inherit'}}
          >
            {product.title.longTitle}
          </Link>
          </ListItem>
        ))
      }

    </ListWrapper>

   }
   </Searchc>
   
   
  )
}

export default Search;