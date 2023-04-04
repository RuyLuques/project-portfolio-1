import React, { useState, useEffect } from "react";
import axios from "axios";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Error from "../../components/settings/error/Error";
import "../../components/portfolio/styles/Portfolio.css";
import "./styles/Projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/projects`)
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

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <>
      <div id="projects">
        <div className="container-projects">
          <h2 className="content-title" style={{color: "#fff"}}>Projects</h2>
          <div className="container-slider">
            <Slider {...settings}>
              {projects.map((item, index) => (
                <div className="content-projects" key={index}>
                  <div className="content-midia">
                    {item.video ? (
                      <video
                        className="img"
                        src={`http://localhost:4000/uploads/videos/${item.video}`}
                        type="video/mp4"
                        controls
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        className="img"
                        src={`http://localhost:4000/projects/img/${item.image}`}
                        alt={item.title}
                      />
                    )}
                    <div className="content-text">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faBriefcase}
                        size="3x"
                      />
                      <h3 className="title">{item.title}</h3>
                      <h4 className="description">{item.description}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
