import React, { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import Navigationbar from "../navigationbar";
import PrimaryButton from "../primaryButton";
import SectionDescription from "../sectionDescription";
import Tag from "../Tag";
import Socialmedia from "../socialmedia";

export default function Details() {
  const params = useParams();
  const [project, setProject] = useState();

  const projects = [
    {
      id: 1,
      src: "/assets/reactcinema_home1.jpg",
      title: "React Cinema",
      excerpt:
        "An online movie theater that makes use of an API to collect films, casts and reviews in a filtered way, as well as a log-in system integrated with the TMDB API.",

      description:
        "A React web application designed to make it easier to search for movies using advanced filtering, pagination and the largest public movie library. Use was made of the TMDB service API, which made it possible to implement various functionalities such as login, like, search for movies that the user has added to their list of likes and ratings.",
      tags: ["React", "API", "GIT"],
      repository: "https://github.com/joaofmsilvaa/ReactCinema",
    },
    {
      id: 2,
      src: "/assets/home_pc.jpg",
      title: "Bodyboost",
      excerpt:
        "A commercial website used to promote the 'BodyBoost' app focused on meals, news and promoting a healthy lifestyle",
      description:
        "A commercial website created with the aim of promoting a healthy lifestyle through physical exercise and good nutrition. The website offers a varied list of healthy recipes that can be searched in an advanced way, sports news and the API documentation used by the mobile application that is also part of this project. The application makes use of the API mentioned above to register, log in, collect resources such as news, meals and the user's training plan, which they can change according to their goals.",
      tags: ["Laravel", "Blade", "Tailwind", "API", "GIT"],
      repository: "https://github.com/joaofmsilvaa/BodyBoost-Android-App",
    },
    // {
    //   id: 3,
    //   src: "/assets/gamefy_pc.jpg",
    //   title: "Gamefy",
    //   excerpt: "",
    //   description:
    //     "The Gamefy project consists of a digital video game store connected to an API created in laravel. The user can consult detailed searches, consult information, make purchases and also log in and register.",
    //   tags: ["Laravel", "Blade", "Tailwind", "API", "GIT"],
    //   repository: "https://github.com/joaofmsilvaa/BodyBoost-Android-App",
    // },
  ];

  useEffect(() => {
    projects.forEach((element) => {
      if (element.id == params.id) {
        setProject(element);
      }
    });
  }, []);

  return (
    <>
      {project ? (
        <div>
          <Navigationbar />
          <div
            className="bannerImage"
            style={{
              backgroundImage: `linear-gradient(to right,  rgba(12, 12, 12, 0.5), rgba(237, 237, 237, 0.21)), url('${project.src}') `,
            }}
          ></div>
          <section id="home" className="detailsSection">
            <h1 className="details-title">{project.title}</h1>
            <div className="details-description">{project.excerpt}</div>
            <div className="details-description">{project.description}</div>
            <div className="list-center">
              <div className="list">
                {project.tags.map((tag, index) => {
                  return <Tag scale={1} key={index} tag={tag} />;
                })}
              </div>
              <Socialmedia
                link={project.repository}
                socialIconSrc={"/assets/github.svg"}
                altText={"Github icon"}
              />
            </div>
          </section>
        </div>
      ) : (
        <div>
          <Navigationbar />
          <section id="home" className="mainSection">
            <h1 className="main-title">404 Project not found</h1>
            <SectionDescription
              cssClasses="main-desc-complete"
              description={"We couldn't find the project with the given id"}
            />
            <div className="margin-medium-top">
              <PrimaryButton text={"Go back to home page"} />
            </div>
          </section>
        </div>
      )}
    </>
  );
}
