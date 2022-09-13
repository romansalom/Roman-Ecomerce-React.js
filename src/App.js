import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import NotFound from './components/NotFound';
import Itemlistcontainers from './conteiners/Itemlistcontainers';

import ItemDitailconteiner from './../src/conteiners/ItemDitailconteiner'







function App() {
  return (
    <BrowserRouter>
    <Navbar />      
    <Routes>
      <Route path="/" element={<Itemlistcontainers/>}/>
      <Route path="/category/:categoryId" element={<Itemlistcontainers/>}/>
      <Route path="/detail/:productId" element={<ItemDitailconteiner/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>


  );
}

export default App;
