import React from "react";
import SectionDescription from "./sectionDescription";
import SectionTitle from "./sectionTitle";
import SimpleCard from "./simpleCard";

function ExperienceSection() {
  const experience = [
    {
      name: "Mindshaker",
      logo: "assets/mindshakerlogo.png",
      link: "https://mindshaker.com",
      role: "Intern",
      roleDescription:
        "During my internship, I learned various front-end and back-end web development technologies, as well as working methodologies such as autonomy and collaboration.",
      dataInicio: "February of 2024",
      dataFim: "The moment",
    },
  ];

  const certificates = [
    {
      name: "Escola Superior de Tecnologia e Gestão - Instituto Politécnico de Beja",
      logo: "assets/IPBeja.jpg",
      link: "https://www.ipbeja.pt/UnidadesOrganicas/ESTIG/Paginas/default.aspx",
      role: "Higher Technical Professional Course in Web Technologies and Mobile Devices",
      roleDescription:
        "In this course I learned how to develop websites and web applications using languages used in the front-end and back-end following UX and UI standards, as well as the basics of computer networks and object-oriented programming.",
      dataInicio: "September of 2022",
      dataFim: "The moment",
    },
    {
      name: "IEFP - Centro de Emprego e Formação de Beja",
      logo: "assets/iefplogo.jpg",
      link: "https://www.iefp.pt/",
      role: "Network and IT Systems Management",
      roleDescription:
        "During this course I learned how to plan, install and administrate network systems. I also learned the basics of the Linux operating system and programming with Bash and Java.",
      dataInicio: "Dezember of 2021",
      dataFim: "July of 2022",
    },
  ];

  return (
    <section
      id="experience"
      className="section-element"
      style={{ backgroundColor: "transparent" }}
    >
      <SectionTitle title={"Experience"} />
      <SectionDescription
        description={"Explore my internships, and work experiences"}
      />
      <div className="row">
        <div className="item-left margin-medium-top div-small">
          <div className={`card-div`}>
            <h3 className="card-title">Work Experience</h3>
            <div className="overflow-list">
              {experience.map((company, index) => {
                return <SimpleCard key={index} dataObject={company} />;
              })}
            </div>
          </div>
        </div>
        <div className="item-right margin-medium-top div-small">
          <h3 className="card-title">Academic Background</h3>
          <div className="list">
            {certificates.map((certificate, index) => {
              return <SimpleCard key={index} dataObject={certificate} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
