import React from "react";

export default function Navigationbar({ name = null }) {
  return (
    <nav className="navigationbar">
      <div>
        <span>
          <a href="/">{name.toUpperCase()}</a>
        </span>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#experience">EXPERIENCE</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
