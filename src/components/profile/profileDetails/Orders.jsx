import React from "react";

// importing styels
import styles from "./Order.module.css";

const Orders = ({ orderData }) => {
  return (
    <ul className={styles["order__container"]}>
      {orderData.map((item, index) => (
        <li key={index} className={styles["cart__item"]}>
          {/* cart item top */}
          <div className={styles["cart__item-content"]}>
            <div className={styles["cart__item-img"]}>
              <img src={item.image} alt="img" />
            </div>
            <div className={styles["cart__item-title"]}>
              <p>{item.name}</p>
              <div>
                <p>N{item.discountPrice}</p>
                <p style={{ textDecoration: "line-through" }}>N{item.price}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Orders;
