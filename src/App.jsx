import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'

import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx'
import GetInvolved from './pages/GetInvolved.jsx'

import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx';


function App() {
  return (
    <div className='bg-gray-950 text-gray-50'>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/get-involved' element={<GetInvolved />} />
        <Route path='/gallery' element={<GetInvolved />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
