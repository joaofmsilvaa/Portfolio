import React, { useRef } from "react";
import SectionTitle from "./sectionTitle";
import SectionDescription from "./sectionDescription";
import Form from "./Form";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ContactsSection() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    let tl = gsap.timeline();

    tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contacts",
        start: "top 50%",
        end: "bottom 25%",
      },
    });

    let inputsInForm = document.querySelectorAll(".input-field");

    inputsInForm.forEach((input) => {
      tl.to(input, {
        translateX: "0%",
        opacity: 1,
        duration: 0.5,
      });
    });
  });

  return (
    <section id="contacts" className="section-element contact">
      <SectionTitle title={"Contact"} />
      <SectionDescription
        description={
          "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible "
        }
      />
      <div className="row width-large margin-small-top">
        <div
          className="box-secundary width-full">
          <Form />
        </div>
      </div>
    </section>
  );
}

export default ContactsSection;
