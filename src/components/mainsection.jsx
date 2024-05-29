import React from "react";
import SectionDescription from "./sectionDescription";
import PrimaryButton from "./primaryButton";
import Socialmedia from "./socialmedia";

function Mainsection() {
  return (
    <section id="home" className="mainSection">
      <div className="list-aside">
        <Socialmedia
          link={"https://github.com/joaofmsilvaa"}
          socialIconSrc={"assets/github.svg"}
          altText={"Github icon"}
          style={"margin-small-bottom"}
        />
        <Socialmedia
          link={"https://www.linkedin.com/in/jo%C3%A3o-silva-7255b3258/"}
          socialIconSrc={"assets/linkedin.svg"}
          altText={"Linkedin icon"}
          style={"margin-small-bottom"}
        />
        <Socialmedia
          link={"https://leetcode.com/u/joao7640/"}
          socialIconSrc={"assets/leetcode.svg"}
          altText={"Leetcode icon"}
          style={"margin-small-bottom"}
        />
      </div>

      <h1 className="main-title">Hello, I am João Silva</h1>
      <SectionDescription
        cssClasses="main-desc"
        description={""}
      />
      <div className="margin-medium-top">
        <PrimaryButton text={"Projects"} link="#projects" />
      </div>
    </section>
  );
}

export default Mainsection;
