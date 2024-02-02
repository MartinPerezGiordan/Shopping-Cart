import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./ProductCard.css";

const ProductCard = ({ product, onListAdd }) => {
  const { title, price, image, category, rating } = product;

  const handleClick = () => {
    console.log(product);
    const productToAdd = { ...product, isRemoved: false };
    console.log(productToAdd);
    onListAdd(productToAdd);
    alert("Added " + productToAdd.title + " to the Shopping Cart");
  };

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-details">
        <div className="product-info">
          <p className="product-category">{category}</p>
          <h3 className="product-name">{title}</h3>
          <div className="product-rating">
            {Array.from({ length: rating.rate }, (_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="star-icon"
              />
            ))}
            <p>{rating.rate}</p>
          </div>
        </div>
        <div className="product-down-info">
          <p className="product-price">${price.toFixed(2)}</p>
          <button onClick={handleClick} className="add-to-cart-button">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
