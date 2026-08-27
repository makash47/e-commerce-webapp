import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa';

const Rating = ({productData}) => {
    const {rating} = productData;
    const stars = [];

    for(let i=0; i<=5 ; i++){
        if(i<=Math.round(rating)){
            stars.push(
                  <FaStar key={i} className='text-amber-500'/>
            );

        }else{
            stars.push(
                <FaRegStar key={i} className='text-gray-300'/>
            )
        }
    }

  return (
    <>
    <div className='flex gap-1 items-center'>
        <div className='flex'>{stars}</div>
        <span className='text-sm text-gray-600'>{rating}</span>

    </div>
    </>
  )
}

export default Rating

