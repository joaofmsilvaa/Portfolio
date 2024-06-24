import React from "react";

function Socialmedia({ socialIconSrc, altText, link, style = "" }) {
  return (
    <div className={style}>
      <a href={link} target="_blank">
        <img
          href={link}
          className="icon-img-small"
          src={socialIconSrc}
          alt={altText}
        />
      </a>
    </div>
  );
}

export default Socialmedia;
