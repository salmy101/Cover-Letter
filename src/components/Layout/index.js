import React from 'react'
import "./index.scss"
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/index';
import About from '../About';
import Projects from '../Projects';
import Company from '../Company';



function Layout() {
  return (
    <div className='App'>
      <Navbar />
      <div className="page"> 
      <About />
      <Projects />
      <Company />
      {/* <Outlet /> */}

      </div>
      
    </div>
  )
}

export default Layout