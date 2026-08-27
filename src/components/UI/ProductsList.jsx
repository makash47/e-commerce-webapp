import React from 'react'
import ProductsCard from "../UI/ProductsCard"
import PaginationBtns from './PaginationBtns';

const ProductsList = ({products}) => {

  return (
    <>
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            products?.map((product)=>{
                return(  
                    <ProductsCard key={product.id} productData={product}/>
                )
            })
        }   
    </ul>
    </>
  )
}

export default ProductsList