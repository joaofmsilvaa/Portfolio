import React from "react";

function PrimaryButton({ text, defaultButton = "default-button", link = "/" }) {
  return (
    <a className={`primary-button ${defaultButton}`} href={link}>
      {text}
    </a>
  );
}

export default PrimaryButton;
