import React from "react";
import styles from "./AfricanMeals.module.css";
import img from "../../assets/background-image-1.jpg";

const mealsList = [
  {
    id: 1,
    name: "First African Meal",
    price: 23445,
  },
  {
    id: 2,
    name: "First African Meal",
    price: 23445,
  },
  {
    id: 3,
    name: "First African Meal",
    price: 23445,
  },
  {
    id: 4,
    name: "First African Meal",
    price: 23445,
  },
  {
    id: 5,
    name: "First African Meal",
    price: 23445,
  },
  {
    id: 6,
    name: "First African Meal",
    price: 23445,
  },
  {
    id: 7,
    name: "First African Meal",
    price: 23445,
  },
  {
    id: 8,
    name: "First African Meal",
    price: 23445,
  },
];

const AfricanMeals = () => {
  return (
    <div className={styles["african__meals-container"]}>
      <h3>African Meals</h3>
      <div className={styles["african__meals"]}>
        <ul className={styles["meals__list"]}>
          {/* meals lists */}
          {mealsList.map((meals) => (
            <li key={meals.id} className={styles.meal}>
              <article className={styles["meal__article"]}>
                <img src={img} alt="meal" />

                {/* meals title container */}
                <div className={styles["meals__title-container"]}>
                  <p className={styles["meal__title"]}>First African Meal</p>

                  {/* meals price container */}
                  <div className={styles["meal__price-container"]}>
                    <p className={styles["meal__price"]}>N3344</p>
                    <p className={styles["meal__oiginal-price"]}>N1234</p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AfricanMeals;
