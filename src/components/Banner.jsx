import React from 'react' 
import Button from '../Utility/Button' 
import bannerImg from '../assets/banner.jpg' 
 
const Banner = () => { 
  return ( 
    <div className='bg-[#9538E2] relative rounded-t-none rounded-3xl h-[450px]'> 
      <div className='text-center py-10'> 
      <h2 className='text-5xl font-bold  text-white mb-4'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2> 
      <p className='text-white mb-5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p> 
      <Button btnInside={'Shop Now'}></Button> 
      </div> 
 
      <div className='w-[504px] left-1/2 transform -translate-x-1/2 absolute border p-2  rounded-2xl backdrop-blur-md '> 
        <img className='w-full rounded-2xl ' src={bannerImg} alt="" /> 
      </div> 
     
 
    </div> 
  ) 
} 
 
export default Banner