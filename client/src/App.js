
import './App.css';
// components
import Header from './component/header/Header';
import Home from './component/home/Home';
import DataProvider from './context/Dataprovider';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailView from './component/details/DetailView';
import Cart from './component/cart/Cart';

function App() {
  return (
    <DataProvider>
     <BrowserRouter>
     <Header/>
      <Box style={{marginTop:85}}>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<DetailView/>}/>
        <Route path='/cart' element={<Cart/>}/>
       </Routes>
      </Box>

     </BrowserRouter>
    </DataProvider>
  );
}

export default App;
