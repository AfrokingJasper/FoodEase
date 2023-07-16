import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const MobileNavs = ({ cartQuantity }) => {
  return (
    <nav className={styles["mobile__nav"]}>
      <ul className={styles["mobile__nav-list"]}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? styles["active__mobile-nav"]
                : styles["mobile__nav-links"]
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? styles["active__mobile-nav"]
                : styles["mobile__nav-links"]
            }
          >
            Cart <span className={styles["cart__item"]}>{cartQuantity}</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? styles["active__mobile-nav"]
                : styles["mobile__nav-links"]
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? styles["active__mobile-nav"]
                : styles["mobile__nav-links"]
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavs;
