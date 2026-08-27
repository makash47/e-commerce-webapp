import React from 'react'
import { FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { NavLink } from 'react-router'

const Footer = () => {
  return (
    <>
    <footer className="max-w-7xl mx-auto px-8">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className="1st">
          <span className="text-[20px] font-bold text-indigo-600 mb-4">
            ShopHub
          </span>
          <p className='text-14[px] text-slate-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quidem tempora sequi. Dicta, veniam omnis. Necessitatibus ab voluptatem natus id.</p>
          <div className="flex items-center gap-6 mt-3 text-gray-500">
            <NavLink to="/linkedin" className="hover:bg-indigo-700 hover:text-gray-200 rounded-full p-1.5">
              <FiLinkedin />

            </NavLink>
            <NavLink to="/instagram" className="hover:bg-indigo-700 hover:text-gray-200 rounded-full p-1.5">
              <FiInstagram />

            </NavLink>
            <NavLink to="/instagram" className="hover:bg-indigo-700 hover:text-gray-200 rounded-full p-1.5">
             <FiTwitter />

            </NavLink>
          </div>

        </div>

        <div className="2nd">
          <div className="font-bold mb-4">
            Company
          </div>
<div className="flex flex-col gap-3 text-slate-900 text-[14px] font-sans">
          <NavLink to="/about">
            About Us
          </NavLink>

            <NavLink to="/about">
            Careers
          </NavLink>

            <NavLink to="/about">
            Press
          </NavLink>

            <NavLink to="/about">
            Contact
          </NavLink>
          </div>
          
        </div>

        <div className="3red">
             <div className="font-bold mb-4">
            Support
          </div>

<div className="flex flex-col gap-3 text-slate-900 text-[14px] font-sans">
          <NavLink to="/about">
            Help Center
          </NavLink>

            <NavLink to="/about">
            Track Order
          </NavLink>

            <NavLink to="/about">
            Returns
          </NavLink>

            <NavLink to="/about">
            My Account
          </NavLink>
          </div>

        </div>

        <div className="4th">
          <div className="font-bold mb-4">
            NewLetter
          </div>
          <p className='text-14[px] text-slate-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <form className='mt-2.5'>
            <input type="email" placeholder='Enter email'
            className='border-0 outline-0 shadow-lg p-3.5 shadow-slate-300' />
            <button className='bg-indigo-600 rounded-full h-10 w-16 text-gray-100'>Join</button>
          </form>

        </div>
      </div>
<hr className='text-gray-300 mt-3'/>
      <div className="text-center mt-2.5">
        <p>©️ 2026 ShopHub. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer