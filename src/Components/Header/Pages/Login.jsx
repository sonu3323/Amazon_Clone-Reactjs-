import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Paper } from "@material-ui/core";
import "./Login.css";
import { Grid } from "@material-ui/core";
import { auth } from "../../../firebase";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    console.log("register click");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => alert(error.message));

    setEmail("");
    setPassword("");
  };

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => alert(error.message));

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            className="login__img"
            src="https://pluspng.com/img-png/amazon-logo-vector-png-amazon-logo-vector-512.png"
            alt="amazon_logo"
          />
        </Link>
        <div className="login__card">
          <Grid item sm={12}>
            <Paper>
              <form>
                <div className="login__body">
                  <h1>SignIn</h1>

                  <label>E-mail:</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                  />
                  <label>Password:</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                  <Button
                    className="login__button"
                    variant="outlined"
                    color="primary"
                    type="submit"
                    onClick={login}
                  >
                    Login
                  </Button>
                  <p>
                    By signing-in you agree to Amazon's Conditions of Use &
                    Sale. Please see our Privacy Notice, our Cookies Notice and
                    our Interest-Based Ads Notice.
                  </p>
                  <Button type="submit" variant="outlined" onClick={register}>
                    Create your Amazon Account
                  </Button>
                </div>
              </form>
            </Paper>
            <h1 className="login__footerName">@Sonu Sharma 2020</h1>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Login;
