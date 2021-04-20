import React, { useState } from "react";

import "./entry.style.css";
import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFmrLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
    console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Fill up all the form!");
    }

    // TODO call api to submit form
    console.log(email, password);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return alert("Please enter the email!");
    }

    // TODO call api to submit form
    console.log(email);
  };

  const formSwitcher = (frmType) => {
      setFmrLoad(frmType);
  }

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {frmLoad === 'login' && 
        <LoginForm
          handleOnSubmit={ handleOnSubmit }
          handleOnChange={ handleOnChange }
          formSwitcher ={ formSwitcher }
          email={ email }
          password={ password }
        />}

        {frmLoad === 'reset' && 
        <ResetPassword
          handleOnResetSubmit={ handleOnResetSubmit }
          handleOnChange={ handleOnChange }
          formSwitcher ={ formSwitcher }
          email={ email }
        />}
      </Jumbotron>
    </div>
  );
};
