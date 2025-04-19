import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import HomePage from './Pages/HomePage'
import PortfolioPage from './Pages/PortfolioPage'
import ResumePage from './Pages/ResumePage'
import Layout from './Hooks/Layout'
import SideIcons from './Static/SideIcons'
import ToolStackPage from './Pages/ToolStackPage'

// const SideIconsWrapper = () =>{
//   const location = useLocation();
//   return location.pathname === '/' ? <SideIcons/> : null; 
// };

const App = () => {
  return (
    <div>
      <BrowserRouter>          

        <Routes>

          <Route path='/' element={<HomePage/>}/>

          <Route element={<Layout/>}>

            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/resume' element={<ResumePage/>}/>
            <Route path='/toolstack' element={<ToolStackPage/>}/>
            <Route path='/portfolio' element={<PortfolioPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>

          </Route>

        </Routes>

        <SideIcons/>
        {/* <SideIconsWrapper/> */}

      </BrowserRouter>
    </div>    
  );
};

export default App;

