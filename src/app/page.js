import Hero from "@/components/Hero";
import Image from "next/image";
import About from "../../About";
import Experience from "@/components/Experience";
import Services from "./Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <div className="">
      <Hero/>
      <About/>
      <Experience/>
      <Services/>
      <Projects/>
      <Skills/>
      <Contact/>
      
    </div>
  );
}
