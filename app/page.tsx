import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Intro />
      <Projects />
      <Contact />
      
    </div>
  )
}
