import React from "react";
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";
import CartItems from "./CartItems";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  return (
    <section className={styles["cart__section"]}>
      <h1 className={styles["cart__header"]}>Your Shopping Cart</h1>

      {/* list of items inside the cart */}
      <ul className={styles["cart__items"]}>
        {cartItems.map((items) => (
          <CartItems key={items.name} cartItems={items} />
        ))}
      </ul>
    </section>
  );
};

export default Cart;
