import React from 'react'

const SmallNav = ( { toggleNavbar }) => {
  return (
    <div className='fixed top-0 left-0 h-full bg-white-800 bg-opacity-95 bg-white justify-center border w-full text-3xl text-gray-500 pt-20 z-40'>
                <ul className='w-full space-x-10 justify-center text-center'>
                    <li className=' hover:underline p-4'>
                        <a href="#projects" onClick={toggleNavbar}>Projects</a>
                    </li>
                    <li className='hover:underline p-4'>
                        <a href='#skills'onClick={toggleNavbar}>Skills</a>
                    </li>
                    <li className='hover:underline p-4'>
                        <a href='#experience'onClick={toggleNavbar}>Experience</a>
                    </li>
                    <li className='hover:underline p-4'>
                        <a href='#about'onClick={toggleNavbar}>About</a>
                    </li>
                    <li className='hover:underline p-4'>
                        <a href="#contact" onClick={toggleNavbar}>Contact</a>
                    </li>
                </ul>
            </div>
  )
}

export default SmallNav