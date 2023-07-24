import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../store/auth-slice";
import styles from "./Signup.module.css";

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
  const error = useSelector((state) => state.auth.errorMessage);
  const success = useSelector((state) => state.auth.sucessMessage);
  const dispatch = useDispatch();
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
      try {
        const query = `?orderBy="user"&equalTo="${enteredEmail}"`;
        const check = await fetch(
          `https://foodease-backend-default-rtdb.firebaseio.com/users.json` +
            query,
          { method: "GET" }
        );

        const checkData = await check.json();
        for (const key in checkData) {
          if (key) {
            console.log(key);
            throw new Error("User Already Exist");
          }
        }

        const response = await fetch(
          `https://foodease-backend-default-rtdb.firebaseio.com/users.json`,
          {
            method: "POST",
            body: JSON.stringify({
              user: enteredEmail,
              details: signupData,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Could not fetch user Data");
        }

        const data = await response.json();
        dispatch(authAction.setError(null));
        onShowLogin();
        console.log(data);
      } catch (err) {
        console.log(err.message);
        dispatch(authAction.setError(err.message));
      }
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
      {error && <em className={styles.error}>{error}</em>}
      {success && <em /*className={styles.error}*/>{success}</em>}
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
