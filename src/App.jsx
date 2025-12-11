
import { useState } from 'react'
import Navbar from './components/topHead/Navbar.jsx' 
import MainHome from './MainHome.jsx'; 
import LoginPage from './components/Login page/Loginpage' 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<MainHome />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App