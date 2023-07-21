import React from "react";
import styles from "./AccountOverview.module.css";

const AccountOverview = () => {
  return (
    <>
      <h3>Account Overview</h3>
      <div className={styles["overview__container"]}>
        <div className={styles["overview__details-container"]}>
          <p className={styles["account"]}>Account Details</p>
          <div className={styles["account__details"]}>
            <p>Fortune Oliseyenum</p>
            <p className={styles.email}>fortuneoliseyenum12@gmail.com</p>
          </div>
        </div>
        <div className={styles["overview__details-container"]}>
          <p className={styles["account"]}>Adress Book</p>
          <div className={styles["account__details"]}>
            <div>Your default address:</div>
            <div className={styles.details}>
              <p>Fortune Oliseyenum</p>
              <p>Lagos State</p>
              <p>+2349060955362</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountOverview;
