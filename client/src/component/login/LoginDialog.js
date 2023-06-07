

import { Box, Button, Dialog, TextField, Typography, styled } from '@mui/material'
import React, { useState,useContext } from 'react'
import { authenticateSignup ,authenticatelogin} from '../../service/Api'
import { DataContext } from '../../context/Dataprovider'

const MainBox = styled(Box)`
 height:70vh;
 width:90vh;
`
const Image = styled(Box)`
background:#2874f0 url( https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat ;
height:83%;
width:28%;
padding:45px 35px;
&>p,&>h5{
 color:#ffffff;
 font-weight:600;
}
`
const Box2 = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
& >div,&>button,& >p {
 margin-top:20px;
}
`;
const LoginButton = styled(Button)`
text-transform:none;
background:#fb641b;
color:#fff;
height:48px;
border-radius:2px;
`;
const RequestOTP = styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Text = styled(Typography)`
font-size:12px;
color:#878787;
`;
const Creataccount = styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;

`;
const Error = styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
`
const accountIntitalValue={
 login:{
  view:'login',
  heading:'Login',
  subHeading:'Get access to your Orders, Wishlist and Recommendations'
 },
 signup:{
  view:'signup',
  heading:"Looks like you're new here!",
  subHeading:"Sign up with your mobile number to get started"
 }
}
const signupIntitailValue ={
 firstname:"",
 lastname:"",
 username:"",
 email:"",
 password:"",
 phone:"",
}
const loginInitialValue = {
  username:"",
  password:""
}

const LoginDialog = ({open,setOpen}) => {

 const [account, toggleAccount]=useState(accountIntitalValue.login);
 const [signup,setSignup]=useState(signupIntitailValue);
 const [login ,setLogin]= useState(loginInitialValue);
 const [error, setError]= useState(false);

 const {setAccount}=useContext(DataContext);

 const handleclos = ()=>{
  setOpen(false);
  toggleAccount(accountIntitalValue.login);
  setError(false);
 }
 const toggleSignup=()=>{
  toggleAccount(accountIntitalValue.signup);
 }
 const inputChange=(e)=>{
  console.log(e.target.value);
  setSignup({...signup,[e.target.name]:e.target.value});

 }
 const signuphandler = async()=>{
  let response = await authenticateSignup(signup);
  if (!response) return;
  handleclos();
  setAccount(signup.firstname);
}
const onValueChange = (e)=>{
setLogin({...login,[e.target.name]:e.target.value});
}
const loginUser = async()=>{
 let response = await authenticatelogin (login);
 if(!response)
  setError(true);
  
else{
  setError(false);
  handleclos();
  setAccount(login.username);

 }
}


  return (
    <Dialog open={open} onClose={handleclos} PaperProps={{sx:{maxWidth:"unset"}}}>
    <MainBox>
        <Box style= {{display:'flex', height:'100%'}}>
    {/*login Dialog left */}    
     <Image>
      <Typography variant='h5'>{account.heading}</Typography>
      <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
     </Image>
     {/*login Dialog right */}     
     {
       account.view ==='login' ?
      <Box2>
     <TextField onChange={(e)=>onValueChange(e)} name='username' label="Enter username" variant="standard" />
     {error && <Error>Please enter valid usename or password </Error>}
     <TextField onChange={(e)=>onValueChange(e)} name='password' label="Enter password" variant="standard" />
     <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
     <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
     <Typography style={{textAlign:'center'}}>OR</Typography>
     <RequestOTP>Request OTP</RequestOTP>
     <Creataccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</Creataccount>
     </Box2>
     :
     <Box2>
     <TextField name='firstname' label="Enter Firstname" onChange={(e)=>inputChange(e)} variant="standard" />
     <TextField name="lastname" label="Enter Lastname" onChange={(e)=>inputChange(e)} variant="standard" />
     <TextField name="username" label="Enter Username" onChange={(e)=>inputChange(e)} variant="standard" />
     <TextField name="email" label="Enter Email" onChange={(e)=>inputChange(e)} variant="standard" />
     <TextField name="password" label="Enter password" onChange={(e)=>inputChange(e)} variant="standard" />
     <TextField name="phone" label="Enter Phone" onChange={(e)=>inputChange(e)} variant="standard" />
     
     <LoginButton onClick={()=>signuphandler()}>Continue</LoginButton>
     
     </Box2>
     }

     </Box>
    </MainBox>
    
    
    
    </Dialog>
  )
}

export default LoginDialog;