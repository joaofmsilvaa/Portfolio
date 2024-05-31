import React from "react";

function SectionDescription({ description, cssClasses = "" }) {
  return (
    <div className={`section-description ${cssClasses}`}>{description}</div>
  );
}

export default SectionDescription;
