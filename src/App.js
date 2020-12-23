import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./Components/Header/Pages/Home";
import Login from "./Components/Header/Pages/Login";
import Checkout from "./Components/Header/Pages/Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./Components/stateProvider";
import Prime from "./Components/Header/Prime";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  console.log("user login =>>", user);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is login here , do something
        dispatch({
          type: "IS USER LOGIN",
          payload: authUser,
        });
        history.push("/");
      } else {
        //user is logout  , do soemthing
        dispatch({
          type: "IS USER LOGIN",
          payload: null,
        });
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/try_prime" component={Prime} />
      </Switch>
    </div>
  );
}

export default App;
