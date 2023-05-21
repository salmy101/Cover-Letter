import React from 'react'
import "./index.scss"
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/index';
import Hero from '../Hero';

import About from '../About';
import Projects from '../Projects';
import Company from '../Company';



function Layout() {
  return (
    <div className='App'>
      <Navbar />
      <div className="page"> 
      <Hero />
      <About />
       <Projects />
       <Company /> 
      {/* <Outlet /> */}

      </div>
      </div>
  )
}

export default Layout