import React from "react";
import styles from "./Footer.module.css";
import Cta from "./Cta";
import { FaBowlFood } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Cta />
      <nav className={styles["footer__nav"]}>
        <ul className={styles["footer__nav-links"]}>
          <li>
            <Link to="./about">About</Link>
          </li>
          <li>
            <a href="#some">How to Order</a>
          </li>
          <li>
            <a href="#some">Delivery Locations</a>
          </li>
          <li>
            <a href="#some">FAQ</a>
          </li>
          <li>
            <a href="#some">Contact Us</a>
          </li>
        </ul>
        <div className={styles.logo}>
          <h2>FOODEASE</h2>
          <span>
            <FaBowlFood />
          </span>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
