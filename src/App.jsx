import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import React from 'react';
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';


function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={ <><Home /></>}></Route>
        <Route path='/aboutMe' element={ <><AboutMe /></>}></Route>
        <Route path='/contactMe'element={ <><ContactMe /></> }></Route>
      
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
