import React from 'react'
import { Link } from "react-router-dom";
import gymlogo from '../assets/gymlogo.png'

const Navbar = () => {
  return (
    <div className='px-32'>
        <div className='flex justify-between py-6 items-center'>
            <div className='flex items-center'>
                <img className='w-[45px] h-auto' src={gymlogo} alt='sarexlogo' />
                <p className='font-bold text-2xl'>Sarex</p>
            </div>
            <nav className='flex gap-6 font-medium text-lg'>
                <Link to='/'>Home</Link>
                <Link>About</Link>
                <Link>Menu</Link>
                <Link to='classes'>Classes</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
            <button className='bg-black px-6 py-1 font-medium text-md text-white rounded-xl'>CONTACT US</button>
        </div>
    </div>
  )
}

export default Navbar