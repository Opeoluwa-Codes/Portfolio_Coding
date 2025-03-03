import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import HomePage from './Pages/HomePage'
import PortfolioPage from './Pages/PortfolioPage'
import ResumePage from './Pages/ResumePage'
import TestimonialPage from './Pages/TestimonialPage'
import TestPage from './Pages/TestPage'
import Layout from './Hooks/Layout'
import SideIcons from './Static/SideIcons'

const App = () => {
  return (
    <div>
      <BrowserRouter>          
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route element={<Layout/>}>
            {/* <Route path='/' element={<TestPage/>}/> */}
            {/* <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/portfolio' element={<PortfolioPage/>}/>
            <Route path='/resume' element={<ResumePage/>}/>
            <Route path='/testimonial' element={<TestimonialPage/>}/> */}
          </Route>
        </Routes>
        <SideIcons/>
      </BrowserRouter>
    </div>    
  );
};

export default App;