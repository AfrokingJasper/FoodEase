import React, { useRef } from "react";
import styles from "./HeroSearch.module.css";

const HeroSearch = () => {
  const searchInputRef = useRef();

  const searchFormHandler = (event) => {
    event.preventDefault();
    const enteredInput = searchInputRef.current.value;

    console.log(enteredInput);
  };

  return (
    <div className={styles["hero__search-container"]}>
      <form onSubmit={searchFormHandler} className={styles["search__form"]}>
        <label htmlFor="search">FIND YOUR FAVORITE MEALS</label>
        <div className={styles["search__input-container"]}>
          <input id="search" type="text" ref={searchInputRef} />
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default HeroSearch;
