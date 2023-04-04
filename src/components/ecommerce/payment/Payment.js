import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Payment.css";
import "../styles/Ecommerce.css";

const Payment = () => {
  const [payment, setPayment] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios.get("https://2-ruyluques.vercel.app/services").then((response) => {
      setPayment(response.data);
      const total = response.data.reduce((acc, curr) => acc + curr.price, 0);
      setTotalPrice(total);
    });
  }, []);

  return (
    <div className="container-payment">
      <div className="content-payment">
        <h2>Payment: </h2>
        {payment.map((service) => (
          <div className="card-payment" key={service.id}>
            <p>
              <strong>Price: </strong>R${service.price}
            </p>
          </div>
        ))}
        <p>
          <strong>Total price: {totalPrice}</strong>
        </p>
      </div>
    </div>
  );
};

export default Payment;
