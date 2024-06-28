import React from 'react'

const Examples = () => {

  const projects = [
    {title: "Mocean Therapy", tools: ["React", "Tailwind", "Next.js", "Javascript", "Vercel"], info: "A responsive website", repo: "", site: ""}
    {title: "Jenn Evolve", tools: ["React", "Tailwind", "Next.js", "Javascript", "Vercel"], info: "A responsive website", repo: "", site: ""}
  ]
  return (
    <div>
        <h2>{projects.title}</h2>
        <p>React, Tailwind, Next.js, Javascript, Vercel</p>
        <p>A responsive website </p>
        <div className='flex'>
          <p>Repo</p>
          <p>Live Site</p>
        </div>
    </div>

  )
}

export default Examples