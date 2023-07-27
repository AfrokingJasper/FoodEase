import React, { useEffect, useState } from "react";
import MealsList from "./MealsList";
import { authAction } from "../../../store/auth-slice";
import { useDispatch } from "react-redux";

// importing styles
import styles from "./AfricanMeals.module.css";

const AfricanMeals = () => {
  const [meals, setMeals] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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
          throw new Error("Failed to fetch meals");
        }

        const foodData = await response.json();

        // looping and storing the fetched meals in a new const (loadedMeals)
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
      } catch (err) {
        setLoading(false); //changing the loading state to false to remove the loading spinner
        setErrorMessage(err.message);
        dispatch(
          authAction.setError(
            "Could not fetch meals! Please check you network connection"
          )
        ); // dispatching error to the modal
      }
    };

    fetchMeals();
  }, [dispatch]);

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
