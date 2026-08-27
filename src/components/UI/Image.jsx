import React, { useState } from 'react'

const Image = ({images}) => {
  const [mainImage,setMainImage] = useState(images[0])
  return (
    <>
    <div className="bg-[#A4A3A1] rounded-xl flex items-center justify-center overflow-hidden">
       <img src={mainImage} alt="" className="w-full h-125 object-cover hover:scale-105 transition-transform duration-300"/>
    </div>
     <div className='grid grid-cols-3 gap-3.5 mt-3.5'>
      {
        images.map((image,index)=>{
          return(
            <img className='w-full h-full object-cover rounded-lg'
            key={index} 
            src={image} 
            onClick={()=>setMainImage(image)}/>
          )
        })
      }
     </div>   
    </>
  )
}

export default Image


