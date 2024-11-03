import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='px-8 mx-auto'>
        {/* Navbar */}
        <Navbar></Navbar>
        {/* Nested Components */}
        <Outlet></Outlet>
        {/* Footer */}
        <Footer></Footer>
    </div>
  )
}

export default MainLayout