import React, { useEffect } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { NavLink } from 'react-router'
import Stats from './Stats'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {

     useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1000, // Values from 0 to 3000, with step 50ms
      once: false,    // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
    <section className="max-w-7xl mx-auto px-8 my-20">
        <div data-aos="fade-up" className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className="flex flex-col gap-6">
                <p className='text-gray-600 font-medium bg-indigo-100 w-1/2 rounded-md p-0.5 uppercase'>New Season . 2026 Collection</p>
                <h1 className='text-6xl font-extrabold space-y-3'>Objects worth Keeping.</h1>
                <p className='text-gray-600 font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, hic distinctio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, facere.
                </p>

                <div className="flex gap-2.5">
                    <NavLink to="/products" className="flex items-center justify-center gap-1.5 bg-indigo-600 p-3 text-gray-100 rounded-md text-sm">
                        <p>Shop the Collection</p>
                        <FaLongArrowAltRight />
                    </NavLink>

                    <NavLink to="/about" className="p-3 bg-gray-200 rounded-md hover:bg-amber-600 hover:text-gray-200">
                        Our Story
                    </NavLink>

                </div>

                <Stats/>

            </div>

            <div>
                <img src="Hero.jpg" alt="image" className='rounded-4xl' />

            </div>
        </div>
    </section>
    </>
  )
}

export default Hero