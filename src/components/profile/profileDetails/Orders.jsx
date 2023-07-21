import React from "react";
import img from "../../../assets/background-image-1.jpg";
// import styles from "../../cart/Cart.module.css";
import styles from "./Order.module.css";

const Orders = () => {
  return (
    <ul className={styles["order__container"]}>
      <li className={styles["cart__item"]}>
        {/* cart item top */}
        <div className={styles["cart__item-content"]}>
          <div className={styles["cart__item-img"]}>
            <img src={img} alt="img" />
          </div>
          <div className={styles["cart__item-title"]}>
            <p>Fufu and Egusi soup</p>
            <div>
              <p>N2000</p>
              <p style={{ textDecoration: "line-through" }}>N2000</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Orders;
