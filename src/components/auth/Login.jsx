import React from "react";
import styles from "./Login.module.css";
import { useRef } from "react";

const Login = ({ onHideLogin }) => {
  const nameInputRef = useRef();
  const passwordInputRef = useRef();

  const nameChangeHandler = () => {
    const enteredName = nameInputRef.current.value;
  };
  const passwordChangeHandler = () => {
    const enteredPassword = passwordInputRef.current.value;
  };

  return (
    <form className={styles["login__form"]}>
      <h2>LOGIN</h2>
      <div className={styles["input__container"]}>
        <label htmlFor="name">Your Full Name</label>
        <input
          onChange={nameChangeHandler}
          ref={nameInputRef}
          type="text"
          id="name"
        />
      </div>
      <div className={styles["input__container"]}>
        <label htmlFor="password">Password</label>
        <input
          onChange={passwordChangeHandler}
          ref={passwordInputRef}
          type="text"
          id="password"
        />
      </div>
      <button className={styles["login__button"]}>Login</button>
      <div>
        <p>
          Dont Have an account yet?
          <span onClick={onHideLogin} className={styles["signup"]}>
            Signup
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
