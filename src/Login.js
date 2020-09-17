import React, { useState } from "react";
import "./Login.css";
import "./firebase";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        alert(error.message);
      });
  };

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it was succesfully created a new user
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://1000logos.net/wp-content/uploads/2019/07/Amazon-logo-2000%E2%80%93present.jpg"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign-In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <hr className="solid"></hr>

        <p> New to Amazon?</p>

        <button
          type="submit"
          onClick={signUp}
          className="login__registerButton"
        >
          Create and account with Amazon
        </button>
      </div>
    </div>
  );
}

export default Login;
