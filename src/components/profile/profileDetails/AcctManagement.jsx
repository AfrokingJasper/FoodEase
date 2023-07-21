import React from "react";
import styles from "./AcctManagement.module.css";

const AcctManagement = () => {
  return (
    <form className={styles["acct__management-form"]}>
      <div className={styles["management__input-container"]}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" placeholder="John Doe" />
      </div>
      <div className={styles["management__input-container"]}>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" placeholder="abc@gmail.com" />
      </div>
      <button className={styles["edit__button"]}>Edit</button>
    </form>
  );
};

export default AcctManagement;
