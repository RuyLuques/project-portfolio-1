import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./styles/AboutModal.css";

const AboutModal = ({ show, handleClose, children }) => {
  const iconsRef = useRef([]);
  const [informations, setInformations] = useState([]);

  const modalRef = useRef();

  const handleCloseModal = (event) => {
    if (modalRef.current === event.target) {
      handleClose();
    }
  };

  const handleMouseOut = (index) => {
    if (iconsRef.current[index]) {
      iconsRef.current[index].classList.remove("hover");
    }
  };

  const handleMouseOver = (index) => {
    if (iconsRef.current[index]) {
      iconsRef.current[index].classList.add("hover");
    }
  };

  useEffect(() => {
    axios
      .get("https://2-ruyluques.vercel.app/informations")
      .then((response) => {
        setInformations(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Oops! Something went wrong while fetching information from server. Please try again later."
        );
      });
  }, []);

  return (
    <>
      <div
        className={`modal ${show ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        onClick={handleCloseModal}
        ref={modalRef}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={handleClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body d-flex justify-content-center align-items-center">
              {children}
              {informations.length > 0 &&
                informations.map((person, index) => (
                  <div
                    className="modal-icons"
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseOut={() => handleMouseOut(index)}
                    ref={(ref) => (iconsRef.current[index] = ref)}
                    key={index}
                  >
                    <div className="icon-container">
                      <FontAwesomeIcon
                        className="icon-modal"
                        icon={faUser}
                        size="2x"
                      />
                      <span>{person.name}</span>
                    </div>
                    <div className="icon-container">
                      <FontAwesomeIcon
                        className="icon-modal"
                        icon={faMapMarkerAlt}
                        size="2x"
                      />
                      <span>{person.address}</span>
                    </div>
                    <div className="icon-container">
                      <FontAwesomeIcon
                        className="icon-modal"
                        icon={faEnvelope}
                        size="2x"
                      />
                      <span>{person.email}</span>
                    </div>
                    <div className="icon-container">
                      <a
                        href="https://www.linkedin.com/in/ruyluques/"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          className="icon-modal"
                          icon={faLinkedin}
                          size="2x"
                        />
                      </a>
                      <span>{person.linkedin}</span>
                    </div>
                    <div className="icon-container">
                      <a href="https://github.com/RuyLuques" target="_blank">
                        <FontAwesomeIcon
                          className="icon-modal"
                          icon={faGithub}
                          size="2x"
                        />
                      </a>
                      <span>{person.github}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutModal;
