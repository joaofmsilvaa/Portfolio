import React from "react";
import Tag from "./Tag";

function Card({ title, description, arrTags = [], classes }) {
  return (
    <div className={`card-div ${classes}`}>
      <h3 className="card-title">{title}</h3>
      <div>
        <div className="card-description description">{description}</div>
      </div>
      <div className="list">
        {arrTags.map((tag, index) => {
          return <Tag key={index} tag={tag} />;
        })}
      </div>
    </div>
  );
}

export default Card;
