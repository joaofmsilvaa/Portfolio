import "./App.css";
import Navigationbar from "./components/navigationbar";
import AboutSection from "./components/aboutSection";
import Mainsection from "./components/mainsection";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.to(".App", { opacity: "1", duration: 0.5 });

    gsap.to(".text-left", {
      scrollTrigger: {
        trigger: ".section-element",
        yPercent: 100,
        ease: "none",
      },
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mainSection",
        end: "bottom 35%",
        toggleActions: "play reverse play reverse",
      },
    });
    tl.from(".item-left", {
      translateX: "0%",
      opacity: 1,
      duration: 0.8,
    });
    tl.from(
      ".item-right",
      {
        translateX: "0%",
        opacity: 1,
        duration: 0.8,
      },
      "-=0.8"
    );
  }, []);

  return (
    <div className="App">
      <Navigationbar name={"João Silva"} />
      <Mainsection />
      <AboutSection />
    </div>
  );
}

export default App;
