import React, { useEffect, useState } from "react";
import styles from "./AfricanMeals.module.css";

const AfricanMeals = () => {
  const [meals, setMeals] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://foodease-backend-default-rtdb.firebaseio.com/meals.json"
      );

      const foodData = await response.json();

      const loadedMeals = [];
      for (const keys in foodData) {
        loadedMeals.push({
          id: keys,
          image: foodData[keys].image,
          name: foodData[keys].name,
          price: foodData[keys].price,
          discount: foodData[keys].price - (foodData[keys].price * 10) / 100,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);

  if (!meals) {
    return (
      <section /*className={styles.loadingState}*/>
        <p>LOADING...</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <li key={meal.id} className={styles.meal}>
      <article className={styles["meal__article"]}>
        <img src={meal.image} alt="meal" />

        {/* meals title container */}
        <div className={styles["meals__title-container"]}>
          <p className={styles["meal__title"]}>{meal.name}</p>

          {/* meals price container */}
          <div className={styles["meal__price-container"]}>
            <p className={styles["meal__price"]}>N{meal.discount}</p>
            <p className={styles["meal__oiginal-price"]}>N{meal.price}</p>
          </div>
        </div>
      </article>
    </li>
  ));

  return (
    <div className={styles["african__meals-container"]}>
      <h3>African Meals</h3>
      <div className={styles["african__meals"]}>
        {meals && <ul className={styles["meals__list"]}>{mealsList}</ul>}
      </div>
    </div>
  );
};

export default AfricanMeals;
