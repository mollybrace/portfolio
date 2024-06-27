import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
        <div className=' flex justify-between'>
            <div className=''>
                <div className='border'>Logo</div>
            </div>

            <div className='flex justify-around md:hidden'>
                <p>Projects</p>
                <p>Skills</p>
                <p>Experience</p>
                <p>Contact</p>
            </div>
 
            <div className='flex justify-end space-x-4 border '>
                <div className=''>
                    <button className='text-5xl'>
                        🌒🌔
                     </button>
            
                </div>
                <div className='lg:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                     <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                     </svg>
                </div>
            </div>
        </div>
  )
}

export default Nav