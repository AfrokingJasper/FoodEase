import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AccountOverview from "./AccountOverview";
import Orders from "./Orders";
import Favorites from "./Favorites";
import AcctManagement from "./AcctManagement";
import Address from "./Address";

import styles from "./ProfileDetails.module.css";

const ProfileDetails = ({ activeNav }) => {
  const id = useSelector((state) => state.auth.userId);
  const [addressData, setAddressData] = useState({
    name: "",
    phoneNumber: "",
    street: "",
    state: "",
    postal: "",
  });

  useEffect(() => {
    const fetchAdressData = async () => {
      try {
        const response = await fetch(
          `https://foodease-backend-default-rtdb.firebaseio.com/users/${id}/adressDetails.json`
        );
        if (!response.ok) {
          // if response !Ok return an empty string for all adress Details
          return {
            name: "",
            phoneNumber: "",
            street: "",
            state: "",
            postal: "",
          };
        }
        const data = await response.json();
        // checking if the data exists and assigning the adressData to an empty string if it doesnt exist
        const name = data && data.name ? data.name : "";
        const phoneNumber = data && data.phoneNumber ? data.phoneNumber : "";
        const street = data && data.street ? data.street : "";
        const state = data && data.state ? data.state : "";
        const postal = data && data.postal ? data.postal : "";
        setAddressData({
          name,
          phoneNumber,
          street,
          state,
          postal,
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchAdressData();
  }, [id]);

  const account = activeNav === "account";
  const orders = activeNav === "orders";
  const favorites = activeNav === "favorites";
  const management = activeNav === "management";
  const address = activeNav === "address";
  return (
    <div className={styles["details__container"]}>
      {account && <AccountOverview addressData={addressData} />}
      {orders && <Orders />}
      {favorites && <Favorites />}
      {management && <AcctManagement />}
      {address && <Address addressData={addressData} />}
    </div>
  );
};

export default ProfileDetails;
