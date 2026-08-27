import React from 'react'
import { BsFillCartXFill } from 'react-icons/bs'
import { NavLink } from 'react-router'

const EmptyCart = () => {
  return (
    <>
    <div className='max-w-md mx-auto px-4 flex flex-col items-center justify-center py-24'>
    <div className='shadow-lg p-16 rounded-full shadow-gray-400 mb-10'>
      <h1 className='font-bold text-3xl text-gray-600'><BsFillCartXFill /></h1>
    </div>
    <h2 className='font-bold text-3xl'>Cart is Empty</h2>
    <p className='my-8 font-md text-gray-600 text-center'>Once you add something you love, it will appear here.</p>
   <div className="flex gap-4">
    <NavLink to="/" className="bg-indigo-600 text-gray-200 px-4 py-2 rounded-md font-medium hover:bg-indigo-500">
      Back Home
    </NavLink>
    <NavLink to="/products" className="px-4 py-2 rounded-sm font-medium bg-indigo-100 hover:bg-amber-600">
      Browse Products
    </NavLink>
   </div>

   </div>
    </>
  )
}

export default EmptyCart