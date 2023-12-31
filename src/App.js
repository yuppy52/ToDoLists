import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Title } from './components/Title';
import { Login } from './components/Login';
import { Register } from './components/Register';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Title />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
