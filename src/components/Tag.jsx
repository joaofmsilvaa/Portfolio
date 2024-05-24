import React from "react";

function Tag({ tag }) {
  return <div className={`tag ${tag.replaceAll(" ", "-")}`}>{tag}</div>;
}

export default Tag;
