import React from "react";

function Form() {
  return (
    <form action="/">
      <div className="width-full flex-small">
        <label htmlFor="name">Name</label>
        <input
          required
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div className="width-full flex-small">
        <label htmlFor="email">Email</label>
        <input
          required
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="width-full flex-small">
        <label htmlFor="message">Message</label>
        <textarea
          required
          id="message"
          name="message"
          placeholder="Message"
        ></textarea>
      </div>
      <div className="flex-right">
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
}

export default Form;
