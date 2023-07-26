import React from "react";
import { useSelector } from "react-redux";

// importing styles
import styles from "./AccountOverview.module.css";

const AccountOverview = ({ addressData }) => {
  const username = useSelector((state) => state.auth.username);

  return (
    <>
      <h3>Account Overview</h3>
      <div className={styles["overview__container"]}>
        <div className={styles["overview__details-container"]}>
          <p className={styles["account"]}>Account Details</p>
          <div className={styles["account__details"]}>
            <p>
              {addressData.name === ""
                ? "Please click address book and fill your Details"
                : addressData.name}
            </p>
            <p className={styles.email}>{username}</p>
          </div>
        </div>
        <div className={styles["overview__details-container"]}>
          <p className={styles["account"]}>Adress Book</p>
          <div className={styles["account__details"]}>
            <div>Your default address:</div>
            <div className={styles.details}>
              <p>{addressData.state}</p>
              <p>{addressData.phoneNumber}</p>
              <p>{addressData.street}</p>
              <p>{addressData.postal}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountOverview;
