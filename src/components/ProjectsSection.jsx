import React from "react";
import { gsap } from "gsap";
import Tag from "./Tag";
import Socialmedia from "./socialmedia";

function ProjectsSection() {
  gsap.config({
    nullTargetWarn: false,
  });

  const projects = [
    {
      id: 1,
      src: "/assets/reactcinema_home1.jpg",
      title: "React Cinema",
      description:
        "An online movie theater that makes use of an API to collect films, casts and reviews in a filtered way, as well as a log-in system integrated with the TMDB API.",
      tags: ["React", "API", "GIT"],
      repository: "https://github.com/joaofmsilvaa/ReactCinema",
    },
    {
      id: 2,
      src: "/assets/home_pc.jpg",
      title: "Bodyboost",
      description:
        "A commercial website used to promote the 'BodyBoost' app focused on meals, news and promoting a healthy lifestyle",
      tags: ["Laravel", "Blade", "Tailwind", "API", "GIT"],
      repository: "https://github.com/joaofmsilvaa/BodyBoost-Android-App",
    },
  ];

  return (
    <section
      id="projects"
      style={{ backgroundColor: "#000", color: "#fff" }}
      className="projects"
    >
      <div className="projects">
        {projects.map((project, index) => (
          <div className="section margin-medium-top projects" key={index}>
            <a
              href={`/projects/${project.id}`}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                className="project-img"
                src={project.src}
                alt={project.title}
              />
            </a>
            <h3>
              <a href={`/projects/${project.id}`} style={{ color: "white" }}>
                {project.title}
              </a>
            </h3>
            <p>{project.description}</p>
            <div className="list-between">
              <div className="list">
                {project.tags.map((tag, index) => {
                  return <Tag key={index} tag={tag} scale={1} />;
                })}
              </div>
              <Socialmedia
                link={project.repository}
                socialIconSrc={"/assets/github.svg"}
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
