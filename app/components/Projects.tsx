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
        requirements: ["• User can contact business", "• User can book an appointment", "• User can access socials"]
    },
    {
        title: "Jenn Evolve",
        tools: ["• React ", "• Tailwind ", "• Next.js ", "• Javascript ", "• Hosted on Vercel "],
        info: "A responsive landing page for a sound healing and lifecoaching business.",
        img: "/jenn.png",
        repo: "https://github.com/mollybrace/jenn-evolve",
        site: "https://jenn-evolve.vercel.app/",
        requirements: ["• A multipage website displaying two business areas.", "• User can read reviews.", "• User can contact business via multiple streams.", "• User can read FAQs.", "User can find information about sessions offered.", "• Aligns with the brand."]
    },
    {
      title: "Flying Pig Lets",
      tools: ["• Svelte ", "• Tailwind CSS", "• Javascript ", "• Hosted on Vercel "],
      info: "A responsive landing page for a Air Bnb",
      img: "/flyingpiglets.png",
      repo: "www.flyingpiglets.co.uk",
      site: "www.flyingpiglets.co.uk",
      requirements: ["• Usr can read reviews.", "• User can see location of business.", "• User can access socials."]
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