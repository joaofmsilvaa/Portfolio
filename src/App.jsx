import "./App.css";
import Navigationbar from "./components/navigationbar";
import AboutSection from "./components/aboutSection";
import Mainsection from "./components/mainsection";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.to(".App", { opacity: "1", duration: 0.5 });

    let sections = gsap.utils.toArray(".section-element");

    sections.forEach((section) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(section.querySelector(".item-left"), {
        translateX: "-100%",
        opacity: 0,
        duration: 0.5,
      });

      tl.from(
        section.querySelector(".item-right"),
        {
          translateX: "100%",
          opacity: 0,
          duration: 0.5,
        },
        "-=0.5"
      );
    });
  }, []);

  return (
    <div className="App">
      <Navigationbar name={"João Silva"} />
      <Mainsection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
