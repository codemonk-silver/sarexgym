import React, { useState } from 'react'
import { Link } from "react-router-dom";
import gymlogo from '../assets/gymlogo.png'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='px-6 md:px-32'>
      <div className='flex justify-between py-6 items-center'>
        {/* Logo */}
        <div className='flex items-center'>
          <img className='w-[45px] h-auto' src={gymlogo} alt='sarexlogo' />
          <p className='font-bold text-2xl ml-2'>Sarex</p>
        </div>

        {/* Desktop Nav */}
        <nav className='hidden md:flex gap-6 font-medium text-lg'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/classes'>Classes</Link>
          <Link to='/contact'>Contact</Link>
        </nav>

        {/* Desktop Button */}
        <button className='hidden md:block bg-black px-6 py-1 font-medium text-md text-white rounded-xl'>
          CONTACT US
        </button>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden transition-transform duration-300'
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} className='transform rotate-180 transition-transform duration-300' /> : <Menu size={28} className='transition-transform duration-300' />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden flex flex-col items-center gap-4 font-medium text-lg overflow-hidden transition-all duration-500 ease-in-out ${
          open ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <Link onClick={() => setOpen(false)} to='/'>Home</Link>
        <Link onClick={() => setOpen(false)} to='/about'>About</Link>
        <Link onClick={() => setOpen(false)} to='/menu'>Menu</Link>
        <Link onClick={() => setOpen(false)} to='/classes'>Classes</Link>
        <Link onClick={() => setOpen(false)} to='/contact'>Contact</Link>
        <button className='bg-black px-6 py-1 font-medium text-md text-white rounded-xl'>
          CONTACT US
        </button>
      </div>
    </div>
  )
}

export default Navbar
