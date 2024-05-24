import React from "react";
import SectionTitle from "./sectionTitle";
import SectionDescription from "./sectionDescription";
import ProjectCard from "./projectCard";

function ProjectsSection() {
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

  return (
    <section
      id="projects"
      className="section-element projects"
      style={{ backgroundColor: "#000", color: "#fff" }}
    >
      <SectionTitle title={"Projects"} />
      <SectionDescription
        description={
          "Explore my hands-on projects, internships, and work experiences."
        }
      />
      <div className="outer">
        {projects.map((project, index) => {
          if (index > 0) {
            return (
              <ProjectCard
                key={index}
                project={project}
                counter={index}
                classes="margin-large-top"
              />
            );
          } else {
            return (
              <ProjectCard key={index} project={project} counter={index} />
            );
          }
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;
