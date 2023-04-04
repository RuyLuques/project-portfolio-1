import React from "react";
import "./styles/Freight.css";
import "../styles/Ecommerce.css"

const Freight = () => {
  return (
    <div className="container-freight">
      <div className="content-freight">
        <label className="" htmlFor="zip-code">Freight:</label>
        <input type="text" id="zip-code" />
      </div>
    </div>
  );
};

export default Freight;
