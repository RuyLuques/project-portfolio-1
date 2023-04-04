import React, { useState, useEffect } from "react";
import axios from "axios";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Error from "../../components/error/404/Error";
import "../../components/portfolio/styles/Portfolio.css";
import "./styles/Contact.css";

function Contact() {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    axios
      .post("https://2-ruyluques.vercel.app/contact", formData)
      .then((response) => {
        setMessage("Your message has been sent :)");
      })
      .catch((error) => {
        console.log(error.response.data);
        setMessage("There was an error. Please try again later.");
      });
  };

  useEffect(() => {
    axios
      .get("https://2-ruyluques.vercel.app/contact")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <Error />;
  }

  return (
    <>
      <div id="contact">
        <div className="container-form">
          <form onSubmit={handleSubmit}>
            <h2 className="content-title">Form Contact</h2>
            <div className="content-form">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
              <button className="btn-send" type="submit">
                <FontAwesomeIcon icon={faPaperPlane} size="1x"/>
              </button>
            </div>
            <p>{message}</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
