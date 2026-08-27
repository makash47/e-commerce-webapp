import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const ProductCounter = ({amount,increment,decrement,increaseQuantity,decreaseQuantity,quantity}) => {
  return (
    <>
   
        <div className='flex gap-6'>
            <button className='bg-indigo-100 p-2 hover:bg-amber-600 hover:text-gray-200 rounded-full'
             onClick={decreaseQuantity}
             disabled={quantity===1}><FaMinus/></button>
            <div>{quantity}</div>
            <button className='bg-indigo-100 p-2 hover:bg-amber-600 hover:text-gray-200 rounded-full'
             onClick={increaseQuantity}><FaPlus /></button>
        </div>
   
    </>
  )
}

export default ProductCounter