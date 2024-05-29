import React from "react";

function Tag({ tag, scale = 0 }) {
  return (
    <div style={{ scale: scale }} className={`tag ${tag.replaceAll(" ", "-")}`}>
      {tag}
    </div>
  );
}

export default Tag;
