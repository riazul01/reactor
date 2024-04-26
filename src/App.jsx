import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// pages
import Home from './pages/Home';
import Clock from './pages/projects/Clock';
import Stopwatch from './pages/projects/Stopwatch';
import RecursivePartioning from './pages/recursive-partitioning/RecursivePartioning';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/clock" element={<Clock />}/>
        <Route path="/stopwatch" element={<Stopwatch />}/>
        <Route path="/recursive-partitioning" element={<RecursivePartioning />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;