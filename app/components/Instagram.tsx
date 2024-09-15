"use client"
import React from 'react'
import Image from 'next/image'

const Instagram = () => {

    const photos = [
        "/insta1.jpg", "/insta2.jpg", "/insta3.jpg"
    ]
  return (
    <div className='flex justify-cente items-center text-center'>
        <div className='fle'>
            <p className='text-5xl'>@molly.brace</p>

            <div className='grid grid-cols-2 md:grid-rows-4'>
                {photos.map(photo => (
                    <Image src={photo}
                    width={300}
                    height={250} 
                    className='m-4'/>

                ))}

            </div>

        </div>
    </div>
  )
}

export default Instagram