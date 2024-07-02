import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { TechSkills } from "./components/TechSkills";
import About from "./components/About";


export default function Home() {
  return (
    <div className="w-screen h-screenn overflow-hidden">
      <Nav />
      <Hero />
      <Intro />
      <Projects />
      <TechSkills />
      <Experience />
      <About />
      <Contact />

    </div>
  )
}
