import React from 'react'
import { Dumbbell, Heart, Users } from 'lucide-react' // icons
import pt from '../assets/pt.png'
import yoga from '../assets/yoga.jpg'
import groupf from '../assets/groupf.avif'

const Classes = () => {
  return (
    <div className='px-32 py-10'>
      {/* Header Section */}
      <div className='flex justify-between items-center'>
        <p className='font-bold text-6xl'>Our Classes</p>
        <button className='px-6 py-2 bg-black text-white text-2xl rounded-full'>
          View all classes
        </button>
      </div>

      {/* Image Cards */}
      <div className='mt-10'>
        <div className='grid grid-cols-3 gap-5'>
          {/* Card 1 */}
          <div className='relative w-full h-[450px] rounded-xl overflow-hidden group'>
            <img
              src={pt}
              alt='Personal Training'
              className='object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-black/40 transition-all duration-500 ease-in-out group-hover:bg-black/20'></div>
            <div className='absolute bottom-6 left-0 right-0 flex justify-between items-center text-white px-6'>
              <p className='text-2xl font-semibold'>Personal Training</p>
              <Dumbbell size={28} />
            </div>
          </div>

          {/* Card 2 */}
          <div className='relative w-full h-[450px] rounded-xl overflow-hidden group'>
            <img
              src={yoga}
              alt='Yoga Training'
              className='object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-black/40 transition-all duration-500 ease-in-out group-hover:bg-black/20'></div>
            <div className='absolute bottom-6 left-0 right-0 flex justify-between items-center text-white px-6'>
              <p className='text-2xl font-semibold'>Yoga Training</p>
              <Heart size={28} />
            </div>
          </div>

          {/* Card 3 */}
          <div className='relative w-full h-[450px] rounded-xl overflow-hidden group'>
            <img
              src={groupf}
              alt='Group Fitness Classes'
              className='object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-black/40 transition-all duration-500 ease-in-out group-hover:bg-black/20'></div>
            <div className='absolute bottom-6 left-0 right-0 flex justify-between items-center text-white px-6'>
              <p className='text-2xl font-semibold'>Group Fitness Classes</p>
              <Users size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Classes
