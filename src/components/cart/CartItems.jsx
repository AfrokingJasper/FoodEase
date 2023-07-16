import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";

import styles from "./Cart.module.css";

const CartItems = ({ cartItems }) => {
  const dispatch = useDispatch();
  const { name, image, discountPrice, price, quantity } = cartItems; // destrucuting the cart items gotten from the original cart-slice

  const addToCartHander = () => {
    dispatch(cartAction.addToCart(cartItems));
  };

  return (
    <li className={styles["cart__item"]}>
      {/* cart item top */}
      <div className={styles["cart__item-content"]}>
        <div className={styles["cart__item-img"]}>
          <img src={image} alt="img" />
        </div>
        <div className={styles["cart__item-title"]}>
          <p>{name}</p>
          <div>
            <p>N{discountPrice}</p>
            <p style={{ textDecoration: "line-through" }}>N{price}</p>
          </div>
        </div>
      </div>
      {/* cart item bottom */}
      <div className={styles["cart__item-totals"]}>
        <p>
          x <strong>{quantity}</strong>
        </p>

        <div className={styles["cart__item-button"]}>
          <button>-</button>
          <button onClick={addToCartHander}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
