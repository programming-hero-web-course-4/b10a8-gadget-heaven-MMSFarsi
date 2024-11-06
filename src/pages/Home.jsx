import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import { Outlet, useLoaderData } from 'react-router-dom'

const Home = () => {
    const categories=useLoaderData()
  return (
    <div className='bg-[rgba(9,8,15,0.05)]  pb-12'>
        <Banner></Banner>

        <h2 className='py-12 mt-52 text-center font-bold text-3xl'>Explore Cutting-Edge Gadgets</h2>

    <div className="grid grid-cols-12">
        <div className='col-span-3'> <Categories categories={categories}></Categories> </div>
        <div className='col-span-9'>   <Outlet></Outlet> </div>

    </div>
  

    </div>

  )
}

export default Home