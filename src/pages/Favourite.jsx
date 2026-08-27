import React from 'react'
import { useFav } from '../context/FavContext'
import EmptyFav from '../components/UI/EmptyFav'

const Favourite = () => {
  const {addToFav,favourite,removeFromFav} = useFav()
  return (
    <>
    {
      favourite.length===0?(
        <EmptyFav/>
      ):

      (
      <div className='max-w-7xl mx-auto px-8 py-9'>
        <h1 className='text-3xl font-bold text-gray-800 my-4'>Favourites</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          
            {
              favourite?.map((item)=>{
                return (
                <div key={item.id} className='shadow-lg p-3'>
                  <figure className='py-2'>
                    <img className='bg-gray-200 rounded-md w-full object-cover'
                     src={item.images[0]} alt="" />
                  </figure>

                  <div className="content">
                    <span className='uppercase font-medium text-gray-700'>{item.category.name}</span>
                    <h1 className='font-bold py-2 text-lg'>{item.title}</h1>
                    <h2 className='font-bold text-gray-900'>${item.price}</h2>

                  </div>
                  <button className='bg-amber-500 text-gray-200 py-1 px-2 rounded-md hover:bg-amber-400 text-sm my-3'
                   onClick={()=>removeFromFav(item.id)}>Remove</button>
                </div>
              )
              }
                
                )
            }
        </div>
      </div>
      )
    }
    </>
  )
}

export default Favourite