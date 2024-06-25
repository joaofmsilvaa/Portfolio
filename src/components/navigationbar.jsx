import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function Navigationbar({ name = null }) {
  gsap.config({
    nullTargetWarn: false,
  });

  const [showNav, setShowNav] = useState(false);

  const show = !showNav
    ? { height: "0px", overflow: "hidden" }
    : { height: "100%", overflow: "hidden", transition: "all 150ms" };

  return (
    <nav>
      <progress max="100" value="0"></progress>

      <div className="navigationbar">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>
            <a href="/">
              <img src="/assets/js-removebg-preview.svg" alt="logo"></img>
            </a>
          </span>
        </div>

        <div className="nav-links">
          <img
            onClick={() => {
              setShowNav(!showNav);
            }}
            src="/assets/burger-icon.svg"
            className="burger-icon"
          ></img>
          <ul>
            <li>
              <a href="/#home">HOME</a>
            </li>
            <li>
              <a href="/#about">ABOUT</a>
            </li>
            <li>
              <a href="/#experience">EXPERIENCE</a>
            </li>
            <li>
              <a href="/#projects">PROJECTS</a>
            </li>
            <li>
              <a href="/#contact">CONTACT</a>
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
            <a href="/#home">HOME</a>
          </li>
          <li
            onClick={() => {
              setShowNav(false);
            }}
          >
            <a href="/#about">ABOUT</a>
          </li>
          <li
            onClick={() => {
              setShowNav(false);
            }}
          >
            <a href="/#experience">EXPERIENCE</a>
          </li>
          <li
            onClick={() => {
              setShowNav(false);
            }}
          >
            <a href="/#projects">PROJECTS</a>
          </li>
          <li
            onClick={() => {
              setShowNav(false);
            }}
          >
            <a href="/#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
