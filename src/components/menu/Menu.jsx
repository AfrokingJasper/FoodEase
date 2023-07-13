import React from "react";
import styles from "./Menu.module.css";
import AfricanMeals from "./african/AfricanMeals";

const Menu = () => {
  return (
    <section className={styles["menu__section"]}>
      <h1>FOODEASE MENU</h1>
      <AfricanMeals />
    </section>
  );
};

export default Menu;
