import React from 'react'
import './App.css'
import Header from './component/Header'
import Userform from './component/Userform'
import List from './component/List'
import UpdateUser from './component/UpdateUser';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {  Outlet } from "react-router";
function App() {

  return (
    <div>
       <BrowserRouter>
    <Header />
    <Routes>
    <Route path="Userform" element={<Userform />} />
    <Route path="List" element={<List />} />
    <Route path="update/:id" element={<UpdateUser />} />
    
  </Routes>
    </BrowserRouter>
    <Outlet/>
     </div>
  )
}

export default App