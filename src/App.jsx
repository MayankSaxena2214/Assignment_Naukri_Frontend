import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { UserData } from './context/UserContext'
import Login from './pages/Login/Login'
import {Toaster} from "react-hot-toast";
import Register from './pages/Register/Register'
const App = () => {
  const {user}=UserData();
  return (
    <BrowserRouter>
    <Toaster/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App