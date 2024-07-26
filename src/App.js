import React from 'react'
import Wether from './component/hook/Wether';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './component/hook/Notfound';

import Header from './component/header/Header';
import Home from "./page/home/Home";

import Product from './page/products/Product';
import { Container } from 'reactstrap';
import ProductDetail from './page/products/ProductDetail';


import Register from './page/user/Register';
import { AppProvider } from "./AppContext";
import Cart from './component/cart/Cart';
function App() {
  return (
   <>
  
<AppProvider>
<Container>
    <BrowserRouter>
    
      <Routes>

      <Route index element={<Home/>}/>
      {/* <Route path="/product" element={<Product/>}/> */}
      <Route path="*" element={<Notfound/>}/>
    <Route path="/product/:id" element={<ProductDetail/>}  />
    <Route path="/product" element={<Product/>}  />
    <Route path="/register" element={<Register/>}  />
    <Route path="/cart" element={<Cart/>}  />
      </Routes>
    
    </BrowserRouter>
    </Container>
    </AppProvider>
    </>
  );
}

export default App;
