import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./styles/CartItems.css";

const CartItems = () => {
  const [items, setItems] = useState([]);

  const handleQuantityChange = (id, newQuantity) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/services/${id}`);
      setItems((prevItems) => {
        const index = prevItems.findIndex((item) => item.id === id);
        if (index !== -1) {
          const newItems = [...prevItems];
          newItems[index].deleted = true;
          return newItems;
        } else {
          return prevItems;
        }
      });
    } catch (error) {
    }
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:4000/services");
        const itemsWithQuantity = response.data.reduce((acc, item) => {
          const existingItem = acc.find((i) => i.id === item.id);
          if (existingItem) {
            existingItem.quantity += 1;
          } else {
            acc.push({ ...item, quantity: 1 });
          }
          return acc;
        }, []);
        const filteredItems = itemsWithQuantity.filter((item) => !item.deleted);
        setItems(filteredItems.length ? filteredItems : []);

      } catch (error) {
      }
    };

    fetchCartItems();
  }, []);

  if (!items || items.length === 0) {
    return <p>Carrinho vazio</p>;
  }
  return (
    <>
      <section>
        <div className="container-items">
          {items.map((item) =>
            item.deleted ? null : (
              <div className="content-items" key={item.id}>
                <div className="cart-items">
                  <img src="https://picsum.photos/100/100" alt="Item 1" />
                  <div className="cart-item-details">
                    <div className="cart-item-content">
                      <p>
                        <strong>Id: </strong>
                        {item.id}
                      </p>
                      <p>
                        <strong>Service: </strong> {item.title}
                      </p>
                      <p>
                        <strong>Description: </strong>
                        {item.description}
                      </p>
                    </div>

                    <div className="cart-item-icons">
                      <div className="icon-remove">
                        <FontAwesomeIcon
                          className="icon-remove"
                          icon={faMinus}
                          size="1x"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                        />
                      </div>
                      <p className="icon-quantity">
                        <strong>{item.quantity}</strong>
                      </p>
                      <div className="icon-add">
                        <FontAwesomeIcon
                          className="icon-add"
                          icon={faPlus}
                          size="1x"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        />
                      </div>
                      <div className="icon-delete">
                        <FontAwesomeIcon
                          className="icon-delete"
                          size="1x"
                          icon={faXmark}
                          onClick={() => handleDeleteItem(item.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default CartItems;
