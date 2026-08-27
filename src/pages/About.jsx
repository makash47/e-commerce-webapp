import React from 'react'

const About = () => {
  return (
    <>
    <div className='max-w-7xl mx-auto px-8 py-10'>
      <h1 className='text-sm text-gray-400'>Our Mission</h1>
      <div className="">
        <div className='flex flex-col gap-3'>
          <h1 className='text-3xl font-bold text-gray-900 md:text-4xl lg:text-6xl'>Fewer objects. Chosen properly. Kept for years.</h1>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem placeat animi dolore enim pariatur maxime atque distinctio dolorum facilis. Exercitationem est quod in perspiciatis illo impedit laborum natus quas odio debitis vitae, quae quasi a culpa veritatis praesentium ea ducimus!</p>
        </div>
        <figure>
          <img src="/Hero.jpg" alt="" className='rounded-2xl' />
        </figure>
      </div>

    </div>
    </>
  )
}

export default About