import React from "react";

function PrimaryButton({ text, defaultButton = "default-button" }) {
  return <button className={`primary-button ${defaultButton}`}>{text}</button>;
}

export default PrimaryButton;
