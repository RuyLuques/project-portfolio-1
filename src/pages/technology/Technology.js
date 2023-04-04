import React from "react";
import {
  faReact,
  faHtml5,
  faCss3,
  faVuejs,
  faDocker,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../components/portfolio/styles/Portfolio.css";
import "./styles/Technology.css";

const Technology = () => {
  return (
    <>
      <div id="technology">
        <div className="container-technology">
          <h2 className="content-title">Technology</h2>
          <div className="content-technology">
            <div className="icon-tech" title="React">
              <FontAwesomeIcon icon={faReact} size="5x" />
            </div>
            <div className="icon-tech" title="HTML5">
              <FontAwesomeIcon icon={faHtml5} size="5x" />
            </div>
            <div className="icon-tech" title="CSS3">
              <FontAwesomeIcon icon={faCss3} size="5x" />
            </div>
            <div className="icon-tech" title="Vue.js">
              <FontAwesomeIcon icon={faVuejs} size="5x" />
            </div>
            <div className="icon-tech" title="Docker">
              <FontAwesomeIcon icon={faDocker} size="5x" />
            </div>
            <div className="icon-tech" title="Figma">
              <FontAwesomeIcon icon={faFigma} size="5x" />
            </div>
            <div className="icon-tech" title="Database">
              <FontAwesomeIcon icon={faDatabase} size="5x" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
