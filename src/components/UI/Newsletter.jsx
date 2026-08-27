import React from 'react'

const Newsletter = () => {
  return (
    <>
    <div className='max-w-md mx-auto px-8 py-12'>
        <div className='flex items-center justify-center flex-col gap-2.5'>
            <h1 className='text-3xl font-bold text-gray-900'>Get First Access</h1>
            <p className='text-center text-gray-600 leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div>
                <form className='flex gap-2'>
                    <input className='outline-0 p-3 focus:outline-indigo-500 shadow-lg rounded-lg'
                     type="email" 
                     placeholder='you@gmail.com'/>
                    <button className='bg-indigo-600 rounded-lg text-gray-200 p-3'>Subscribe</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Newsletter