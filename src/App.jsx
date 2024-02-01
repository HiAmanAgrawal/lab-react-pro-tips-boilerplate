import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Registration from './components/Registration';


function App() {
  

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Registration' element={<Registration />} />
      </Routes>
    </div>
        );
}

export default App;
