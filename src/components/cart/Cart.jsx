import React from "react";
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";
import CartItems from "./CartItems";

const Cart = () => {
  // getting the items inside the cart from the store
  const cartItems = useSelector((state) => state.cart.items);
  let totals = 0;
  for (const key in cartItems) {
    totals += cartItems[key].totalDiscountPrice; // calculating the total price of items in the cart
  }

  return (
    <section className={styles["cart__section"]}>
      <h1 className={styles["cart__header"]}>Your Shopping Cart</h1>
      {cartItems.length === 0 && (
        <p className={styles["cart__header"]}>Your cart is empty</p>
      )}

      {/* list of items inside the cart */}
      <ul className={styles["cart__items"]}>
        {cartItems.map((items) => (
          <CartItems key={items.name} cartItems={items} />
        ))}
      </ul>
      {cartItems.length > 0 && (
        <p>
          Total: <span>{totals}</span>
        </p>
      )}
      {cartItems.length > 0 && (
        <button className={styles["checkout__button"]}>
          Proceed to Checkout
        </button>
      )}
    </section>
  );
};

export default Cart;
