import React from "react";
import "./ShoppingCartItem.css";

function ShoppingCartItem({ id, title, price, image, rating }) {
  return (
    <div className="shoppingCartItem">
      <img className="shoppingCartItem__image" src={image} alt="" />
      <div className="shoppingCartItem__info">
        <p className="shoppingCartItem__title">{title}</p>
        <p className="shoppingCartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="shoppingCartItem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="Star">
                ⭐
              </span>
            ))}
        </div>
        <button className="product__button">Remove from Basket</button>
      </div>
    </div>
  );
}

export default ShoppingCartItem;