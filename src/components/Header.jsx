import React, { Fragment } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { FaBowlFood } from "react-icons/fa6";

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h2> Mamas-Recipe</h2>
          <span>
            <FaBowlFood />
          </span>
        </div>

        {/* navigations for laptop/deskyop screen */}
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
                Cart <span className={styles["cart__item"]}>0</span>
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
      </header>

      {/* navigations for mobile screen */}
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
              Cart <span className={styles["cart__item"]}>0</span>
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
    </Fragment>
  );
};

export default Header;
