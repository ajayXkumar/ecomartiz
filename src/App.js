import Navbar from "./navbar"
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./screens/product";
import Cart from "./screens/cart";
import { CartProvider } from "./context/shopcartcontext";
import Usermanager from './screens/usermanager'
import Addproduct from "./screens/addproduct";
function App() {
  
  return (
    <CartProvider>
    <BrowserRouter>
    <div className="App">
          <Navbar/>
        <Routes> 
          <Route  path="/" element={<Product/>}/>
          <Route  path="/cart" element={<Cart/>}/>
          <Route  path="/Usermanager" element={<Usermanager/>}/>
          <Route path="/addproduct" element={<Addproduct/>}/>
        </Routes>

    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
