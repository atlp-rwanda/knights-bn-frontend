import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "../containers/Home";
import Login from "../views/LoginPage";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LandingPage from "../containers/LandingPage";
import HomePage from "../views/Home";

const App = () => (
  <div>
    <Route>
      <Nav />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/landing" exact component={LandingPage} />
        <Route path="/Home" exact component={HomePage} />
      </Switch>
      <Footer />
    </Route>
  </div>
);

export default App;
