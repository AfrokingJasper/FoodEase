import React, { useEffect, useState } from "react";
import styles from "./AfricanMeals.module.css";
import MealsList from "./MealsList";

const AfricanMeals = () => {
  const [meals, setMeals] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  // fetching meals from the api,
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true); // changing the loading state to display a loading spinner
        const response = await fetch(
          "https://foodease-backend-default-rtdb.firebaseio.com/meals/african.json"
        );

        // checking for errors
        if (!response.ok) {
          // setErrorMessage(true);
          throw new Error("Failed to fetch meals.");
        }

        const foodData = await response.json();

        // storing the fetched meals in a new const (loadedMeals)
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
        setLoading(false);
        setMeals(loadedMeals); // setting the meals state to the loadedMeals
      } catch (error) {
        setLoading(false); //changing the loading state to false to remove the loading spinner
        setErrorMessage(error.message);
      }
    };

    fetchMeals();
  }, []);

  if (loading) {
    return (
      <section>
        <p>LOADING...</p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section /*className={styles.loadingState}*/>
        <p>{errorMessage}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealsList
      key={meal.id}
      id={meal.id}
      name={meal.name}
      image={meal.image}
      discount={meal.discount}
      price={meal.price}
    />
  ));

  return (
    <div className={styles["african__meals-container"]}>
      <h2>African Meals</h2>
      <div className={styles["african__meals"]}>
        {!loading && meals && (
          <ul className={styles["meals__list"]}>{mealsList}</ul>
        )}
      </div>
    </div>
  );
};

export default AfricanMeals;
