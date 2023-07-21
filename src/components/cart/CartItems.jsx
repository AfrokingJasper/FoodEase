import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";

import styles from "./Cart.module.css";

const CartItems = ({ cartItems }) => {
  const dispatch = useDispatch();
  const { name, image, quantity, totalPrice, totalDiscountPrice } = cartItems; // destrucuting the cart items gotten from the original cart-slice

  const addToCartHander = () => {
    // adds the items passed in to the cart
    dispatch(cartAction.addToCart(cartItems));
  };

  const reomveFromCartHandler = () => {
    // removed the items whose name matches the passed in parameter
    dispatch(cartAction.removeFromCart(name));
  };

  return (
    <li className={styles["cart__item"]}>
      {/* cart item top */}
      <div className={styles["cart__item-content"]}>
        <div className={styles["cart__item-img"]}>
          <img src={image} alt={name} />
        </div>
        <div className={styles["cart__item-title"]}>
          <p>{name}</p>
          <div>
            <p>N{totalDiscountPrice}</p>
            <p style={{ textDecoration: "line-through" }}>N{totalPrice}</p>
          </div>
        </div>
      </div>
      {/* cart item bottom */}
      <div className={styles["cart__item-totals"]}>
        <p>
          x <strong>{quantity}</strong>
        </p>

        <div className={styles["cart__item-button"]}>
          <button onClick={reomveFromCartHandler}>-</button>
          <button onClick={addToCartHander}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
