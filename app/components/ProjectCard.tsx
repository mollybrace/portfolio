"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';


interface Project {
  title: string;
  img: string;
  info: string;
  tools: string[];
  repo: string;
  site: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }) => {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
   console.log(flipped)
  };

  return (
      <div className={`flip-card container bg-gray-300 shadow-lg rounded-xl w-2/4 p-4 m-6 h-[500px] lg:h-[750px] lg:w-[500px] cursor-pointer text-blue-950 hover:bg-blue-950 hover:text-gray-200 transition-colors ${flipped ? 'flipped' : ''}`} 
      onClick={flipCard}
      >
        <div className="flip-card-inner">
          <div id="front" className='flip-card-front flex flex-col text-2xl align-top h-full justify-between text-center'>
          <div className='font-bold text-4xl pb-6'>
            <p>{project.title}</p>
          </div>
          <div className='container h-full rounded-lg flex-grow relative justify-center items-center overflow-hidden'>
          <Image src={project.img}
          layout="fill"
          objectFit="cover"
          alt="website preview"
          className='object-contain rounded-lg' />

          </div>
          <div>
           <div className='flex justify-around font-bold p-4 '>
             <a href={project.repo} target="_blank" className='hover:underline'>
                <p>Repo</p>
             </a>
             <a  href={project.site} target="_blank" className='hover:underline'>
               <p>Live Site</p>
             </a>   

          </div>
        </div>
        </div>  
        
        <div id="back" className='absolute flip-card-back flex flex-col align-middle justify-around text-center'>
          <p className='justify-start pt-4 text-2xl'>{project.info}</p>
          <ul>
            <p className='text-xl mt-4 font-bold'>Project Requirements</p>
            {project.requirements.map((requirement, index) => (
              <li key={index} className='block'>{requirement}</li>

            ))}
          </ul>
          <ul>
            <p className='text-gray-400 mt-4 px-4 text-xl font-bold'>Project Tools</p>
            <li className=' text-gray-400 italic text-xl'>{project.tools}</li>
          </ul>

        </div>



     </div>

    
      </div>
  )
}

export default ProjectCard