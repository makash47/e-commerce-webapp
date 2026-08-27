import React from 'react'
import { useQuery } from '@tanstack/react-query';
import ProductsCard from './ProductsCard';
import { NavLink } from 'react-router';
import Loader from './Loader';
import { getProducts } from '@/api/ProductsApi';

const TrendingProducts = () => {
   const {data,isLoading} = useQuery({
        queryKey:['products'],
        queryFn:getProducts,
    })
    
if (isLoading) return <Loader/>
    
  return (
    <>
    <div className='max-w-7xl mx-auto px-8 py-12'>
        <div>
            <h1 className='font-bold text-2xl text-slate-900'>Trending Now</h1>
            <div className='flex items-center justify-between'>
                <p className='text-gray-600 text-sm'>The pieces our customers keep coming back to.</p>
                <NavLink to="/products" className="p-2 bg-indigo-100 rounded-full hover:bg-amber-600 hover:text-gray-50">
                Explore All

                </NavLink>
            </div>
        </div>
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5'>
        {
            data?.slice(0,8).map((product)=>{
                return(
                    <ProductsCard key={product.id} productData={product}/>
                )
            })
        }
    </ul>
    </div>

    </>
  )
}

export default TrendingProducts