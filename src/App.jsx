import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// pages
import Home from './pages/home';
import Clock from './pages/projects/Clock';
import Stopwatch from './pages/projects/Stopwatch';
import SplitScreen from './pages/projects/split-screen';
import Todo from './pages/projects/Todo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/clock" element={<Clock/>}/>
        <Route path="/stopwatch" element={<Stopwatch/>}/>
        <Route path="/split-screen" element={<SplitScreen/>}/>
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;