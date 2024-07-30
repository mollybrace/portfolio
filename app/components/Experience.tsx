import React from 'react'
import Timeline from './Timeline'
import Overview from './Overview'
import SmallNav from './SmallNav'
import SmallTimeline from './SmallTimeline'

const Experience = () => {
  return (
    <div id="experience" className='mt-6 bg-gray-100'>
      <div className='text-6xl py-6  font-extrabold pl-4 border bg-white rounded-lg w-[500px] ml-2 mt-4 '>
      My Experience
      </div>
      <div>
        <SmallTimeline />
      </div>
    </div>
  )
}

export default Experience