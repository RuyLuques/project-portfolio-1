import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "../../components/settings/error/Error";
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
        setMessage("Your message has been sent!");
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
      <div className="container-form">
        <form onSubmit={handleSubmit}>
          <h2>FORM CONTACT</h2>
          <div className="content-form">
            <input type="text" placeholder="Your Name" name="name" required />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
            <input
              className="message"
              placeholder="Your Message"
              name="message"
              required
            />
          </div>
          <button type="submit">send</button>
          <p>{message}</p>
        </form>
      </div>
    </>
  );
}

export default Contact;
