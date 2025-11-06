import React from 'react'
import gymlogo from '../assets/gymlogo.png'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'   // ✅ Added import

const Footer = () => {
  return (
    <div className='px-32 py-10'>
        <div className='bg-black w-full h-[80vh] rounded-xl'>
            <div className='flex justify-between items-center pt-20 pb-14 px-14'>
                <div className='flex items-center'>
                    <img className='w-[45px] h-auto bg-white rounded-full' src={gymlogo} alt='sarexlogo' />
                    <p className='font-bold text-4xl text-white'>Sarex</p>
                </div>
                <p className='font-medium text-white text-xl w-lg'>
                    We offer everything we need to achieve your goals and more. Join us and turn your fitness dreams into reality.
                </p>
            </div>
            <hr className='w-[75vw] mx-auto text-gray-500 mb-10'></hr>
            <div className='flex justify-between px-14'>
                <div className='flex flex-col'>
                    <p className='text-white mb-10 text-2xl font-semibold'>
                        Pages
                    </p>
                    <div className='flex gap-16'>
                        <p className='text-white text-xl mb-3'>
                            Home
                        </p>
                        <p className='text-white text-xl mb-3'>
                            Location
                        </p>
                    </div>
                    <div className='flex gap-16'>
                        <p className='text-white text-xl mb-3'>
                            About
                        </p>
                        <p className='text-white text-xl mb-3'>
                            Blog
                        </p>
                    </div>
                    <div className='flex gap-14'>
                        <p className='text-white text-xl mb-3'>
                            Classes
                        </p>
                        <p className='text-white text-xl mb-3'>
                            Contact
                        </p>
                    </div>
                    <div className='flex gap-[50px]'>
                        <p className='text-white text-xl'>
                            Trainers
                        </p>
                        <p className='text-white text-xl'>
                            Packages
                        </p>
                    </div>
                </div>
                 <div className='flex flex-col'>
                    <p className='text-white mb-10 text-2xl font-semibold'>
                        Utility
                    </p>
                    <div className='flex flex-col gap-3'>
                        <p className='text-white text-xl'>
                            Style Guide
                        </p>
                        <p className='text-white text-xl'>
                            Instruction
                        </p>
                        <p className='text-white text-xl'>
                            Changelog
                        </p>
                        <p className='text-white text-xl'>
                            License
                        </p>
                    </div>
                </div>
                 <div className='flex flex-col'>
                    <p className='text-white mb-10 text-2xl font-semibold'>
                        Contact
                    </p>
                    <div className='flex flex-col gap-3'>
                        <p className='text-white text-xl w-[250px]'>
                            123 Fitness Lane, Wellness City, CA 12345
                        </p>
                        <Link name='email' className='text-white text-xl'>
                            hello@gmail.com
                        </Link>
                        <Link name='tel' className='text-white text-xl'>
                            +2348160256687
                        </Link>
                    </div>
                </div>
                <div className='relative w-[450px] h-[250px] bg-white rounded-xl'>
                    <div className='flex flex-col items-center'>
                        <p className='text-xl mt-8 font-medium'>
                            Opening hours
                        </p>
                        <p className='text-xl mt-3 font-medium'>
                            Monday - Friday: 5:00AM - 10:00PM 
                        </p>
                         <p className='text-xl mt-3 font-medium'>
                            Saturday - Sunday: 7:00AM - 8:00PM 
                        </p>

                        {/* ✅ Added icon inside button */}
                        <button className='flex items-center gap-2 px-10 py-4 bg-black text-white font-medium text-xl rounded-xl mt-3'>
                            <MapPin size={22} />
                            View location
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
