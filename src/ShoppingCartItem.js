import React from "react";
import "./ShoppingCartItem.css";
import { useStateValue } from "./StateProvider";

function ShoppingCartItem({ id, title, price, image, rating, hideButton }) {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="shoppingCartItem" key={id}>
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
              <span role="img" key={i} aria-label="Star">
                ⭐
              </span>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket} className="product__button">
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default ShoppingCartItem;
