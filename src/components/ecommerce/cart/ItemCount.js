import React from "react";
import PropTypes from "prop-types";
import "../styles/Ecommerce.css"

const ItemCount = ({ count }) => (
  <div className="circle-icons">
    <span className="icon-text">{count}</span>
  </div>
);

ItemCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default ItemCount;
