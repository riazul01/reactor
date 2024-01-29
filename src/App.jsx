import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/home/Home';
import Clock from './pages/clock/Clock';
import Stopwatch from './pages/stopwatch/Stopwatch';
import PasswordChecker from './pages/password-checker/PasswordChecker';
import SearchFilter from './pages/search-filter/SearchFilter';
import FormValidator from './pages/form-validator/FormValidator';
import TextAnalyzer from './pages/text-analyzer/TextAnalyzer';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/clock" element={<Clock />}/>
        <Route path="/stopwatch" element={<Stopwatch />}/>
        <Route path="/password-checker" element={<PasswordChecker />}/>
        <Route path="/search-filter-pagination" element={<SearchFilter />}/>
        <Route path="/form-validator" element={<FormValidator />}/>
        <Route path="/text-analyzer" element={<TextAnalyzer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;