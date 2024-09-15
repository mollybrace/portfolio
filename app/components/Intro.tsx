import React from 'react'
import Image from 'next/image'

const Intro = () => {
  return (
<div className=''>
  <div className='flex flex-col justify-center items-center lg:flex-row-reverse'>
    <div className='lg:basis-1/3'>
      <Image 
        src="/mollybrace.jpeg" 
        alt="molly"
        width={250}
        height={250}
        className='rounded-full mb-4 lg:basis-1/3'/>

    </div>
    <div>
</div>

     <div className='flex flex-col items-start text-gray-400 text-balance text-xl pb-6  w-5/6 lg:basis-2/3 lg:mx-12'>
    
        <p className='py-2'>Hi, I'm Molly!</p>
        <p className='py-2'>A Freelance Web Developer, Yoga Instructor and English Teaacher.</p>
        <p className='py-2 w-full text-wrap'>
            After travelling and working internationally for 6 years, I decided to explore the world of software engineering back in 2023. After completing a rigorous bootcamp where I learned the fundamentals of front-end and back-end development. I now continue to sharpen my skills on personal and client projects.
        </p>
        <p className='py-2 w-full text-wrap'> 
            I love coding and building things from start to finish. I have worked with small businesses from the planning, design and development phases and enjoy working in detail on the UX to provide my clients, and their customers with an awesome experience. 
        </p>
        <div className='flex justify-center text-center align-middle'>

        </div>

    </div>
    </div>
   
    </div>
  )
}

export default Intro