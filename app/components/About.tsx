import React from 'react'

const About = () => {

  const locations = [
    {
      flag: "🇬🇷", text: "Living and working in Greece when I was 18"
    },
    {flag: "🇩🇪", text: "Moving to Berlin when I was 21 to complete my undergraduate placement year",},
    {flag: "🇦🇺", text: "Moving to Australia upon completion of my degree for a WHV.",},
    {flag: "🇹🇭 ", text: "Getting stuck in Thailand in 2020 due to Covid-19. Subsequently, I started working as an English teacher and lived there for three years.",},
    {flag: "🇪🇺", text: "After leaving Thailand in 2023, I went to live and work on Superyachts whilst travelling all over the Meditarranean",},
    {flag: "🇮🇳", text: "Most recently I have spent 5 months living in India where I completed my Yoga Qualification and worked on development projects."}

  ]
  return (
    <div id="about">
        <div className='text-6xl py-6 font-extrabold pl-4'>
          About Me
        </div>
        <div className='flex justify-center'>

        <div className='w-4/5 flex justify-center items-center flex-col'>
        <p className='pl-10 py-6 text-gray-400 text-4xl'>Travel</p>
        <div className='text-lg'>
        <p>I am travel obsessed having lived and worked all over the world, the most notable  trips have been: </p>
        {locations.map((location, index) => (
          <ul className="flex" key={index}>
            <li className='pr-4 text-5xl'>{location.flag}</li>

            <li>{location.text}</li>
          </ul>
        ))}
       
        </div>
        </div>
        </div>
        <div className='flex justify-center'>
        <div className=''>
        <p className='pl-10 py-6 text-gray-400 text-4xl'>Hobbies</p>
        <div>
        <p>Vegetarian cooking</p>
        <p>Yoga and mindfulness</p>
        <p>Running, swimming, weight training</p>
        <p>Reading & Audiobooks</p>
        <p className='pb-4'>Podcasts</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About