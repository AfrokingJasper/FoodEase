import React from "react";
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
          <button>Learn More</button>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroIntro;
