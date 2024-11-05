import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';



const MainLayout = () => {
  return (
    <div className='px-8 mx-auto'>

      <Toaster/>
    
       
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout