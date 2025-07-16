import React from "react";

export const Contact = () => {
  return (
    <section className="section-contact">
      <div className="container">
        <h2 className="contact-title">Contact Us</h2>

        <div className="contact-wrapper">
          <form className="contact-form">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              required
              autoComplete="off"
            />

            <textarea
              className="form-control"
              rows="6"
              placeholder="Enter your message"
              name="message"
              required
              autoComplete="off"
            ></textarea>

            <button type="submit" className="btn btn-darken submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
