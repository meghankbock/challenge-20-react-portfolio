import React, { useState } from "react";
const nodemailer = require("nodemailer");
require("dotenv").config();

const Contact = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });

    setErrorMessage("");

    let regex = new RegExp(
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'
    );

    if (name === "first name" || name === "last name") {
      if (!value) {
        setErrorMessage(`Please provide your ${name}`);
        return errorMessage;
      }
    } else if (name === "email" && !regex.value) {
      setErrorMessage("Please enter a valid email address.");
      return errorMessage;
    }
  };

  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    post: 2525,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_API_KEY,
    },
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    let message = {
      from: formState.email,
      to: process.env.EMAIL,
      subject: `Greetings from ${formState.firstName}`,
      text: `A message from ${formState.firstName} ${formState.lastName}: ${formState.message}`,
    };

    try {
      transporter.sendEmail(message)
    } catch(e) {
      console.log("::FORM HANDLING WILL BE SET UP AT A LATER TIME:::");
    }
  };

  return (
    <section className="contact-container flex-row">
      <h2 className="primary-section-title">// Contact //</h2>
      <form
        className="contact-form flex-row"
        onSubmit={handleFormSubmit}
      >
        <div>
        <div>
          <label htmlFor="first name">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="first name"
            onBlur={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="last name">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="last name"
            onBlur={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onBlur={handleChange}
          ></input>
        </div>
        </div>
        <div>
          <label htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            type="text"
            name="message"
            rows="8"
            columns="40"
            onBlur={handleChange}
          ></textarea>
        </div>
        <div>
        <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
