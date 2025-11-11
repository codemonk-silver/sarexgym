import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Dumbbell, Heart, Users } from 'lucide-react'
import pt from '../assets/pt.png'
import yoga from '../assets/yoga.jpg'
import groupf from '../assets/groupf.avif'

const Classes = () => {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeUp')
          }
        })
      },
      { threshold: 0.2 }
    )

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className='px-4 sm:px-10 md:px-32 py-10'>
      {/* Header Section */}
      <div
        ref={(el) => (refs.current[0] = el)}
        className='flex flex-col md:flex-row justify-between items-center gap-4 opacity-0'
      >
        <p className='font-bold text-3xl sm:text-4xl md:text-6xl text-center md:text-left'>
          Our Classes
        </p>
        <Link
          to='/classes'
          className='px-6 py-2 bg-black text-white text-lg sm:text-xl md:text-2xl rounded-full transition-all duration-500 ease-out hover:scale-105 hover:bg-gray-800 hover:shadow-lg'
        >
          View all classes
        </Link>
      </div>

      {/* Image Cards */}
      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Card 1 */}
          <div
            ref={(el) => (refs.current[1] = el)}
            className='relative w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-xl overflow-hidden group opacity-0 transition-all duration-700 ease-in-out hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2'
          >
            <img
              src={pt}
              alt='Personal Training'
              className='object-cover w-full h-full transition-all duration-700 ease-in-out group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-black/40 transition-all duration-500 ease-in-out group-hover:bg-black/20'></div>
            <div className='absolute bottom-6 left-0 right-0 flex justify-between items-center text-white px-6 transform transition-all duration-500 ease-out group-hover:translate-y-[-10px]'>
              <p className='text-lg sm:text-xl md:text-2xl font-semibold transition-all duration-300 group-hover:text-xl group-hover:font-bold'>Personal Training</p>
              <Dumbbell size={24} className='sm:size-[28px] transition-all duration-500 group-hover:scale-125 group-hover:rotate-12' />
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => (refs.current[2] = el)}
            className='relative w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-xl overflow-hidden group opacity-0 transition-all duration-700 ease-in-out hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2'
          >
            <img
              src={yoga}
              alt='Yoga Training'
              className='object-cover w-full h-full transition-all duration-700 ease-in-out group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-black/40 transition-all duration-500 ease-in-out group-hover:bg-black/20'></div>
            <div className='absolute bottom-6 left-0 right-0 flex justify-between items-center text-white px-6 transform transition-all duration-500 ease-out group-hover:translate-y-[-10px]'>
              <p className='text-lg sm:text-xl md:text-2xl font-semibold transition-all duration-300 group-hover:text-xl group-hover:font-bold'>Yoga Training</p>
              <Heart size={24} className='sm:size-[28px] transition-all duration-500 group-hover:scale-125 group-hover:animate-pulse' />
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => (refs.current[3] = el)}
            className='relative w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-xl overflow-hidden group opacity-0 transition-all duration-700 ease-in-out hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2'
          >
            <img
              src={groupf}
              alt='Group Fitness Classes'
              className='object-cover w-full h-full transition-all duration-700 ease-in-out group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-black/40 transition-all duration-500 ease-in-out group-hover:bg-black/20'></div>
            <div className='absolute bottom-6 left-0 right-0 flex justify-between items-center text-white px-6 transform transition-all duration-500 ease-out group-hover:translate-y-[-10px]'>
              <p className='text-lg sm:text-xl md:text-2xl font-semibold transition-all duration-300 group-hover:text-xl group-hover:font-bold'>Group Fitness Classes</p>
              <Users size={24} className='sm:size-[28px] transition-all duration-500 group-hover:scale-125 group-hover:animate-bounce' />
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(50px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Classes