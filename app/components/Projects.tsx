import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {

  const projects = [
    {
        title: "Mocean Therapy",
        tools: ["• React ", "• Tailwind ", " • Next.js ", "• Javascript ", " •Vercel"],
        info: "A responsive landing page for a therapist, hosted on Vercel",
        img: "/mocean.png",
        repo: "https://github.com/mollybrace/mocean-therapy",
        site: "https://www.mocean-therapy.com/"
    },
    {
        title: "Jenn Evolve",
        tools: ["• React ", "• Tailwind ", "• Next.js ", "• Javascript ", "• Vercel "],
        info: "A responsive landing page for a sound healing and lifecoaching business, hosted on Vercel",
        img: "/jenn.png",
        repo: "https://github.com/mollybrace/jenn-evolve",
        site: "https://jenn-evolve.vercel.app/"
    }
];

  return (
      <div id="projects">
        <div className='text-6xl font-extrabold pl-4'>
        Projects
        </div>
        <div className='flex flex-col items-center'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project}/>

          ))}
        </div>
      </div>
  )
}

export default Projects