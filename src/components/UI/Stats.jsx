import React from 'react'

const Stats = () => {
  return (
    <>
    <div className="flex items-center justify-around">
        <div className="shadow-lg p-2.5">
            <h1 className='text-bold text-2xl'>24K+</h1>
            <span className='text-gray-500'>Customers</span>

        </div>

        <div className="shadow-lg p-2.5">
             <h1 className='text-bold text-2xl'>4.9</h1>
            <span className='text-gray-500'>Average Rating</span>

        </div>

        <div className="shadow-lg p-2.5">
             <h1 className='text-bold text-2xl'>42</h1>
            <span className='text-gray-500'>Countries</span>

        </div>
    </div>
    </>
  )
}

export default Stats