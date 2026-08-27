import React from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import SingleProductCard from '../components/UI/SingleProductCard'
import Loader from '../components/UI/Loader'
import { getProductBySlug } from '../api/ProductsApi'
import RelatedProducts from '../components/UI/RelatedProducts'

const SingleProduct = () => {

  const {slug} = useParams()
  console.log(slug)


  const {data,isLoading} = useQuery({
    queryKey:["product",slug],
    queryFn:()=>getProductBySlug(slug)
  })

  if(isLoading) return <Loader/>

  // console.log(data)
  console.log("category id:", data.category.id);
  return (
    <>
    <div className='max-w-7xl mx-auto px-8 py-10'>
      <SingleProductCard data={data}/>
    </div>
 
    <RelatedProducts 
    categoryId = {data.category.id}
    currentProductId = {data.id}/>
    </>
  )
}

export default SingleProduct