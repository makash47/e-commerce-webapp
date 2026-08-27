import React from 'react'

const Search = ({searchInput,setSearchInput,handleSearch}) => {
  return (
   <>
   <div className='my-8'>
    <div className='flex items-center justify-between gap-3'>
    <input className='p-2 w-full rounded-md border border-gray-300 focus:outline-indigo-600' 
    type="text" 
    placeholder='search products'
    value={searchInput}
    onChange={(e)=>setSearchInput(e.target.value)}/>
    <button onClick={handleSearch}
    className='bg-indigo-600 p-2 text-gray-100 font-bold rounded-md '>Search</button>

    </div>
    
   </div>
   </>
  )
}

export default Search