import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../../store/auth-slice";

// importing styles
import styles from "./AcctManagement.module.css";

const nameInputIsValid = (name) => {
  for (let i = 0; i < name.length; i++) {
    if (name.split(" ").length === 2 && name.split(" ")[i] !== " ") {
      return true;
    }
  }
  return false;
};
const phoneNumberIsValid = (number) => number.length === 10;

const postalIsValid = (postal) =>
  postal.length === 6 && !postal.split("").includes(" ");
const streetIsInValid = (street) => {
  for (let i = 0; i < street.length; i++) {
    if (street.split(" ").length > 1 && street.split(" ")[i] !== " ") {
      return true;
    }
  }
  return false;
};
const stateIsInValid = (state) => state.split("").length > 1;

const Address = ({ addressData }) => {
  const id = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  const [inputvalidity, setInputValidity] = useState({
    name: true,
    number: true,
    postal: true,
    street: true,
    state: true,
  });

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const postalInputRef = useRef();
  const streetInputRef = useRef();
  const stateInputRef = useRef();

  const editAddressHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const eneteredNumber = phoneInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredState = stateInputRef.current.value;

    const enteredNameIsValid = nameInputIsValid(enteredName);
    const enteredNumberIsValid = phoneNumberIsValid(eneteredNumber);
    const enteredPostalIsValid = postalIsValid(enteredPostal);
    const enteredStreetIsValid = streetIsInValid(enteredStreet);
    const enteredStateIsValid = stateIsInValid(enteredState);

    setInputValidity({
      name: enteredNameIsValid,
      number: enteredNumberIsValid,
      postal: enteredPostalIsValid,
      street: enteredStreetIsValid,
      state: enteredStateIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredNumberIsValid &&
      enteredPostalIsValid &&
      enteredStreetIsValid &&
      enteredStateIsValid;

    if (!formIsValid) {
      return;
    }

    const editData = async () => {
      try {
        const response = await fetch(
          `https://foodease-backend-default-rtdb.firebaseio.com/users/${id}/adressDetails.json`,
          {
            method: "PUT",
            body: JSON.stringify({
              name: enteredName,
              phoneNumber: eneteredNumber,
              street: enteredStreet,
              state: enteredState,
              postal: enteredPostal,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Could not update details");
        }

        dispatch(authAction.setSuccess("Details Updated sucessfully"));
      } catch (err) {
        dispatch(authAction.setError(err.message));
      }
    };
    editData();
  };

  return (
    <form
      onSubmit={editAddressHandler}
      className={styles["acct__management-form"]}
    >
      <div className={styles["management__input-container"]}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          placeholder="John Doe"
          defaultValue={addressData.name}
        />
      </div>
      <div className={styles["management__input-container"]}>
        <label htmlFor="number">Mobile Number</label>
        <input
          ref={phoneInputRef}
          type="number"
          id="number"
          placeholder="9060955362"
          defaultValue={addressData.phoneNumber}
        />
      </div>
      <div className={styles["management__input-container"]}>
        <label htmlFor="address">Street</label>
        <input
          ref={streetInputRef}
          type="text"
          id="adress"
          placeholder="1 mike mba street obiaruku"
          defaultValue={addressData.street}
        />
      </div>
      <div className={styles["management__input-container"]}>
        <label htmlFor="state">State</label>
        <input
          ref={stateInputRef}
          type="text"
          id="state"
          placeholder="Lagos State"
          defaultValue={addressData.state}
        />
      </div>
      <div className={styles["management__input-container"]}>
        <label htmlFor="postal">Postal Code</label>
        <input
          ref={postalInputRef}
          type="number"
          id="postal"
          placeholder="11111"
          defaultValue={addressData.postal}
        />
      </div>
      <button className={styles["edit__button"]}>Edit</button>
    </form>
  );
};

export default Address;
