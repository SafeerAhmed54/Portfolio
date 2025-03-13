import Header from "@/components/header";
import Hero from "@/components/home";
import Design from "@/components/design";
import About from "@/components/about";
import Design2 from "@/components/design2";
import Education from "@/components/education";
import Project from "@/components/project";
import Contact from "@/components/contact";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black p-4">
      <Header/>
      <Hero/>
      <Design/>
      <About/>
      <Design2/>
      <Education/>
      <Design/>
      <Project/>
      <Contact/>
    </div>
  );
}
