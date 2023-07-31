import React from "react";
import { Link } from "react-router-dom";

// importing styles
import styles from "./HeroIntro.module.css";

const HeroIntro = () => {
  return (
    <div className={styles["background__image"]}>
      <div className={styles.overlay}></div>
      <div className={styles["hero__content"]}>
        <h1 className={styles["hero__intro"]}>
          Feast your senses on a world of flavors. Introducing FOODEASE, the
          easiest way to order delicious food online.
        </h1>
        <div className={styles["button__container"]}>
          <Link to="/about">Learn More</Link>
          <a href="#menu">Order Now</a>
        </div>
      </div>
    </div>
  );
};

export default HeroIntro;
