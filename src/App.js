import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Home from "./Components/Home/Home/Home";
import LoginForm from "./Components/LoginForm/LoginForm";
import Process from "./Components/OrderPayment/Process";

export const userContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({
    name: "",
    email: "",
    imgURL: "",
  });

  return (
    <userContext.Provider value={[loggedIn, setLoggedIn]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
          <Home />
          </Route>
          <PrivateRoute path="/pay/:id">
            <Process />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <LoginForm />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
