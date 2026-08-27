import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import { TfiCheckBox } from 'react-icons/tfi'

const ProductBenifits = () => {
  return (
    <div className='grid grid-cols-2 gap-4 border-t border-gray-200 mt-8'>
                   <div className="flex gap-3">
                        <div className="flex items-center justify-center text-indigo-600">
                            <CiDeliveryTruck size={24}/>
                        </div>
        
                        <div className="content">
                            <h2 className='font-bold'>Free 2-day Delivery</h2>
                            <p className='text-sm text-gray-500'>On every Order over 500$</p>
                        </div>
                    </div>
                 <div className="flex gap-3">
                        <div className="flex items-center justify-center text-indigo-600">
                            <TfiCheckBox  size={24}/>
                        </div>
        
                        <div className="content">
                            <h2 className='font-bold'>30 days Returns</h2>
                            <p className='text-sm text-gray-500'>Prepaid Labels, no questions</p>
                        </div>
                    </div>
    </div>
  )
}

export default ProductBenifits