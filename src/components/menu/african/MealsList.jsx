import React from "react";
import styles from "./MealsList.module.css";
import { NavLink } from "react-router-dom";

const MealsList = (props) => {
  return (
    <NavLink to={`${props.id}`} className={styles.meal}>
      <article className={styles["meal__article"]}>
        <img src={props.image} alt="meal" />

        {/* meals title container */}
        <div className={styles["meals__title-container"]}>
          <p className={styles["meal__title"]}>{props.name}</p>

          {/* meals price container */}
          <div className={styles["meal__price-container"]}>
            <p className={styles["meal__price"]}>N{props.discount}</p>
            <p className={styles["meal__oiginal-price"]}>N{props.price}</p>
          </div>
        </div>
      </article>
    </NavLink>
  );
};

export default MealsList;
