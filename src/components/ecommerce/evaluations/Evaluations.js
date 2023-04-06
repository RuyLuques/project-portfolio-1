import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./styles/Evaluations.css";
import "../styles/Ecommerce.css";

const Evaluations = () => {
  const [stars, setStars] = useState([...Array(5)].map(() => false));

  return (
    <>
      <div className="container-evaluations">
        <div className="content-evaluations">
          <h2>Evaluations:</h2>
          <div className="icon-evaluation">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                className="icon-star"
                size="1x"
                icon={faStar}
                color={stars[index] ? "gold" : "gray"}
                onClick={() => {
                  const newStars = [...stars];
                  newStars[index] = !newStars[index];
                  setStars(newStars);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Evaluations;
