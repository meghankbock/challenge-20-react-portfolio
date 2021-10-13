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

    if (name == "first name" || name == "last name") {
      if (!value) {
        setErrorMessage(`Please provide your ${name}`);
        return errorMessage;
      }
    } else if (name == "email" && !regex.value) {
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

    message = {
      from: { $email },
      to: process.env.EMAIL,
      subject: `Greetings from ${formState.firstName}`,
      text: `A message from ${formState.firstName} ${formState.lastName}: ${formState.message}`,
    };

    transporter.sendEmail(message, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  };

  return (
    <section className="contact-container">
      <span>
        <h2>Contact Me</h2>
      </span>
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <div>
          <label className="form-label" for="first name">
            First Name:
          </label>
          <input
            className="form-input"
            type="text"
            id="firstName"
            name="first name"
            onBlur={handleChange}
          ></input>
        </div>
        <div>
          <label className="form-label" for="last name">
            Last Name:
          </label>
          <input
            className="form-input"
            type="text"
            id="lastName"
            name="last name"
            onBlur={handleChange}
          ></input>
        </div>
        <div>
          <label className="form-label" for="email">
            Email:
          </label>
          <input
            className="form-input"
            type="text"
            id="email"
            name="email"
            onBlur={handleChange}
          ></input>
        </div>
        <div>
          <label className="form-label" for="message">
            Message:
          </label>
          <input
            className="form-input"
            type="text"
            id="message"
            name="message"
            onBlur={handleChange}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
