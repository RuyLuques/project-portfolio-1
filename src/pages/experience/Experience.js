import React, { useState, useEffect } from "react";
import axios from "axios";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Error from "../../components/settings/error/Error";
import "../../components/portfolio/styles/Portfolio.css";
import "./styles/Experience.css";

const Experience = () => {
  const [experience, setExperience] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://2-ruyluques.vercel.app/experience`)
      .then((response) => {
        setExperience(Object.values(response.data));
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
      <div id="experience">
        <div className="container-experience">
          <h2 className="content-title">Experience</h2>
          <div className="content-experience">
            {experience.map((item, index) => (
              <div className="card-experience" key={index}>
                <FontAwesomeIcon
                  className="icon"
                  icon={faPeopleGroup}
                  size="3x"
                />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
