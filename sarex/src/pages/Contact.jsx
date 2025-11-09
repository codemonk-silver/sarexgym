import React from 'react'
import contactimg from '../assets/contactimg.jpg'

const Contact = () => {
  return (
    <div className='px-32 pb-10'>
        <div className='bg-black w-full h-screen rounded-xl'>
            <div className='flex gap-10 px-10 py-10'>
                <img className='w-[550px] h-[650px] object-center object-cover' src={contactimg} alt='' />
                <div className='mt-14 flex flex-col'>
                <p className='text-white text-6xl font-bold w-xl'>
                    Get in touch - We re here to assist you
                </p>
                <form className='space-y-5 mt-10 flex flex-col'>
                    <input className='w-full px-5 py-3 border-white border-2 rounded-2xl bg-white' type='name' placeholder='name' required />
                    <div className='grid grid-cols-2 gap-4'>
                        <input className='w-full px-5 py-3 border-white border-2 rounded-2xl bg-white' type='email' placeholder='Email' required />
                        <input className='w-full px-5 py-3 border-white border-2 rounded-2xl bg-white' type='tel' placeholder='Phone number' required />
                    </div>
                    <textarea className='bg-white rounded-2xl border-2 border-white w-full h-[200px] px-5 py-3' required></textarea>
                    <button className='px-5 py-2 bg-green-600 hover:bg-green-900 mt-3 rounded-2xl text-white text-xl font-medium'>
                        Submit
                    </button>
                </form>
            </div>
            </div>
        </div>
        <div className='mt-14 w-full flex justify-center'>
            <div className='grid grid-cols-3 gap-14 '>
                <div className='relative w-[300px] h-[200px] shadow-xl rounded-2xl flex flex-col p-8 justify-center'>
                    <p className='font-bold text-3xl'>Address</p>
                    <p className='mt-4'>Chicago HQ Estica Cop. Macomb, MI 48042</p>
                </div>
                 <div className='relative w-[300px] h-[200px] shadow-xl rounded-2xl flex flex-col p-8 justify-center'>
                    <p className='font-bold text-3xl'>Phone Number</p>
                    <p className='mt-4'>+1 (555) 123-4567</p>
                </div>
                 <div className='relative w-[300px] h-[200px] shadow-xl rounded-2xl flex flex-col p-8 justify-center'>
                    <p className='font-bold text-3xl'>Email address</p>
                    <p className='mt-4'>hello@example.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact