import React from 'react' 
import group from '../assets/group.webp'
import { Dumbbell, Eye, BookOpen, Check, Star, Users, ShieldCheck } from 'lucide-react'
import empower from '../assets/empower.jpg'

const About = () => {
  return (
    <div className='px-32 pb-10 max-lg:px-16 max-md:px-6'>
        <div className='relative w-full'>
                <img 
                  className='relative w-full h-[500px] object-cover object-top rounded-2xl transition-all duration-700 hover:scale-105' 
                  src={group} 
                  alt='' 
                />
        
                {/* ✅ Bottom dark gradient overlay */}
                <div className='absolute bottom-0 left-0 w-full h-[55vh] bg-linear-to-t from-black to-transparent rounded-2xl transition-opacity duration-500'></div>
        
                {/* ✅ Centered white text */}
                <p className='absolute inset-0 flex items-center justify-center text-white text-6xl font-bold max-md:text-4xl transition-all duration-500 animate-fade-in'>
                  About
                </p>
        </div>

        <div className='flex justify-between gap-12 mt-40 max-lg:flex-col max-lg:items-center'>
            <div className='flex flex-col w-4xl max-lg:w-full transition-all duration-500 hover:scale-105'>
                    <Dumbbell className='text-green-500 w-12 h-12 mx-auto max-md:w-10 max-md:h-10 transition-transform duration-300 hover:scale-110 hover:rotate-12' />

                <p className='text-5xl font-semibold mt-5 text-center max-md:text-3xl transition-colors duration-300 hover:text-green-500'>
                  Our Mission
                </p>
                <p className='text-gray-500 text-xl mt-10 text-center max-md:text-base transition-all duration-500 hover:text-gray-700'>
                  Sarex, our mission is to empower individuals to achieve their health and fitness goals through personalized training, innovative programs, and a supportive community.
                </p>
            </div>

            <div className='flex flex-col gap-20 max-lg:w-full'>
              <div className='flex flex-col items-center text-center transition-all duration-500 hover:scale-105'>
                    <Eye className='text-green-500 w-12 h-12 max-md:w-10 max-md:h-10 transition-transform duration-300 hover:scale-110 hover:rotate-12' />
                    <p className='text-5xl font-semibold mt-5 max-md:text-3xl transition-colors duration-300 hover:text-green-500'>
                      Our Vision
                    </p>
                    <p className='text-gray-500 text-xl mt-10 max-md:text-base transition-all duration-500 hover:text-gray-700'>
                      We envision a world where every person has the tools and support they need to live a healthier, happier life.
                    </p>
              </div>

              <div className='flex flex-col items-center text-center transition-all duration-500 hover:scale-105'>
                    <BookOpen className='text-green-500 w-12 h-12 max-md:w-10 max-md:h-10 transition-transform duration-300 hover:scale-110 hover:rotate-12' />
                    <p className='text-5xl font-semibold mt-5 max-md:text-3xl transition-colors duration-300 hover:text-green-500'>
                      Our Story
                    </p>
                    <p className='text-gray-500 text-xl mt-10 max-md:text-base transition-all duration-500 hover:text-gray-700'>
                      Founded in 2015, Sarex was created with a vision to revolutionize the fitness experience.
                    </p>
              </div>
            </div>
        </div>

        <div className='mt-40 bg-black w-full text-white p-10 rounded-2xl max-md:p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20'>
            <div className='flex gap-10 max-lg:flex-col max-lg:items-center'>
                <img 
                  className='w-[500px] h-[600px] object-cover rounded-2xl max-md:w-full max-md:h-[350px] transition-all duration-500 hover:scale-105' 
                  src={empower} 
                  alt='' 
                />
                <div className='flex flex-col text-center max-lg:text-center'>
                    <p className='text-6xl font-semibold mt-6 max-md:text-3xl transition-all duration-500 animate-slide-up'>
                      Empowering your fitness journey
                    </p>
                    <p className='mt-7 text-xl max-md:text-base transition-all duration-500 delay-100 animate-slide-up'>
                      Our state-of-the-art facility, passionate trainers, and supportive community are here to help you achieve your health and wellness goals.
                    </p>

                    {/* ✅ Added list with circular checkboxes */}
                    <div className='mt-20 space-y-5 max-md:mt-10'>
                      {[
                        'Customized workout plans',
                        'Nutritional guidance',
                        '24/7 support and motivation'
                      ].map((text, i) => (
                        <div 
                          key={i} 
                          className='flex items-center gap-3 justify-center transition-all duration-300 hover:scale-105 hover:translate-x-2'
                          style={{ animationDelay: `${200 + i * 100}ms` }}
                        >
                          <div className='w-6 h-6 rounded-full bg-green-500 flex items-center justify-center transition-all duration-300 hover:bg-green-400 hover:scale-110'>
                            <Check size={14} className='text-white transition-transform duration-300' />
                          </div>
                          <p className='text-lg max-md:text-base transition-colors duration-300 hover:text-green-300'>{text}</p>
                        </div>
                      ))}
                    </div>
                    <button className='bg-green-500 px-4 py-2.5 text-white font-semibold w-40 rounded-full text-xl mt-24 mx-auto max-md:mt-12 max-md:w-36 max-md:text-lg transition-all duration-300 hover:bg-green-400 hover:scale-110 hover:shadow-lg hover:shadow-green-500/50'>
                        Book a class
                    </button>
                </div>
            </div>

            {/* ✅ Three gray cards added below */}
            <div className='flex justify-between mt-20 max-lg:flex-col max-lg:items-center max-lg:gap-10'>
              <div className='bg-gray-800 w-[30%] p-10 rounded-2xl flex flex-col items-center text-center max-lg:w-[80%] max-md:w-full transition-all duration-500 hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-green-500/20'>
                <Star className='text-green-500 w-10 h-10 mb-5 transition-transform duration-300 hover:scale-110 hover:rotate-180' />
                <p className='text-3xl font-semibold mb-3 max-md:text-2xl transition-colors duration-300 hover:text-green-400'>Excellence</p>
                <p className='text-gray-300 text-lg max-md:text-base transition-colors duration-300 hover:text-white'>We strive for the highest standards in every aspect of our service.</p>
              </div>

              <div className='bg-gray-800 w-[30%] p-10 rounded-2xl flex flex-col items-center text-center max-lg:w-[80%] max-md:w-full transition-all duration-500 hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-green-500/20'>
                <Users className='text-green-500 w-10 h-10 mb-5 transition-transform duration-300 hover:scale-110 hover:rotate-12' />
                <p className='text-3xl font-semibold mb-3 max-md:text-2xl transition-colors duration-300 hover:text-green-400'>Inclusive</p>
                <p className='text-gray-300 text-lg max-md:text-base transition-colors duration-300 hover:text-white'>We welcome individuals of all fitness levels and backgrounds.</p>
              </div>

              <div className='bg-gray-800 w-[30%] p-10 rounded-2xl flex flex-col items-center text-center max-lg:w-[80%] max-md:w-full transition-all duration-500 hover:scale-105 hover:bg-gray-700 hover:shadow-lg hover:shadow-green-500/20'>
                <ShieldCheck className='text-green-500 w-10 h-10 mb-5 transition-transform duration-300 hover:scale-110 hover:rotate-12' />
                <p className='text-3xl font-semibold mb-3 max-md:text-2xl transition-colors duration-300 hover:text-green-400'>Integrity</p>
                <p className='text-gray-300 text-lg max-md:text-base transition-colors duration-300 hover:text-white'>We are transparent and honest in all our interactions.</p>
              </div>
            </div>
        </div>

        {/* Add these styles for custom animations */}
        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slide-up {
            from { 
              opacity: 0;
              transform: translateY(30px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }
        `}</style>
    </div>
  )
}

export default About