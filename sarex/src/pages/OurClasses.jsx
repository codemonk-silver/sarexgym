import React from 'react'
import group from '../assets/group.webp'
import pt from '../assets/pt.png'
import { ArrowRight } from 'lucide-react'

const OurClasses = () => {
  return (
    <div className='px-32'>
      <div className='relative w-full'>
        <img className='relative w-full h-[400px] object-cover object-top rounded-2xl' src={group} alt='' />

        {/* ✅ Bottom dark gradient overlay */}
        <div className='absolute bottom-0 left-0 w-full h-[40vh] bg-linear-to-t from-black to-transparent rounded-2xl'></div>

        {/* ✅ Centered white text */}
        <p className='absolute inset-0 flex items-center justify-center text-white text-6xl font-bold'>
          Classes
        </p>
      </div>

      <div className='mt-20 w-full flex flex-col'>
        <div className='grid grid-cols-3 gap-3 space-y-5'>
          {/* ✅ Card 1 */}
          <div className='group flex flex-col items-center justify-between bg-gray-900 w-[410px] h-[370px] px-3 pb-8 rounded-2xl overflow-hidden transition-all duration-500'>
            <div className='flex justify-between w-full items-center mt-5 px-5 transition-colors duration-500'>
              <p className='text-white font-semibold text-2xl group-hover:text-orange-500 transition-colors duration-500'>Personal Training</p>
              <div className='bg-yellow-900 flex flex-row rounded-full px-1.5 py-3 transform transition-transform duration-500 group-hover:scale-110'>
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
              </div>
            </div>
            <div className='overflow-hidden rounded-2xl w-[350px] h-[250px]'>
              <img
                className='w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:blur-[.7px]'
                src={pt}
                alt=''
              />
            </div>
          </div>

          {/* ✅ Card 2 */}
          <div className='group flex flex-col items-center justify-between bg-gray-900 w-[410px] h-[370px] px-3 pb-8 rounded-2xl overflow-hidden transition-all duration-500'>
            <div className='flex justify-between w-full items-center mt-5 px-5 transition-colors duration-500'>
              <p className='text-white font-semibold text-2xl group-hover:text-orange-500 transition-colors duration-500'>Yoga Training</p>
              <div className='bg-yellow-900 flex flex-row rounded-full px-1.5 py-3 transform transition-transform duration-500 group-hover:scale-110'>
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
              </div>
            </div>
            <div className='overflow-hidden rounded-2xl w-[350px] h-[250px]'>
              <img
                className='w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:blur-[.7px]'
                src={pt}
                alt=''
              />
            </div>
          </div>

          {/* ✅ Card 3 */}
          <div className='group flex flex-col items-center justify-between bg-gray-900 w-[410px] h-[370px] px-3 pb-8 rounded-2xl overflow-hidden transition-all duration-500'>
            <div className='flex justify-between w-full items-center mt-5 px-5 transition-colors duration-500'>
              <p className='text-white font-semibold text-2xl group-hover:text-orange-500 transition-colors duration-500'>Group Fitness Training</p>
              <div className='bg-yellow-900 flex flex-row rounded-full px-1.5 py-3 transform transition-transform duration-500 group-hover:scale-110'>
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
              </div>
            </div>
            <div className='overflow-hidden rounded-2xl w-[350px] h-[250px]'>
              <img
                className='w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:blur-[.7px]'
                src={pt}
                alt=''
              />
            </div>
          </div>
          {/* ✅ Card 4 */}
          <div className='group flex flex-col items-center justify-between bg-gray-900 w-[410px] h-[370px] px-3 pb-8 rounded-2xl overflow-hidden transition-all duration-500'>
            <div className='flex justify-between w-full items-center mt-5 px-5 transition-colors duration-500'>
              <p className='text-white font-semibold text-2xl group-hover:text-orange-500 transition-colors duration-500'>Wellness Programs</p>
              <div className='bg-yellow-900 flex flex-row rounded-full px-1.5 py-3 transform transition-transform duration-500 group-hover:scale-110'>
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
              </div>
            </div>
            <div className='overflow-hidden rounded-2xl w-[350px] h-[250px]'>
              <img
                className='w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:blur-[.7px]'
                src={pt}
                alt=''
              />
            </div>
          </div>

          {/* ✅ Card 5 */}
          <div className='group flex flex-col items-center justify-between bg-gray-900 w-[410px] h-[370px] px-3 pb-8 rounded-2xl overflow-hidden transition-all duration-500'>
            <div className='flex justify-between w-full items-center mt-5 px-5 transition-colors duration-500'>
              <p className='text-white font-semibold text-2xl group-hover:text-orange-500 transition-colors duration-500'>Weight lifting</p>
              <div className='bg-yellow-900 flex flex-row rounded-full px-1.5 py-3 transform transition-transform duration-500 group-hover:scale-110'>
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
              </div>
            </div>
            <div className='overflow-hidden rounded-2xl w-[350px] h-[250px]'>
              <img
                className='w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:blur-[.7px]'
                src={pt}
                alt=''
              />
            </div>
          </div>

          {/* ✅ Card 6 */}
          <div className='group flex flex-col items-center justify-between bg-gray-900 w-[410px] h-[370px] px-3 pb-8 rounded-2xl overflow-hidden transition-all duration-500'>
            <div className='flex justify-between w-full items-center mt-5 px-5 transition-colors duration-500'>
              <p className='text-white font-semibold text-2xl group-hover:text-orange-500 transition-colors duration-500'>High Intensity training</p>
              <div className='bg-yellow-900 flex flex-row rounded-full px-1.5 py-3 transform transition-transform duration-500 group-hover:scale-110'>
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
              </div>
            </div>
            <div className='overflow-hidden rounded-2xl w-[350px] h-[250px]'>
              <img
                className='w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:blur-[.7px]'
                src={pt}
                alt=''
              />
            </div>
          </div>
          {/* ✅ Card 7 */}
          <div className='group flex flex-col items-center justify-between bg-gray-900 w-[410px] h-[370px] px-3 pb-8 rounded-2xl overflow-hidden transition-all duration-500'>
            <div className='flex justify-between w-full items-center mt-5 px-5 transition-colors duration-500'>
              <p className='text-white font-semibold text-2xl group-hover:text-orange-500 transition-colors duration-500'>Youth fitness program</p>
              <div className='bg-yellow-900 flex flex-row rounded-full px-1.5 py-3 transform transition-transform duration-500 group-hover:scale-110'>
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
              </div>
            </div>
            <div className='overflow-hidden rounded-2xl w-[350px] h-[250px]'>
              <img
                className='w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:blur-[.7px]'
                src={pt}
                alt=''
              />
            </div>
          </div>

          {/* ✅ Card 8 */}
          <div className='group flex flex-col items-center justify-between bg-gray-900 w-[410px] h-[370px] px-3 pb-8 rounded-2xl overflow-hidden transition-all duration-500'>
            <div className='flex justify-between w-full items-center mt-5 px-5 transition-colors duration-500'>
              <p className='text-white font-semibold text-2xl group-hover:text-orange-500 transition-colors duration-500'>Corporate programs</p>
              <div className='bg-yellow-900 flex flex-row rounded-full px-1.5 py-3 transform transition-transform duration-500 group-hover:scale-110'>
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
              </div>
            </div>
            <div className='overflow-hidden rounded-2xl w-[350px] h-[250px]'>
              <img
                className='w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:blur-[.7px]'
                src={pt}
                alt=''
              />
            </div>
          </div>

          {/* ✅ Card 9 */}
          <div className='group flex flex-col items-center justify-between bg-gray-900 w-[410px] h-[370px] px-3 pb-8 rounded-2xl overflow-hidden transition-all duration-500'>
            <div className='flex justify-between w-full items-center mt-5 px-5 transition-colors duration-500'>
              <p className='text-white font-semibold text-2xl group-hover:text-orange-500 transition-colors duration-500'>Nutrition Coaching</p>
              <div className='bg-yellow-900 flex flex-row rounded-full px-1.5 py-3 transform transition-transform duration-500 group-hover:scale-110'>
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
                <ArrowRight className='text-white w-4 h-4 group-hover:text-orange-500 transition-colors duration-500' />
              </div>
            </div>
            <div className='overflow-hidden rounded-2xl w-[350px] h-[250px]'>
              <img
                className='w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:blur-[.7px]'
                src={pt}
                alt=''
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OurClasses
