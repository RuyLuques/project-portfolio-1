import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "../../portfolio/navbar/Navbar";
import "../styles/Ecommerce.css";

const CartAdd = ({ serviceId }) => {
  const [service, setService] = useState(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(
          `https://2-ruyluques.vercel.app/services/items`
        );
        const foundService = response.data.find(
          (item) => item.id === serviceId
        );
        setService(foundService);
      } catch (error) {
        console.error(error);
      }
    };
    fetchService();
  }, [serviceId]);

  const handleAddToCart = async () => {
    if (service) {
      setIsAddingToCart(true);
      try {
        const response = await axios.post(
          "https://2-ruyluques.vercel.app/services",
          service
        );
        setIsAddingToCart(false);
      } catch (error) {
        console.error(error);
        setIsAddingToCart(false);
      }
    }
  };

  return (
    <>
      {service ? (
        <FontAwesomeIcon
          className="icon-cartAdd"
          title="add to cart"
          icon={faCartPlus}
          size="2x"
          onClick={handleAddToCart}
          style={{ cursor: isAddingToCart ? "not-allowed" : "pointer" }}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default CartAdd;
