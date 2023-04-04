import React, { useState, useEffect } from "react";
import axios from "axios";
import Error from "../../components/settings/error/Error";
import CartAdd from "../../components/ecommerce/cart/CartAdd";
import "../../components/portfolio/styles/Portfolio.css";
import "./styles/Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://2-ruyluques.vercel.app/services/items`)
      .then((response) => {
        setServices(Object.values(response.data));
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
      <div>
        <div className="container-services">
          <h2 className="content-title-services">Services</h2>
          <div className="content-services">
            {services.map((item, index) => (
              <div className="card-services" key={index}>
                <img
                  className="card-media"
                  src="https://picsum.photos/100/100"
                  alt={item.title}
                />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <div className="informations">
                  <CartAdd serviceId={item.id} />
                  <span>Promoção</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
