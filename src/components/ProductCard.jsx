import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./ProductCard.css";

const ProductCard = ({ product, onListChange }) => {
  const { title, price, image, category } = product;
  const random = Math.random();
  const rating = Math.floor(random * 5) + 1;

  const handleClick = () => {
    const productToAdd = { ...product, isRemoved: false };
    console.log(productToAdd);
    onListChange(productToAdd);
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
            {Array.from({ length: rating }, (_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="star-icon"
              />
            ))}
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
