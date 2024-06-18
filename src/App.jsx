import "./App.css";
import Navigationbar from "./components/navigationbar";
import AboutSection from "./components/aboutSection";
import Mainsection from "./components/mainsection";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Notification from "./components/notification";
import Footer from "./components/footer";

function App() {
  gsap.config({
    nullTargetWarn: false,
  });

  useGSAP(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

    gsap.to("body", { opacity: "1", duration: 0.5 });
    let submitedParams = window.location.search
      .substr(1)
      .replaceAll("=", "")
      .split("&");

    if (submitedParams.length > 1) {
      gsap.to(".notification", {
        duration: 0.5,
        x: "-5%",
      });

      setTimeout(() => {
        gsap.to(".notification", {
          duration: 0.5,
          x: "100%",
        });
      }, 2000);
    }

    gsap.to("progress", {
      value: 100,
      ease: "none",
      scrollTrigger: {
        trigger: "#mySection",
        scrub: 0.3,
      },
    });

    gsap.to(".main-desc", {
      duration: 4,
      text: {
        value: "A Determined and Passionate Student and Developer",
        ease: "none",
        newClass: "main-desc-complete",
        onComplete: () => {
          setTimeout(() => {
            document.querySelector(".main-desc").classList.toggle("main-desc");
          }, 3500);
        },
      },
    });

    let sections = gsap.utils.toArray(".section-element");

    sections.forEach((section) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "bottom 25%",
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

      tl.to(
        section.querySelectorAll(".item-left .tag"),
        {
          duration: 0.3,
          scale: 1,
          stagger: {
            amount: 1.5,
          },
          toggleActions: "play none none none",
        },
        "0.5"
      );
    });

    let socialIcons = gsap.utils.toArray(".list-aside .icon-img-small");

    socialIcons.forEach((icon) => {
      gsap.from(icon, {
        scrollTrigger: {
          start: "top 50%",
          end: "bottom 50%",
          trigger: ".projects",
          onEnter() {
            icon.parentElement.classList.add("reverse");
          },
          onLeave() {
            icon.parentElement.classList.remove("reverse");
          },
          onEnterBack() {
            icon.parentElement.classList.add("reverse");
          },
          onLeaveBack() {
            icon.parentElement.classList.remove("reverse");
          },
        },
      });
    });

    let projectCards = gsap.utils.toArray(".project-card");

    projectCards.forEach((project) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "top 70%",
          end: "bottom -70%",
        },
      });

      tl.fromTo(project, { opacity: 0 }, { opacity: 1, duration: 0.5 });

      tl.to(
        project.querySelectorAll(".tag"),
        {
          duration: 0.3,
          scale: 1,
          stagger: {
            amount: 0.8,
          },
          toggleActions: "play none none none",
        },
        "0.5"
      );
    });
  }, []);

  return (
    <div className="App">
      <Navigationbar name={"João Silva"} />
      <Notification text={"Thank you for contacting me :)"} />
      <Mainsection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
