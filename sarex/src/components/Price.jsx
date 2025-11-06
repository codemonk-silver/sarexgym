import React from 'react'

const Price = () => {
  return (
    <div className='px-32 py-10'>
        <div className='flex justify-between w-full'>
            <div className='relative flex flex-col items-center shadow-xl w-[400px] h-[600px] rounded-xl'>
                    <p className='font-medium mt-20 text-3xl'>
                        One day pass
                    </p>
                    <p className='font-bold mt-20 text-6xl'>
                        $3
                    </p>
                    <p className='mt-24 text-xl text-center w-xs'>We welcome you to explore all Sarex provides. Join us and experience fitness like never before.</p>
                    <button className='px-8 py-3 bg-black text-white mt-6 rounded-full'>
                        Get Started
                    </button>
            </div>
             <div className='relative flex flex-col items-center shadow-xl w-[400px] h-[600px] rounded-xl'>
                    <p className='font-medium mt-20 text-3xl'>
                        Monthly pass
                    </p>
                    <p className='font-bold mt-20 text-6xl'>
                        $80
                    </p>
                    <p className='mt-24 text-xl text-center w-xs'>We welcome you to explore all Sarex provides. Join us and experience fitness like never before.</p>
                    <button className='px-8 py-3 bg-black text-white mt-6 rounded-full'>
                        Get Started
                    </button>
            </div>
             <div className='relative flex flex-col items-center shadow-xl w-[400px] h-[600px] rounded-xl bg-[#D2F509]'>
                    <p className='font-medium mt-20 text-3xl'>
                        Yearly pass
                    </p>
                    <p className='font-bold mt-20 text-6xl'>
                        $800
                    </p>
                    <p className='mt-24 text-xl text-center w-xs'>We welcome you to explore all Sarex provides. Join us and experience fitness like never before.</p>
                    <button className='px-8 py-3 bg-black text-white mt-6 rounded-full'>
                        Get Started
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Price