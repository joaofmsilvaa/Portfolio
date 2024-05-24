import React from "react";

function Form() {
  return (
    <form action="/">
      <div className="width-full flex-small">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div className="width-full flex-small">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="width-full flex-small">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Message"></textarea>
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default Form;
