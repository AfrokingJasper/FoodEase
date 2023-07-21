import React from "react";
import styles from "./Signup.module.css";
import { useRef } from "react";

const Signup = ({ onShowLogin }) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmInputRef = useRef();

  return (
    <form className={styles["login__form"]}>
      <h2>SIGNUP</h2>
      <div className={styles["input__container"]}>
        <label htmlFor="name">Your Full Name</label>
        <input
          // onChange={nameChangeHandler}
          ref={nameInputRef}
          type="text"
          id="name"
        />
      </div>
      <div className={styles["input__container"]}>
        <label htmlFor="email">Email</label>
        <input
          // onChange={passwordChangeHandler}
          ref={emailInputRef}
          type="email"
          id="email"
        />
      </div>
      <div className={styles["input__container"]}>
        <label htmlFor="password">Password</label>
        <input
          // onChange={passwordChangeHandler}
          ref={passwordInputRef}
          type="text"
          id="password"
        />
      </div>
      <div className={styles["input__container"]}>
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          // onChange={passwordChangeHandler}
          ref={confirmInputRef}
          type="text"
          id="cpassword"
        />
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
