import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Login.module.css";
import { fetchUserData } from "../../store/auth-action";
import { useEffect } from "react";

const emailIsValid = (email) =>
  email.includes("@") && email.split("@").length === 2;
const passwordIsValid = (password) =>
  password.split("").length >= 5 && !password.split("").includes(" ");

const Login = ({ onHideLogin }) => {
  const location = useLocation();
  const error = useSelector((state) => state.auth.errorMessage);
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValidity, setInputValidity] = useState({
    email: true,
    password: true,
  });

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const loginFormHandler = (event) => {
    event.preventDefault();

    //  assigning the values of the inputs to a variable
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // checking if the entered values are valid inputs
    const enteredEmailIsValid = emailIsValid(enteredEmail);
    const enteredPasswordIsValid = passwordIsValid(enteredPassword);

    setInputValidity({
      email: enteredEmailIsValid,
      password: enteredPasswordIsValid,
    });

    const formIsValid = enteredEmailIsValid && enteredPasswordIsValid;

    if (!formIsValid) {
      return;
    }

    dispatch(fetchUserData(enteredEmail, enteredPassword));
  };

  const redirectPath = location.state?.path || "/";

  useEffect(() => {
    if (loggedIn) {
      navigate(redirectPath, { replace: true });
    }
  }, [loggedIn, navigate, redirectPath]);

  return (
    <form onSubmit={loginFormHandler} className={styles["login__form"]}>
      <h2>LOGIN</h2>
      <div className={styles["input__container"]}>
        <label htmlFor="email">Your Email</label>
        <input ref={emailInputRef} type="email" id="email" />
        {!inputValidity.email && (
          <em className={styles.error}>Please enter a valid email adress</em>
        )}
        {/* {errorMessage && <em className={styles.error}>{errorMessage}</em>} */}
      </div>
      <div className={styles["input__container"]}>
        <label htmlFor="password">Password</label>
        <input ref={passwordInputRef} type="text" id="password" />
        {!inputValidity.password && (
          <em className={styles.error}>
            entered password must be at least 5 characters
          </em>
        )}
      </div>
      <button className={styles["login__button"]}>Login</button>
      {error && <em className={styles.error}>{error}</em>}
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
