import React from "react";
import ImageElement from "./image";
import Tag from "./Tag";
import Socialmedia from "./socialmedia";

function ProjectCard({ project, classes = "", counter }) {
  return (
    <div className={`project-card ${classes} card-${counter}`}>
      <ImageElement src={project.src} alt={project.title} />
      <div>
        <h4 className="project-title">{project.title}</h4>
        <div className="description" style={{ color: "#fff" }}>
          {project.description}
        </div>
        <div className="list-between">
          <div className="list">
            {project.tags.map((tag, index) => {
              return <Tag key={index} tag={tag} />;
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
    </div>
  );
}

export default ProjectCard;
