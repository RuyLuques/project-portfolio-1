import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/Ecommerce.css";

const CartItems = ({ cart }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://2-ruyluques.vercel.app/services");
        setItems(response.data);
      } catch (error) {}
    };
    fetchData();
  }, [cart]);

  return (
    <section>
      <div>
        <a className="icon-cart" href="/ecommerce">
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
        </a>
      </div>
    </section>
  );
};

export default CartItems;
