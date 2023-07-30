import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import { json, useRouteLoaderData } from "react-router-dom";

// importing styles
import styles from "./MealView.module.css";
import { authAction } from "../../store/auth-slice";

const MealView = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { mealData } = useRouteLoaderData("mealId"); // getting the mealData that was returned from teh loader function
  const discount = mealData.price - (mealData.price * 10) / 100;

  const addItemHandler = () => {
    if (!isLoggedIn) {
      dispatch(
        authAction.setError("Please Login to be able to access this feature")
      );
      return;
    }
    dispatch(cartAction.addToCart(mealData));
  };

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
            <button onClick={addItemHandler} className={styles["add__button"]}>
              Add to cart
            </button>
          </div>

          {/* how to order */}
          <div className={styles["order__guidelines"]}>
            <h3>How to Order</h3>
            <ul className={styles["guidelines__list"]}>
              <li>Click the Add to Cart buttom above</li>
              <li>
                Click <strong>CART</strong> on navigation menu
              </li>
              <li>Click Proceed to checkout</li>
              <li>
                Verify Your details and click <strong>Comfirm orders</strong>
              </li>
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
  const category = mealId.includes("a") ? "african" : "intercontinental";
  const response = await fetch(
    `https://foodease-backend-default-rtdb.firebaseio.com/meals/${category}/${mealId}.json`
  ); // fetching data and assigning it to response

  if (!response.ok) {
    throw json({ message: "could not find data" }, { status: 500 }); // throws an error if the data is not recieved
  } else {
    const mealData = await response.json();
    return { mealData, mealId };
  }
};
