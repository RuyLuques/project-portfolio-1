import React, { useState, useEffect } from "react";
import axios from "axios";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Error from "../../components/settings/error/Error";
import "../../components/portfolio/styles/Portfolio.css";
import "./styles/Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(false);
  const [isFlipped, setIsFlipped] = useState([]);

  useEffect(() => {
    axios
      .get(`https://2-ruyluques.vercel.app/skills`)
      .then((response) => {
        setSkills(Object.values(response.data));
        setIsFlipped(new Array(Object.values(response.data).length).fill(false));
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const flipCard = (index) => {
    setIsFlipped((prevIsFlipped) => {
      if (Array.isArray(prevIsFlipped)) {
        return prevIsFlipped.map((item, i) => (i === index ? !item : item));
      } else {
        return prevIsFlipped;
      }
    });
  };

  if (error) {
    return <Error />;
  }

  return (
    <div className="skills-section">
      <div className="container-skills">
      <h2 className="content-title">Skills</h2>
        <div className="content-skills">
          {skills.map((item, index) => (
            <div
              className={`card-skills ${isFlipped[index] ? "flipped" : ""}`}
              key={index}
              onClick={() => flipCard(index)}
            >
              <div className="card-front">
                <FontAwesomeIcon className="icon-front" icon={faRocket} />
                <h3>{item.title}</h3>
              </div>
              <div className="card-back">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
