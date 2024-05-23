import React from "react";
import SectionDescription from "./sectionDescription";
import PrimaryButton from "./primaryButton";

function Mainsection() {
  return (
    <section id="home" className="mainSection">
      <h1 className="main-title">Hello, I am João Silva</h1>
      <SectionDescription
        description={"A Determined and Passionate Student and Developer"}
      />
      <div className="margin-small-top">
        <PrimaryButton text={"Projects"} />
      </div>
    </section>
  );
}

export default Mainsection;
