import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import NotScary from './pages/NotScary';
import Scary from './pages/Scary';
import Terrifying from './pages/Terrifying';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notscary" element={<NotScary />} />
        <Route path="/scary" element={<Scary />} />
        <Route path="/terrifying" element={<Terrifying />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
