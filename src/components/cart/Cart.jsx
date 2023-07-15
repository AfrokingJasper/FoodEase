import React from "react";
import img from "../../assets/background-image-1.jpg";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <section className={styles["cart__section"]}>
      <h1 className={styles["cart__header"]}>Your Shopping Cart</h1>

      {/* list of items inside the cart */}
      <ul className={styles["cart__items"]}>
        <li className={styles["cart__item"]}>
          <div className={styles["cart__item-img"]}>
            <img src={img} alt="img" />
          </div>
          <div className={styles["item__info"]}>
            <div className={styles["cart__item-title"]}>
              <h2>Title Title</h2>
              <p>N1500</p>
            </div>

            <div className={styles["cart__item-totals"]}>
              <p>
                x <strong>10</strong>
              </p>

              <div className={styles["cart__item-button"]}>
                <button>-</button>
                <button>+</button>
              </div>
            </div>
          </div>
        </li>
        <li className={styles["cart__item"]}>
          <div className={styles["cart__item-img"]}>
            <img src={img} alt="img" />
          </div>
          <div className={styles["item__info"]}>
            <div className={styles["cart__item-title"]}>
              <h2>Title Title </h2>
              <p>N1500</p>
            </div>

            <div className={styles["cart__item-totals"]}>
              <p>
                x <strong>10</strong>
              </p>

              <div className={styles["cart__item-button"]}>
                <button>-</button>
                <button>+</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Cart;
