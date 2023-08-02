import React, { useEffect, useState } from "react";

// importing styels
import styles from "./Order.module.css";

const Orders = ({ orderData }) => {
  const [orders, setOrders] = useState([]);

  // console.log(orders);
  return (
    <ul className={styles["order__container"]}>
      {/* {orders.map((item, index) => (
        <li key={index} className={styles["cart__item"]}>
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
      ))} */}
      <li>
        <h1>Coming soon</h1>
      </li>
    </ul>
  );
};

export default Orders;

//  {/* cart item top */}
