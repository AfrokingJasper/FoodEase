import React, { Fragment } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  const setLoginHandler = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Fragment>
      {showLogin && <Login onHideLogin={setLoginHandler} />}
      {!showLogin && <Signup onShowLogin={setLoginHandler} />}
    </Fragment>
  );
};

export default Auth;
