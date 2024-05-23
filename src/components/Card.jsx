import React from "react";

function Card({ title, description, arrTags = [], classes }) {
  return (
    <div className={`card-div ${classes}`}>
      <h3 className="card-title">{title}</h3>
      <div className="tagsList">
        {arrTags.map((tag) => {
          return <div className="tag">{tag}</div>;
        })}
      </div>
      <div className="card-description">{description}</div>
    </div>
  );
}

export default Card;
