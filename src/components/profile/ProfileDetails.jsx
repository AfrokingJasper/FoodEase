import React from "react";
import styles from "./ProfileDetails.module.css";

const ProfileDetails = () => {
  return (
    <div className={styles["details__container"]}>
      <h3>Account Overview</h3>
      <div className={styles["overview__container"]}>
        <div className={styles["overview__details-container"]}>
          <p className={styles["account"]}>Account Details</p>
          <div className={styles["account__details"]}>
            <p>Fortune Oliseyenum</p>
            <p>fortuneoliseyenum12@gmail.com</p>
          </div>
        </div>
        <div className={styles["overview__details-container"]}>
          <p className={styles["account"]}>Adress Book</p>
          <div className={styles["account__details"]}>
            <div>Your default address</div>
            <div>
              <p>Fortune Oliseyenum</p>
              <p>Lagos State</p>
              <p>+2349060955362</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
