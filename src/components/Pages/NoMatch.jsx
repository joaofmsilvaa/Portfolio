import React from "react";
import Navigationbar from "../navigationbar";
import Socialmedia from "../socialmedia";
import SectionDescription from "../sectionDescription";
import PrimaryButton from "../primaryButton";

export default function NoMatch() {
  return (
    <div>
      <Navigationbar />
      <section id="home" className="mainSection">
        <h1 className="main-title">404 Page not found</h1>
        <SectionDescription
          cssClasses="main-desc-complete"
          description={
            "Looks like you couldn't find the page you were looking for "
          }
        />
        <div className="margin-medium-top">
          <PrimaryButton text={"Go back to home page"} />
        </div>
      </section>
    </div>
  );
}
