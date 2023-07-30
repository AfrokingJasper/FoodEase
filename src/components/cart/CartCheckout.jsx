import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BsFillPatchCheckFill } from "react-icons/bs";

// importing styles
import styles from "./CartCheckout.module.css";
import { Link } from "react-router-dom";

const VerticalLine = () => {
  return (
    <svg width="2" height="15">
      <line
        x1="1"
        y1="0"
        x2="1"
        y2="100"
        style={{ stroke: "black", strokeWidth: 1 }}
      />
    </svg>
  );
};

const CartCheckout = () => {
  const id = useSelector((state) => state.auth.userId);
  const [addressData, setAddressData] = useState({
    name: "",
    phoneNumber: "",
    street: "",
    state: "",
  });
  const [activateButton, setActivateButton] = useState(true);

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
          };
        }
        const data = await response.json();
        // checking if the data exists and assigning the adressData to an empty string if it doesnt exist
        const name = data && data.name ? data.name : "";
        const phoneNumber = data && data.phoneNumber ? data.phoneNumber : "";
        const street = data && data.street ? data.street : "";
        const state = data && data.state ? data.state : "";

        if (
          name === "" ||
          phoneNumber === "" ||
          state === "" ||
          street === ""
        ) {
          setActivateButton(false);
        } else {
          setActivateButton(true);
        }
        setAddressData({
          name,
          phoneNumber,
          street,
          state,
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchAdressData();
  }, [id]);

  return (
    <>
      {/* Delivery Adress */}
      <div className={styles["delivery__address"]}>
        {/* Address Header */}
        <div className={styles["address__header"]}>
          <div className={styles["address__header-left"]}>
            <span style={{ color: "green" }}>
              <BsFillPatchCheckFill />
            </span>
            <h3>Delivery Address</h3>
          </div>
          <div className={styles["address__header-right"]}>
            <Link to="/profile">Change</Link>
          </div>
        </div>
        <hr />

        {/* Address Body */}
        {!activateButton ? (
          <div className={styles["address__body"]}>
            <p>Please go to profile and fill your Delivery details</p>
          </div>
        ) : (
          <div className={styles["address__body"]}>
            <p>{addressData.name}</p>
            <p>
              {addressData.street} <VerticalLine /> {addressData.state}{" "}
              <VerticalLine /> {addressData.phoneNumber}
            </p>
          </div>
        )}

        {activateButton && (
          <button className={styles["confirm__button"]}>Confirm Order</button>
        )}
      </div>
    </>
  );
};

export default CartCheckout;
