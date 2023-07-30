import React from "react";

// importing styles
import styles from "./Error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles["section__header"]}>Error</h1>
      <p>Page not found</p>
      <Link to="/" style={{ color: "black" }}>
        Back to Home
      </Link>
    </section>
  );
};

export default Error;
