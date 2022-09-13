import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";
import NotFound from './components/NotFound';
import Itemlistcontainers from './conteiners/Itemlistcontainers';
import Home from './pages';
import Fume from './pages/fume';
import ItemDitailconteiner from './../src/conteiners/ItemDitailconteiner'







function App() {
  return (
    <Router>
        <BrowserRouter>
      <Navbar />      
      <Routes>
      <Route path='/' exact component={Home} />
        <Route path='/fume'component={Fume} />
        <Route path="/" element={<Itemlistcontainers/>}/>
        <Route path="/category/:categoryId" element={<Itemlistcontainers/>}/>
        <Route path="/detail/:productId" element={<ItemDitailconteiner/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>

   
    
    
    </Router>


  );
}

export default App;
