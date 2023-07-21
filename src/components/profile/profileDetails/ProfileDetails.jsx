import React from "react";
import styles from "./ProfileDetails.module.css";
import AccountOverview from "./AccountOverview";
import Orders from "./Orders";
import Favorites from "./Favorites";
import AcctManagement from "./AcctManagement";
import Address from "./Address";

const ProfileDetails = ({ activeNav }) => {
  const account = activeNav === "account";
  const orders = activeNav === "orders";
  const favorites = activeNav === "favorites";
  const management = activeNav === "management";
  const address = activeNav === "address";
  return (
    <div className={styles["details__container"]}>
      {account && <AccountOverview />}
      {orders && <Orders />}
      {favorites && <Favorites />}
      {management && <AcctManagement />}
      {address && <Address />}
    </div>
  );
};

export default ProfileDetails;
