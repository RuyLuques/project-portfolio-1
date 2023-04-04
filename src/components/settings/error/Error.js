import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import "./styles/Error.css";

const Error = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000");
        setData(response.data);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <>
        <div className="container-error">
          <div className="content-error">
            <FontAwesomeIcon icon={faSadTear} size="3x" color="#ffc700" />
            <FontAwesomeIcon icon={faSadTear} size="3x" color="#ffc700" />
            <FontAwesomeIcon icon={faSadTear} size="3x" color="#ffc700" />
          </div>
          <h2>ERROR 404</h2>
          <p>
            Oops, something went wrong! It looks like our servers are taking a
            nap, please try again later.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Success</h1>
    </>
  );
};

export default Error;
