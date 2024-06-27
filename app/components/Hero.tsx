"use client"
import React, { useEffect } from 'react'
import Typed from 'typed.js';


const Hero = () => {

    const el = React.useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Web Developer', 'English Teacher', 'Yoga Instructor'],
          typeSpeed: 100, loop: true
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
        }, []);

  return (
    <div className='flex align-middle justify-center h-screen w-full'>
    <div className='bg-gradient-to-r from-green-400 to-blue-500
    w-full mx-20 my-24 rounded-3xl p-1' >
      <div className='bg-white p-16 h-full rounded-3xl '>
        <div className='rounded-3xl h-full w-full flex justify-center align-middle items-center text-center flex-col'>
            <div className='p-2 text-[150px]  text-transparent	bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text'>Molly Brace</div>
            <div className='text-5xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent pt-3'>
            <span ref={el} />
            </div>
            </div>
       
        </div>
    </div>
    </div>
  )
}

export default Hero