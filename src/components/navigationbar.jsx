import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function Navigationbar({ name = null }) {
  gsap.registerPlugin(useGSAP, ScrollToPlugin);

  const home = useRef();
  const about = useRef();
  const experience = useRef();
  const projects = useRef();
  const contact = useRef();

  const links = {
    home: "#home",
    about: "#about",
    experience: "#experience",
    projects: "#projects",
    contacts: "#contacts",
  };

  const [showNav, setShowNav] = useState(false);

  const show = !showNav
    ? { height: "0px", overflow: "hidden" }
    : { height: "100%", overflow: "hidden", transition: "all 150ms" };

  useGSAP((context, contextSafe) => {
    let scrollToSection = (section) =>
      contextSafe(() => {
        gsap.to(window, {
          duration: 1,
          scrollTo: links[section],
          ease: "power2",
        });
      });

    home.current.addEventListener("click", scrollToSection("home"));

    about.current.addEventListener("click", scrollToSection("about"));

    experience.current.addEventListener("click", scrollToSection("experience"));

    projects.current.addEventListener("click", scrollToSection("projects"));

    contact.current.addEventListener("click", scrollToSection("contacts"));
  });

  return (
    <nav>
      <div className="navigationbar">
        <div>
          <span>
            <a href="/">{name.toUpperCase()}</a>
          </span>
        </div>

        <div className="nav-links">
          <img
            onClick={() => {
              setShowNav(!showNav);
            }}
            src="assets/burger-icon.svg"
            className="burger-icon"
          ></img>
          <ul>
            <li>
              <a ref={home}>HOME</a>
            </li>
            <li>
              <a ref={about}>ABOUT</a>
            </li>
            <li>
              <a ref={experience}>EXPERIENCE</a>
            </li>
            <li>
              <a ref={projects}>PROJECTS</a>
            </li>
            <li>
              <a ref={contact}>CONTACT</a>
            </li>
          </ul>
        </div>
      </div>

      <div style={show}>
        <ul className="mobileDiv">
          <li
            onClick={() => {
              setShowNav(false);
            }}
          >
            <a href="#home">HOME</a>
          </li>
          <li
            onClick={() => {
              setShowNav(false);
            }}
          >
            <a href="#about">ABOUT</a>
          </li>
          <li
            onClick={() => {
              setShowNav(false);
            }}
          >
            <a href="#experience">EXPERIENCE</a>
          </li>
          <li
            onClick={() => {
              setShowNav(false);
            }}
          >
            <a href="#projects">PROJECTS</a>
          </li>
          <li
            onClick={() => {
              setShowNav(false);
            }}
          >
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
      <progress max="100" value="0"></progress>
    </nav>
  );
}
