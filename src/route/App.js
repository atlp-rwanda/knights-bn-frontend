import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from '../views/Login';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import HomePage from '../views/Home';
import UserInfo from '../helpers/UserInfo';
import Lost from '../components/Lost';
import Signup from '../views/Signup';

const App = () => (
  <div>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/Home" exact component={HomePage} />
        <Route path="/userinfo" exact component={UserInfo} />
        <Route path="/lost" exact component={Lost} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
