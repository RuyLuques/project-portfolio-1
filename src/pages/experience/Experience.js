import React, { useState, useEffect } from "react";
import axios from "axios";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Error from "../../components/error/404/Error";
import "../../components/portfolio/styles/Portfolio.css";
import "./styles/Experience.css";

const Experience = () => {
  const [experience, setExperience] = useState([]);
  const [error, setError] = useState(false);
  const [showIndex, setShowIndex] = useState(-1); // add state for displaying info of specific item

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
                <img
                  className="img-experience"
                  src={`https://2-ruyluques.vercel.app/experience/img/${item.image}`}
                  alt={item.alt}
                />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {showIndex === index && (
                  <p>
                    <strong>{item.duration}</strong>
                  </p>
                )}

                <FontAwesomeIcon
                  className="icon-experience"
                  icon={faBusinessTime}
                  size="2x"
                  onClick={() => setShowIndex(showIndex === index ? -1 : index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
