import React from 'react'

const Loader = () => {
  return (
    <div className='flex items-center justify-center py-10'>
        <div class="h-10 w-10 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
    </div>
  )
}

export default Loader