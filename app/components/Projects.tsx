import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {

  const projects = [
    {
        title: "Mocean Therapy",
        tools: ["• React ", "• Tailwind ", " • Next.js ", "• Javascript ", " •Hosted on Vercel"],
        info: "A responsive landing page for a Therapist Business.",
        img: "/mocean.png",
        repo: "https://github.com/mollybrace/mocean-therapy",
        site: "https://www.mocean-therapy.com/",
        requirements: ["• A contact form", "• A method to book an appointment", "•Links to socials"]
    },
    {
        title: "Jenn Evolve",
        tools: ["• React ", "• Tailwind ", "• Next.js ", "• Javascript ", "• Hosted on Vercel "],
        info: "A responsive landing page for a sound healing and lifecoaching business.",
        img: "/jenn.png",
        repo: "https://github.com/mollybrace/jenn-evolve",
        site: "https://jenn-evolve.vercel.app/",
        requirements: ["• A multipage website displaying two business areas", "• A review feature", "• A contact form", "• Links to socials", "•Aligns with the brand"]
    }
];

  return (
      <div id="projects">
        <div className='text-6xl font-extrabold pl-4'>
        Projects
        </div>
        <div className='flex flex-col md:flex-row items-center w-full'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project}/>

          ))}
        </div>
      </div>
  )
}

export default Projects