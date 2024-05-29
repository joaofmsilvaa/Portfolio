import React from "react";
import SectionTitle from "./sectionTitle";
import SectionDescription from "./sectionDescription";
import Form from "./Form";

function ContactsSection() {
  return (
    <section id="contact" className="section-element contact">
      <SectionTitle title={"Contact"} />
      <SectionDescription
        description={
          "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible "
        }
      />
      <div className="row width-large margin-small-top">
        <div className="box-secundary width-full">
          <Form />
        </div>
      </div>
    </section>
  );
}

export default ContactsSection;
