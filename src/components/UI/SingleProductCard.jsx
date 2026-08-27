import React, { useState } from 'react'
import Image from './Image';
import PageNavigation from './PageNavigation';
import { CiHeart } from 'react-icons/ci';
import ProductBenifits from './ProductBenifits';
import { useCart } from '../../context/CartContext';
import { useFav } from '../../context/FavContext';


const SingleProductCard = ({data}) => {
    const [amount,setAmount] = useState(1);
    const {addToCart,isInCart} = useCart()
    const {addToFav}= useFav()
    const {title,images,price,category,description,id} = data;

    const addedToCart = isInCart(id)
  return (
    <>
    <PageNavigation title={title} category={category?.name}></PageNavigation>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start py-10'>
        <div className="w-full">
            <Image images={images}/>
        </div>

        <div className="flex flex-col gap-3.5">
            <h2 className='uppercase text-sm text-gray-600'>{category?.name}</h2>
            <h1 className='text-3xl font-bold font-sans'>{title}</h1>
            <div className="flex gap-5 items-center text-gray-800">
                <h3 className='font-bold text-4xl'>${price}</h3>
            </div>

            <p className='font-medium tracking-wide'>{description}</p>

            <div className='flex items-center justify-around my-5'>
              <button disabled={addedToCart}
              onClick={()=>addToCart(data)}
               className='bg-indigo-600 py-1.5 px-8 rounded-full text-gray-200 hover:bg-indigo-500'>
                {addedToCart?"Added":"Add to Bag"}
                </button>
              <button onClick={()=>addToFav(data)}
               className='bg-indigo-100 p-2 hover:bg-amber-600 rounded-full font-bold hover:text-gray-100'><CiHeart/></button>

              </div>
              <ProductBenifits/>
        </div>
    </div>
    </>
  )
}

export default SingleProductCard