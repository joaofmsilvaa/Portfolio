import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tag from "./Tag";
import Socialmedia from "./socialmedia";

function ProjectsSection() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const projects = [
    {
      src: "assets/reactcinema_home1.jpg",
      title: "React Cinema",
      description:
        "An online movie theater that makes use of an API to collect films, casts and reviews in a filtered way, as well as a log-in system integrated with the TMDB API.",
      tags: ["React", "API", "GIT"],
      repository: "https://github.com/joaofmsilvaa/ReactCinema",
    },
    {
      src: "assets/home_pc.jpg",
      title: "Bodyboost",
      description:
        "A commercial website used to promote the 'BodyBoost' application developed in the school environment. The website has meals and news pages, both paginated and filtered, as well as an API documentation page and an admin dashboard.",
      tags: ["Laravel", "Blade", "Tailwind", "API", "GIT"],
      repository: "https://github.com/joaofmsilvaa/BodyBoost-Android-App",
    },
  ];

  const containerRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".section");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${containerRef.current.offsetWidth}`,
      },
    });
  }, []);

  return (
    <section
      id="projects"
      style={{ backgroundColor: "#000", color: "#fff" }}
      className="projects"
    >
      <div className="container projects" ref={containerRef}>
        {projects.map((project, index) => (
          <div className="section margin-medium-top projects" key={index}>
            <img
              className="project-img"
              src={project.src}
              alt={project.title}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="list-between">
              <div className="list">
                {project.tags.map((tag, index) => {
                  return <Tag key={index} tag={tag} scale={1} />;
                })}
              </div>
              <Socialmedia
                link={project.repository}
                socialIconSrc={"assets/github.svg"}
                altText={"Github icon"}
                style={"reverse"}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
