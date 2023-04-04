import React, { useState, useEffect } from "react";
import axios from "axios";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Error from "../../components/error/404/Error";
import "../../components/portfolio/styles/Portfolio.css";
import "./style/Education.css";

const Education = () => {
  const [education, setEducation] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://2-ruyluques.vercel.app/education`)
      .then((response) => {
        setEducation(Object.values(response.data));
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
      <div id="education">
        <div className="container-education">
          <h2 className="content-title">Education</h2>
          <div className="content-education">
            {education.map((item, index) => (
              <div className="card-education" key={index}>
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

export default Education;
