import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.css';
import Clock from './pages/clock/Clock';
import Stopwatch from './pages/stopwatch/Stopwatch';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/clock" element={<Clock />}/>
        <Route path="/stopwatch" element={<Stopwatch />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;