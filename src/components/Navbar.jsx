import { Link, NavLink, useLocation } from 'react-router-dom';
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/' || location.pathname.startsWith('/categories/');



  return (
    <div className={`navbar ${isHomePage ? 'bg-[#9538E2]' : 'bg-transparent'} mt-5 pt-4 ${isHomePage ? 'text-white' : 'text-black'} rounded-t-3xl px-12`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/reviews'>Reviews</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
          </ul>
        </div>
        <Link to='/' className="text-xl font-bold">Gadget Heaven</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/reviews'>Reviews</NavLink></li>
          <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end text-black">
        <div className='p-2 bg-white rounded-full mr-2 border'><Link><MdOutlineShoppingBag /></Link></div>
        <div className='p-2 bg-white rounded-full border'>  <Link><FaRegHeart /></Link></div>
      
      </div>
    </div>
  );
}

export default Navbar;
