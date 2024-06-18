import React from "react";

export default function Footer() {
  return (
    <section className="footer-section" id="contacts">
      <div>
        <h2>Lets Talk !</h2>
        <span>Email me at</span>
      </div>
      <div className="emailDiv">
        <div className="emailImgDiv">
          <img src="assets/email-svgrepo-com.svg" alt="email logo"></img>
        </div>
        <span className="email">joaosilva.contacts@gmail.com</span>
      </div>
    </section>
  );
}
