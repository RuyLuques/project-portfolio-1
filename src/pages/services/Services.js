import React, { useState, useEffect } from "react";
import axios from "axios";
import CartAdd from "../../components/ecommerce/cart/CartAdd";
import Error from "../../components/error/404/Error";
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
      <div id="services">
        <div className="container-services">
          <h2 className="content-title-services">Services</h2>
          <div className="content-services">
            {services.map((item, index) => (
              <div className="card-services" key={index}>
                <div className="card-media">
                  <h3>ECOMMERCE</h3>
                </div>
                <div className="card-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <p>
                    <strong>R$: {item.price}</strong>
                  </p>
                 
                </div>
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
