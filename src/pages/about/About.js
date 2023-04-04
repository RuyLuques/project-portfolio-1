import React, { useState } from "react";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../components/portfolio/aboutModal/AboutModal";
import "../../components/portfolio/styles/Portfolio.css";
import "./styles/About.css";

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState([]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const titles = document.querySelectorAll(".title");

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.target.style.backgroundPosition = `${x}px ${y}px`;
  };

  titles.forEach((title) => {
    title.addEventListener("mousemove", handleMouseMove);
    title.addEventListener("mouseleave", () => {
      title.style.backgroundPosition = "center";
    });
  });

  return (
    <>
      <div id="about">
        <div className="container-about">
          <div className="content-about">
            <div className="content-img">
              <img
                className="card-img"
                src="https://picsum.photos/100/100"
                alt={item.image}
              />
            </div>
            <div className="content-about-title">
              <h1 className="about-title">I'am Ruy Luques</h1>
              <h2 className="about-title">Developer Frontend</h2>
              <FontAwesomeIcon
                className="icon-about"
                size="2x"
                title="contact"
                icon={faMugSaucer}
                onClick={() => setShowModal(true)}
              />
            </div>
            <Modal show={showModal} handleClose={handleCloseModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
