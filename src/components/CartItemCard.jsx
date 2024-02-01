import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./CartItemCard.css";

function CartItemCard({ item, onListAdd, onListRemove }) {
  const handleRemove = () => {
    if (onListRemove) {
      onListRemove(item);
    }
  };

  const handleAdd = () => {
    if (onListAdd) {
      onListAdd(item);
    }
  };

  return (
    <div className="cart-item-card">
      <img src={item.image} alt={item.title} />
      <div className="info">
        <h3>{item.title}</h3>
        <h3>
          ${item.price} x {item.quantity} = ${item.price * item.quantity}
        </h3>
      </div>

      <div className="options">
        <FontAwesomeIcon
          onClick={handleRemove}
          className="minus-icon cart-icon"
          icon={faMinus}
        />
        <h3>{item.quantity}</h3>
        <FontAwesomeIcon
          className="plus-icon cart-icon"
          icon={faPlus}
          onClick={handleAdd}
        />
      </div>
    </div>
  );
}

export default CartItemCard;
