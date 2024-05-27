import React from "react";

function notification({ text, cssClasses = "success" }) {
  return <div className={`notification ${cssClasses}`}>{text}</div>;
}

export default notification;
