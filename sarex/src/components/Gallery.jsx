import React from 'react'
import pt from '../assets/pt.png'
import yoga from '../assets/yoga.jpg'
import heroimg from '../assets/heroimg.jpg'
import twof from '../assets/twof.jpg'

const Gallery = () => {
  return (
    <div className='px-32 py-10'>
        <p className='font-bold text-5xl mb-10'>
            Our Gallery
        </p>
        <div className='flex gap-10 w-full h-[400px]'>
            <img className='w-[550px] h-auto rounded-xl' src={pt} alt='' />
            <img className='w-[900px] h-auto rounded-xl' src={yoga} alt='' />
        </div>
        <div className='flex gap-10 w-full h-[400px] mt-10'>
            <img className='w-[650px] h-auto rounded-xl' src={heroimg} alt='' />
            <div className='relative w-[300px] h-[400px] bg-green-900 text-white rounded-xl'>
                <div className='absolute top-14 left-0 mx-auto w-full h-screen text-center'>
                    <p className='font-medium text-4xl'>
                        Fitness is a lifestyle not a destination.
                    </p>
                    <button className='bg-black text-white px-7 py-1.5 mt-32 rounded-xl text-xl font-medium'>
                        view all classes
                    </button>
                </div>
            </div>
            <img className='w-[300px] h-auto rounded-xl object-cover object-left' src={twof} alt='' />
        </div>
    </div>
  )
}

export default Gallery