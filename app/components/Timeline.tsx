import React from 'react'
import ExperienceCard from './ExperienceCard'

const Timeline = () => {

    const experiences = [
        {title: "Univeristy of Brighton", course: "Business Management with Economics", info: "Undergraduate studies", location: "Brighton UK"},

        {title: "Northcoders", course: "Full Stack Development", info: "Bootcamp", location: "Online"}
    ]

  return (
    <div className='flex justify-center pl-6 pr-6'>
       <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic text-3xl">2024</time>
      <div className="text-lg font-black">Freelance Web Developer</div>
      <div>
        <ul>
          <li>Designed and developed mobile-friendly, responsive websites that meet clients' needs.</li>
          <li>Collaborated with clients to understand their goals and integrated their feedback throughout the development process.</li>
        </ul>

.</div>
    <div className="text-lg font-black">Yoga Instructor</div>
      <div className='italic'>January 2024-present</div>
    <div>After studying yoga for one month in Rishikesh, India at the beginning of the year I now work as a freelance Yoga Intructor. Offering holistic sessions both online and in person.</div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic text-3xl ">2023</time>
      <div className="text-lg font-black">Full Stack Web Development Bootcamp</div>
      <div className='flex justify-between italic'>
      <div className='text-gray-400'>Northcoders</div>
      <div>January 2023-April 2023</div>
      </div>
      <div>• Full-stack software engineering bootcamp covering the fundamentals of CSS, HTML, JavaScript, Test Driven Development and Agile development practices. 
 </div>
      <div className="text-lg font-black">Second Stewardess</div>
      <div className='flex justify-between italic'>
      <div className='text-gray-400'>Motor Yacht Belongers</div>
      <div>June 2023-October 2023</div>
      </div>
      <div>
        <ul>
          <li>• Second Stew within an interior team of three on a 50M motor yacht around The Mediterranean.</li>
        </ul>
      </div>
      
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
    
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic text-3xl ">2022</time>
      <div className="text-lg font-black">Superyacht Stewardess</div>
      <div className='flex flex-col italic'>
      <div className='text-gray-400 italic'>Motor Yacht Sonny II</div>
      <div>June 2022-October 2022</div>
      </div>
      <div>
        <ul>
          <li>
          • After leaving Thailand I completed joined a yacht based in Spain and travelled around The Meditarranean for the summer
          </li>
        </ul></div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic text-3xl">2021</time>
      <div className="text-lg font-black">English Language Tutor</div>
      <div className='flex justify-between italic'>
      <div className='text-gray-400'>Engoo</div>
      <div>January 2023-present</div>
      </div>
      <ul>
        <li>
        •       I have established a global student base of 500+ students as an online English tutor.
        </li>
      </ul>

    </div>
    
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic text-3xl">2020</time>
      <div className="text-lg font-black">Kindergarten Homeroom Teacher</div>
      <div className='text-gray-400'>Pan Asia International School</div>
      <div>Due to unexpectedly becoming stuck in Thailand due to Covid-19 I studied for my TEFL certificate during the first lockdown and moved to Bangkok to work as an English Teacher in an International School.</div>
      <div className="text-lg font-black">Business Development Manager</div>
      <div className='text-gray-400'>Social Fox</div>
        <ul>
            <li>During the first Covid lockdown in Thailand I started working for an Australian based digital marketing startup agency as their first business development team member.</li>
        </ul>
    </div>
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
     
    </div>
    <div className="timeline-start mb-10 md:text-start">
      <time className="font-mono italic text-3xl ">2019</time>
      <div className="text-lg font-black">Working Holiday Visa- Australia</div>
      <div>After completing university I moved to Australia where I undertook a number of hospitality roles as well as completing my 88 days of agricultural work.</div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
     
    </div>
    <div className="timeline-start mb-10 md:text-start">
      <time className="font-mono italic text-3xl ">2014-2018</time>
      <div className="text-lg font-black">University of Brighton</div>
      <div>First class honours in Business Management with Economics</div>
      <div className="text-lg font-black">Brandnew IO</div>
      <div>Head of Influencer management</div>
      <div>As my placement year I moved to Berlin to work at a digital marketing start up company. After starting as an intern, after 6 months I was promoted to head of my department and continued to work remotely for the company throughout my final year of university.</div>
    </div>
    <hr />
  </li>
</ul>    </div>



        

  )
}

export default Timeline