import React, { Suspense } from "react";
import { json, useRouteLoaderData } from "react-router-dom";

// importing styles
import styles from "./MealView.module.css";

const MealView = () => {
  const mealData = useRouteLoaderData("mealId");
  const discount = mealData.price - (mealData.price * 10) / 100;

  return (
    <article className={styles["meal__view-container"]}>
      <Suspense fallback={<p>Loading...</p>}>
        <div className={styles["meal__view-image"]}>
          <img src={mealData.image} alt={mealData.name} />
          <p className={styles["meal__category"]}>
            Category: <span>{mealData.category}</span>
          </p>
        </div>
        <div className={styles["about__meal-container"]}>
          <div className={styles["about__meal"]}>
            <h2>{mealData.name}</h2>
            <p>{mealData.description}</p>
            <div>
              <p>N{discount}</p>
              <p className={styles["meal__oiginal-price"]}>N{mealData.price}</p>
            </div>
            <button className={styles["add__button"]}>Add to cart</button>
          </div>

          {/* how to order */}
          <div className={styles["order__guidelines"]}>
            <h3>How to Order</h3>
            <ul className={styles["guidelines__list"]}>
              <li>Click the Add to Cart buttom above</li>
              <li>
                Click <strong>CART</strong> on navigation menu
              </li>
              <li>Click Comfirm orders</li>
              <li>
                Verify Your details and click <strong>confirm</strong>
              </li>
              <li>Click Proceed to checkout</li>
            </ul>
          </div>
        </div>
      </Suspense>
    </article>
  );
};

export default MealView;
// using react-router loader function to fetch a meal data based on the id of the clicked meal
export const loader = async ({ params }) => {
  const mealId = params.mealId;
  const response = await fetch(
    `https://foodease-backend-default-rtdb.firebaseio.com/meals/african/${mealId}.json`
  );

  if (!response.ok) {
    throw json({ message: "could not find data" }, { status: 500 });
  } else {
    const mealData = await response.json();
    return mealData;
  }
};
