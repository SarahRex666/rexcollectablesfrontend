import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from "./TopNavbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Metazoo from './Metazoo';
import FleshAndBlood from './FleshAndBlood';
import Cart from './Cart';


export default function App() {
  return (
    <BrowserRouter>
    <nav>
    <TopNavbar />
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/metazoo" element={<Metazoo />} />
        <Route path="/fleshandblood" element={<FleshAndBlood />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}