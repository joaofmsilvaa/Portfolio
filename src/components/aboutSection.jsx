import React from "react";
import SectionDescription from "./sectionDescription";
import SectionTitle from "./sectionTitle";
import Card from "./Card";

function AboutSection() {
  const myDescription = `I'm an enthusiastic and committed university student with a knack for crafting distinctive and impactful projects. My drive for excellence fuels my dedication to bringing unique ideas to life.

  \nAs a Computer Science student at Instituto Politécnico de Beja, I have honed a diverse skill set and deep expertise in Web development. My academic pursuits are complemented by practical experience, allowing me to seamlessly blend theory with application.`;

  const skills = [
    "Java",
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "Sass",
    "JavaScript",
    "React",
    "React Native",
    "PHP",
    "Wordpress",
    "Laravel",
  ];

  return (
    <section id="about" className="section-element about">
      <SectionTitle title={"About"} />
      <SectionDescription
        description={
          "Learn more about my background, passions, and what drives my projects"
        }
      />
      <div className="row">
        <div className="item-left margin-medium-top div-small">
          <Card
            title={"Get to know me"}
            description={myDescription}
            classes={"opacity-none"}
          />
        </div>
        <div className="item-right margin-medium-top div-small">
          <Card title={"Skills"} arrTags={skills} />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;