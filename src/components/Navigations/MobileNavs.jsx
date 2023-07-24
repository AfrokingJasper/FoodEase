import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const MobileNavs = ({ cartQuantity }) => {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);

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
        {!loggedIn && (
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
        )}
      </ul>
    </nav>
  );
};

export default MobileNavs;
