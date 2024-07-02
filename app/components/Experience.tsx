import React from 'react'
import Timeline from './Timeline'
import Overview from './Overview'

const Experience = () => {
  return (
    <div id="experience" className='mt-6'>
      <div className='text-6xl py-6 font-extrabold pl-4'>
      My Experience
      </div>
      <div>
        <Timeline />
      </div>
    </div>
  )
}

export default Experience