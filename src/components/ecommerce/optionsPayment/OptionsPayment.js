import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCreditCard,
  faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/OptionsPayment.css";
import "../styles/Ecommerce.css";

const Payment = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container-optionsPayment">
        <div className="content-optionsPayment">
          <h2 className="content-title-optionsPayment">
            <span onClick={toggleDropdown}>Options payment</span>
            <span onClick={toggleDropdown}>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`dropdown-icon ${isOpen ? "open" : "closed"}`}
              />
            </span>
          </h2>
          {isOpen && (
            <form>
              <div className="content-options">
                <input
                  type="radio"
                  id="credit-card"
                  name="payment-option"
                  value="credit-card"
                />
                <label className="options" htmlFor="credit-card">
                  Credit Card
                </label>
                <input
                  type="radio"
                  id="debit-card"
                  name="payment-option"
                  value="debit-card"
                />
                <label className="options" htmlFor="debit-card">
                  Debit Card
                </label>
                <input
                  type="radio"
                  id="paypal"
                  name="payment-option"
                  value="paypal"
                />
                <label className="options" htmlFor="paypal">
                  PayPal
                </label>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Payment;
