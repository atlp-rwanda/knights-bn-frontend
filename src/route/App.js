import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from '../views/Login';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import HomePage from '../views/Home';
import UserInfo from '../helpers/UserInfo';
import Lost from '../components/Lost';
import Signup from '../views/Signup';
import ResetPassword from '../components/resetPassword/restPasswordPage';
import ModifyPasswordPage from '../components/resetPassword/ModifyPasswordPage';
import LandingPage from '../views/Landing';

const App = () => (
  <div>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/Home" exact component={HomePage} />
        <Route path="/userinfo" exact component={UserInfo} />
        <Route path="/lost" exact component={Lost} />
        <Route path="/password/reset/" exact component={ModifyPasswordPage} />
        <Route path="/forgetpassword" exact component={ResetPassword} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
