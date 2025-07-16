import React from 'react'
import './App.css'
import  Header  from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {  Outlet } from "react-router";
function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="service" element={<Service />} />
    <Route path="contact" element={<Contact />} />
  </Routes>
    </BrowserRouter>
    <Outlet />
  </>
  )
}

export default App
