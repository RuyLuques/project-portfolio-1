import React, { useState } from "react";
import CartItems from "../../pages/cartItems/CartItems";
import Freight from "./freight/Freight";
import OptionsPayment from "./optionsPayment/OptionsPayment";
import Payment from "./payment/Payment";
import TypesServices from "./typesServices/TypesServices";
import Evaluations from "./evaluations/Evaluations";

const Ecommerce = () => {
  const [items, setItems] = useState([]);

  return (
    <>
      <div className="container-ecommerce">
        <div className="content-ecommerce">
          <div className="content-products">
            <CartItems
              shoppingCartItems={items}
              setShoppingCartItems={setItems}
            />
          </div>
          <div className="content-payments">
            <TypesServices />
            <Evaluations />
            <Payment />
            <OptionsPayment />
            <Freight />
            <div className="btn-ecommerce">
              <button>BUY</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
