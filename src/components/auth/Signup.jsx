import React from "react";
import styles from "./Signup.module.css";
import { useRef } from "react";
import { useState } from "react";

// setting up validation logic for each inputs
const nameInputIsValid = (name) => {
  for (let i = 0; i < name.length; i++) {
    if (name.split(" ").length === 2 && name.split(" ")[i] !== " ") {
      return true;
    }
  }
  return false;
};

const emailIsValid = (email) =>
  email.includes("@") && email.split("@").length === 2;
const passwordIsValid = (password) =>
  password.split("").length >= 5 && !password.split("").includes(" ");

// the onShowLogin was gotten from the Auth.jsx and it is used to swich the visiblity of the forms fromsign up to login
const Signup = ({ onShowLogin }) => {
  const [inputvalidity, setInputValidity] = useState({
    name: true,
    email: true,
    password: true,
    confirmPassword: true,
  });

  // assigning each inputs for a ref using the useRef() hook to monitor the values and changes in each input
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmInputRef = useRef();

  // the confirm handler function helps to validate and submit the form only if it passes all the given requirements
  const signupFormHandler = (event) => {
    event.preventDefault();

    // assigning the values of the inputs to a variable for validation
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const eneteredPassword = passwordInputRef.current.value;
    const enteredCPassword = confirmInputRef.current.value;

    // checking if the values of each inputs is valid
    const enteredNameIsValud = nameInputIsValid(enteredName);
    const enteredEmailIsValid = emailIsValid(enteredEmail);
    const enteredPasswordIsValid = passwordIsValid(eneteredPassword);
    const enteredCPasswordIsValid = eneteredPassword === enteredCPassword;

    // setting the state of the inputValidity to the current value of each inputs
    setInputValidity({
      name: enteredNameIsValud,
      email: enteredEmailIsValid,
      password: enteredPasswordIsValid,
      confirmPassword: enteredCPasswordIsValid,
    });

    const formIsValid =
      enteredNameIsValud &&
      enteredEmailIsValid &&
      enteredPasswordIsValid &&
      enteredCPasswordIsValid;

    if (!formIsValid) {
      return;
    }

    const signupData = {
      name: enteredName,
      email: enteredEmail,
      password: eneteredPassword,
    };

    const signup = async () => {
      const response = await fetch(
        `https://foodease-backend-default-rtdb.firebaseio.com/users.json`,
        {
          method: "POST",
          body: JSON.stringify({
            user: enteredName,
            details: signupData,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.log("error");
      }

      const data = await response.json();
      console.log(data);
    };
    signup();

    console.log(signupData);
  };

  return (
    <form onSubmit={signupFormHandler} className={styles["login__form"]}>
      <h2>SIGNUP</h2>

      {/* name input */}
      <div className={styles["input__container"]}>
        <label htmlFor="name">Your Full Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!inputvalidity.name && (
          <em className={styles.error}>
            Please enter your firstname and surname
          </em>
        )}
      </div>

      {/* email input */}
      <div className={styles["input__container"]}>
        <label htmlFor="email">Email</label>
        <input ref={emailInputRef} type="email" id="email" />
        {!inputvalidity.email && (
          <em className={styles.error}>please enter a valid email</em>
        )}
      </div>

      {/* password input */}
      <div className={styles["input__container"]}>
        <label htmlFor="password">Password</label>
        <input ref={passwordInputRef} type="text" id="password" />
        {!inputvalidity.password && (
          <em className={styles.error}>
            passwrod length must not be less than 5
          </em>
        )}
      </div>

      {/* confirm password input */}
      <div className={styles["input__container"]}>
        <label htmlFor="cpassword">Confirm Password</label>
        <input ref={confirmInputRef} type="text" id="cpassword" />
        {!inputvalidity.confirmPassword && (
          <em className={styles.error}>both passwords must be the same</em>
        )}
      </div>
      <button className={styles["login__button"]}>SignUp</button>
      <div>
        <p>
          Already an account?
          <span onClick={onShowLogin} className={styles["signup"]}>
            Login
          </span>
        </p>
      </div>
    </form>
  );
};

export default Signup;
