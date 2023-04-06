import React, { useState, useEffect } from "react";
import axios from "axios";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Error from "../../components/error/404/Error";
import "../../components/portfolio/styles/Portfolio.css";
import "./styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://2-ruyluques.vercel.app/projects`)
      .then((response) => {
        setProjects(Object.values(response.data));
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
      <div id="projects">
        <div className="container-projects">
          <h2 className="content-title">Projects</h2>
          <div className="content-projects">
            {projects.map((item, index) => (
              <div className="card-projects" key={index}>
                <img
                  className="img-projects"
                  src={`https://2-ruyluques.vercel.app/projects/img/${item.image}`}
                  alt={item.alt}
                />
                <h2>{item.title}</h2>
                <p>
                  <strong>{item.description}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
