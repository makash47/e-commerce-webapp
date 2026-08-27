import React from 'react'
import UserReviews from "../../api/Reviews.json"

const Reviews = () => {
  return (
   <>
   <div className='max-w-7xl mx-auto px-8 my-9'>
    <h1 className='font-bold text-2xl text-slate-900'>Loved By Careful Buyers</h1>
    <p className='flex items-center justify-between'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
       
            {
                UserReviews.map((review,index)=>(
                    <li key={index} className='flex shadow-lg p-3 flex-col gap-1.5 hover:-translate-y-1.5 transition-all duration-300'>
                       <p className='text-sm text-gray-600'>"{review.review}"</p>
                       <div className='flex items-center gap-2.5'>
                        <span className='h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center'>{review.icon}</span>
                        <div>
                            <h1 className='font-bold'>{review.reviewer}</h1>
                            <h2 className='text-gray-700'>{review.role}</h2>
                        </div>
                       </div>

                    </li>

                ))
            }
            
      
    </div>
   </div>
   </>
  )
}

export default Reviews