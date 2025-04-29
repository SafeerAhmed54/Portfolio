import Header from "@/components/header";
import Hero from "@/components/home";
import Design from "@/components/design";
import About from "@/components/about";
import Design2 from "@/components/design2";
import Education from "@/components/education";
import Skill from "@/components/skills";
import Experience from "@/components/experience";
import Project from "@/components/project";
import Contact from "@/components/contact";

// Main Page
// Home Page
// Need to work
// Improving it
// Hello

export default function Home() {
  return (
    <div className="bg-black p-4">
      <Header/>
      <Hero/>
      {/* <div className="h-6 w-full"></div> */}
      <Design/>
      <About/>
      <Design2/>
      <Education/>
      {/* <div className="h-40 w-full"></div> */}
      <Design/>
      {/* <div className="h-20 w-full"></div> */}
      <Skill/>
      <Experience/>
      {/* <div className="h-40 w-full"></div> */}
      <Design/>
      <Project/>
      <Contact/>
    </div>
  );
}
