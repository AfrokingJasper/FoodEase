import React from "react";
import styles from "./Cta.module.css";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className={styles.cta}>
      <h2>New to FOODEASE? </h2>
      <Link to="/login" className={styles.button}>
        SignUp
      </Link>
    </div>
  );
};

export default Cta;
