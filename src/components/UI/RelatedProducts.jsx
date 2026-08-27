import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getRelatedProductsById} from '../../api/ProductsApi'
import Loader from './Loader'
import ProductsCard from './ProductsCard'

const RelatedProducts = ({categoryId,currentProductId}) => {

    const {data,isLoading} = useQuery({
        queryKey:["related-products",categoryId],
        queryFn:()=>getRelatedProductsById(categoryId)
        
    })
    
   
    if(isLoading) return <Loader/>

    const relatedProducts = data.filter(product=>product.id!==currentProductId).slice(0,4);
    // console.log(relatedProducts)

  return (
    <>
    <div className='max-w-7xl mx-auto px-8 py-10'>
        <h1 className='font-bold text-3xl text-gray-900 my-3.5'>Related Products</h1>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
          {
            relatedProducts?.map((product)=>{
                return (
                    
                    <ProductsCard key={product.id} productData={product}/>
                )
            })
          }
        </ul>
    </div>
    </>
  )
}

export default RelatedProducts