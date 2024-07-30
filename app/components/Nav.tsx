"use client"
import React, { useState } from 'react'
import SmallNav from './SmallNav'
import Image from 'next/image'

const Nav = () => {
    const [isClicked, setIsClicked] = useState(false)

    const toggleNavbar = () :void => {
        setIsClicked(!isClicked)
      }
    
  return (
        <div className='fixed w-full flex bg-white bg-opacity-90 justify-between  h-[90px] top-0 z-40'>
            <div className=''>
                <div className=' w-[100px] rounded-lg'>
                    <Image 
                    src="/logo.png"
                    alt="logo"
                    height={200}
                    width={150}
                    className='rounded-xl m-2'/>
                    </div>
            </div>
            

            {/* <div className='flex justify-start basis-2/3 border w-full text-3xl text-gray-500 h-[100px]'>
                <ul className=' flex w-full space-x-10 justify-center items-center text-center'>
                    <li className='hover:underline p-4'>
                        <a href="#projects">Projects</a>
                    </li>
                    <li className='hover:underline p-4'>
                        <a href='#skills'>Skills</a>
                    </li>
                    <li className='hover:underline p-4'>
                        <a href='#experience'>Experience</a>
                    </li>
                    <li className='hover:underline p-4'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='hover:underline p-4'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div> */}
 
            <div className='flex border '>
                <div className=''>
                    {/* <button className='text-5xl'>
                        🌒🌔
                     </button> */}
            
                </div>
                <div className='relative flex items-center'>
                <div className='absolute top-0 right-0 z-50 w-[100px] justify-center flex h-full'>
                    <button
                        onClick={toggleNavbar}>
                            {isClicked? (
                                     <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                     <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                   </svg> 
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                </svg>
                            )
                            }
                    </button>
                </div>
                </div>
            </div>
            {isClicked && <SmallNav toggleNavbar={toggleNavbar}/>}
        </div>
  )
}

export default Nav