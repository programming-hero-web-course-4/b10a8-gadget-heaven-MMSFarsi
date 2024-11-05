import React from 'react'

const Footer = () => {
  return (
   <div className='mt-12'>
    <h2 className='text-center font-bold text-[#09080F] text-3xl'>Gadget Heaven</h2>
    <p className='text-center font-medium'>Leading the way in cutting-edge technology and innovation.</p>
    <footer className="footer mx-auto flex gap-44 justify-center  text-base-content p-10">
      
 <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
    
</footer>

   </div>
  )
}

export default Footer