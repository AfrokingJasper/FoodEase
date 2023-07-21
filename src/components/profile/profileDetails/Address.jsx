import React from "react";
import styles from "./AcctManagement.module.css";
import { useRef } from "react";

const phoneNumberIsValid = (number) => number.length === 10;
const postalIsValid = (postal) => postal.length === 5;
const streetIsInValid = (street) => street.split(" ").includes(" ");

const Address = () => {
  const phoneInputRef = useRef();
  const postalInputRef = useRef();
  const streetInputRef = useRef();

  const editAddressHandler = (event) => {
    event.preventDefault();

    const eneteredNumber = phoneInputRef.current.value;
    const enteredPostal = postalInputRef.current.vaue;
    const enteredStreet = streetInputRef.current.value;

    console.log(streetIsInValid(enteredStreet));
    console.log(phoneNumberIsValid(eneteredNumber));
  };

  return (
    <form
      onSubmit={editAddressHandler}
      className={styles["acct__management-form"]}
    >
      <div className={styles["management__input-container"]}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" placeholder="John Doe" />
      </div>
      <div className={styles["management__input-container"]}>
        <label htmlFor="number">Mobile Number</label>
        <input
          ref={phoneInputRef}
          type="number"
          id="number"
          placeholder="9060955362"
        />
      </div>
      <div className={styles["management__input-container"]}>
        <label htmlFor="address">Street</label>
        <input
          ref={streetInputRef}
          type="text"
          id="adress"
          placeholder="1 mike mba street obiaruku"
        />
      </div>
      <div className={styles["management__input-container"]}>
        <label htmlFor="state">State</label>
        <input type="text" id="state" placeholder="Lagos State" />
      </div>
      <div className={styles["management__input-container"]}>
        <label htmlFor="posta">Postal Code</label>
        <input
          ref={postalInputRef}
          type="number"
          id="postal"
          placeholder="11111"
        />
      </div>
      <button className={styles["edit__button"]}>Edit</button>
    </form>
  );
};

export default Address;
