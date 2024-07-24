import Image from 'next/image'
import React from 'react'

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

    
  return (
      <div className='flex flex-col justify-center text-center bg-gray-300 shadow-lg rounded-xl w-2/4 p-4 m-6 hover:bg-blue-950 hover:text-gray-200 transition-colors'>
       

                <div className='text-2xl p-4 w-full hover:text-gray-200'>
                     <p className='font-bold text-4xl pb-6'>{project.title}</p>
                     <div className='flex justify-center'>
                     

                     </div>
                     <p className='pt-4'>{project.info}</p>
                     <ul><li className='m-4 px-4 text-gray-400 italic'>{project.tools}</li></ul>



                     <div className='flex justify-around font-bold text-blue-950 hover:text-gray-300'>
                     <a href={project.repo} target="_blank" className='hover:underline'><p>Repo</p></a>
                     <a  href={project.site} target="_blank" className='hover:underline'>
                      <p className='hover:text-gray-400'>Live Site</p>
                     </a>   

                     </div>

                 </div>
    
    </div>
  )
}

export default ProjectCard