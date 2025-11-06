import React from 'react'
import heroimg from '../assets/heroimg.jpg'

const KnowUs = () => {
  const features = [
    'Innovative Facilities',
    'Expert Trainers',
    'Flexible Memberships',
    'Personalized Programs',
  ]

  return (
    <div className='px-32 py-10'>
      <div className='bg-black h-screen w-full rounded-xl py-20 px-12'>
        <div className='flex gap-5'>
          {/* Left Section */}
          <div className='flex flex-col mt-16 flex-1'>
            <h1 className='text-white mb-8 text-5xl font-bold'>
              What sets us apart?
            </h1>
            <p className='text-white mb-20 text-lg'>
              We are a community dedicated to helping you achieve your fitness goals in a supportive, welcoming
              environment.
            </p>

            {/* ✅ 2x2 Checkbox Grid */}
            <div className='grid grid-cols-2 gap-x-10 gap-y-6'>
              {features.map((feature, index) => (
                <label
                  key={index}
                  className='flex items-center gap-3 text-white text-xl font-medium cursor-pointer select-none'
                >
                  <span className='relative flex items-center justify-center w-6 h-6 rounded-full bg-white'>
                    <input
                      type='checkbox'
                      checked
                      readOnly
                      className='absolute w-full h-full opacity-0 cursor-pointer'
                    />
                    <span className='text-black text-lg font-bold'>✔</span>
                  </span>
                  {feature}
                </label>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <img
            className='w-[600px] h-auto rounded-xl object-cover flex-1'
            src={heroimg}
            alt='heroimg'
          />
        </div>
        <div className='flex gap-32 mt-16'>
            <div className='flex flex-col gap-7'>
                <p className='text-white font-bold text-6xl'>
                    5k<span className='text-green-400 text-6xl'>+</span>
                </p>
                 <p className='text-white text-xl font-medium'>
                    Happy members
                </p>
            </div>
            <div className='flex flex-col gap-7'>
                <p className='text-white font-bold text-6xl'>
                    20<span className='text-green-400 text-6xl'>+</span>
                </p>
                <p className='text-white text-xl font-medium'>
                    Expert Trainers
                </p>
            </div>
            <div className='flex flex-col gap-7'>
                <p className='text-white font-bold text-6xl'>
                    1200<span className='text-green-400 text-6xl'>+</span>
                </p>
                <p className='text-white text-xl font-medium'>
                    Workout Completed
                </p>
            </div>
            <div className='flex flex-col gap-7'>
                <p className='text-white font-bold text-6xl'>
                    10<span className='text-green-400 text-6xl'>+</span>
                </p>
                <p className='text-white text-xl font-medium'>
                    Years of excellence
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default KnowUs
