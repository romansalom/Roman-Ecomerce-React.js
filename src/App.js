import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Itemlistcontainers from './conteiners/Itemlistcontainers';
import Home from './pages';
import Fume from './pages/fume';





function App() {
  return (
    <Router>
    
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/fume'component={Fume} />
      </Routes>
      <Itemlistcontainers greeting={'hola bienvenidos a nuestra app'}/>
    
    
    </Router>


  );
}

export default App;
