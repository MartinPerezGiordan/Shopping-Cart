import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./CartItemCard.css";
function CartItemCard({ item }) {
  return (
    <div className="cart-item-card">
      <img src={item.image} alt={item.title} />
      <div className="info">
        <h3>{item.title}</h3>
        <h1>${item.price}</h1>
      </div>

      <div className="options">
        <FontAwesomeIcon className="minus-icon cart-icon" icon={faMinus} />
        <h3>1</h3>
        <FontAwesomeIcon className="plus-icon cart-icon" icon={faPlus} />
      </div>
      <FontAwesomeIcon className="trash-icon cart-icon" icon={faTrash} />
    </div>
  );
}

export default CartItemCard;
