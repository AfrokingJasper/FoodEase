import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const DesktopNavs = ({ cartQuantity }) => {
  // the destructured cartQuantity is coming from the header.jsx
  // it was originally gotten from the cartSlice created inside the store folder to monito state of teh cartQuantity
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav__list"]}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles["active__nav"] : styles["nav__links"]
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? styles["active__nav"] : styles["nav__links"]
            }
          >
            Cart <span className={styles["cart__item"]}>{cartQuantity}</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? styles["active__nav"] : styles["nav__links"]
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? styles["active__nav"] : styles["nav__links"]
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavs;
