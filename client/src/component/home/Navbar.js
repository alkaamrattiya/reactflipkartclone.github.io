import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { navData } from '../../constants/Data'

const Component = styled(Box)(({theme})=>({
display:'flex',
margin:'55 130 0 130',
overflow:'hidden',
justifyContent:'space-between',
[theme.breakpoints.down('lg')]:{
  margin:0
}
}));


const Container = styled(Box)`
padding:12px 8px;
text-align:center
`
const Text = styled(Typography)`
font-size:14px;
font-weight:600px;
font-family:inherit;
`

const Navbar = () => {
  return (
    <Box style={{background:'#fff'}}>
    <Component>
     {
      navData.map(data=>(
       <Container>
        <img src={data.url} alt="nav" style={{width:64}}/>
        <Text>{data.text}</Text>
       </Container>
      ))
     }
   </Component>
   </Box>
  )
}

export default Navbar