import React from "react";
import styles from "./HeroSearch.module.css";

const HeroSearch = () => {
  return (
    <div className={styles["hero__search-container"]}>
      <form className={styles["search__form"]}>
        <label htmlFor="search">FIND YOUR FAVORITE MEALS</label>
        <div className={styles["search__input-container"]}>
          <input id="search" type="text" />
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default HeroSearch;
