import React from "react";
import styles from "./Menu.module.css";
import AfricanMeals from "./african/AfricanMeals";
import IntercontinentalMeals from "./intercontinantal/IntercontinentalMeals";

const Menu = () => {
  return (
    <section id="menu" className={styles["menu__section"]}>
      <h1>FOODEASE MENU</h1>
      <AfricanMeals />
      <IntercontinentalMeals />
    </section>
  );
};

export default Menu;
