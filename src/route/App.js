import React from "react";
import { Route, Switch , BrowserRouter } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../views/LoginPage";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LandingPage from "../containers/LandingPage";
import HomePage from "../views/Home";

const App = () => (
  <div>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/landing" exact component={LandingPage} />
        <Route path="/Home" exact component={HomePage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
