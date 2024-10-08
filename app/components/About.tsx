import React from 'react'
import SmallTimeline from './SmallTimeline'

const About = () => {

  const locations = [
    {
      year: "2013", flag: "🇬🇷", text: "Living and working in Greece for six months."
    },
    {year: "2017", flag: "🇩🇪", text: "Moving to Berlin when I was 21 to complete my undergraduate placement year.",},
    {year: "2018", flag: "🇦🇺", text: "Moving to Australia upon completion of my degree for a working holiday.",},
    {year: "2020", flag: "🇹🇭 ", text: "Living in Thailand for 3 years during Covid-19.",},
    {year: "2022, 2023", flag: "🇪🇺", text: "Two summers living and work on superyachts in The Meditarranean.",},
    {year: "2024", flag: "🇮🇳", text: "Most recently I have spent 5 months living in India where I completed my yoga qualification and worked on development projects."}

  ]
  return (
    <div id="about">
        <div className='text-6xl py-6 font-extrabold pl-4'>
          About Me
        </div>
        <div className='flex justify-center'>

        <div className='w-4/5 flex justify-center items-center flex-col'>
        <p className='pl-10 py-6 text-gray-400 text-5xl'>Travel</p>
        <div className='text-xl'>
          
        <p>I am travel obsessed having lived and worked all over the world, the most notable trips have been: </p>
        {locations.map((location, index) => (
          <div key={index} className='flex flex-row align-middle bg-gray-100 my-4 rounded-lg'>
          <div className='flex flex-col w-[150px] text-center items-center rounded-xl justify-center basis-1 p-2'>
            <p key={index} className='text-6xl  p-2'>{location.flag}</p>
          </div >
          <div className='absolute'></div>
          <div className='w-full rounded-lg p-2 flex items-center bg-gray-100 mt-2'>


            <p key={index}>{location.text}</p>
            </div>
          </div>
        ))}
       
        </div>
        </div>
        </div>
        <div className='flex justify-center'>
        <div className='rounded-xl p-4 mb-6 flex justify-center flex-col text-center'>
        <p className='py-6 text-gray-400 text-5xl'>Hobbies</p>
        <div className='text-lg'>
        <h2>Nutrition and Cooking</h2>
        <h2>Yoga and Mindfulness</h2>
        <h2>Health & Fitness</h2>
        <h2 className='pb-4'>Reading & Podcasts</h2>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About