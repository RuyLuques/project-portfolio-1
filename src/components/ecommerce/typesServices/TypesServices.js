import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/TypesServices.css";
import "../styles/Ecommerce.css";

const TypesTypes = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/services").then((response) => {
      setTypes(response.data);
    });
  }, []);

  return (
    <div className="container-typesServices">
      <div className="content-typesServices">
        <h2>Types Types:</h2>
        <p>
          <strong>Types: {types.length}</strong>
        </p>
        <ul>
          {types.map((service) => (
            <div key={service.id}>
              <p>
                <strong>{service.title}</strong> - {service.category}
              </p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TypesTypes;
