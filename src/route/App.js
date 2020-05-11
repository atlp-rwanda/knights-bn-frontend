import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from '../components/login/LoginPage';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import HomePage from '../views/Home';
import UserInfo from '../helpers/UserInfo';
import Lost from '../components/Lost';
import Signup from '../components/signUp/SignUpPage';
import ResetPassword from '../components/resetPassword/restPasswordPage';
import ModifyPasswordPage from '../components/resetPassword/ModifyPasswordPage';
import LandingPage from '../views/Landing';
import AdminPage from '../views/Admin';
import Profile from '../views/Profile';
import requireAuth from '../util/isAuthenticated';
import clearMessage from '../util/clearStateOnchange';
import verifyAccountPage from '../components/verifyAccount/verifyPage';
import isAdmin from '../util/isAdmin';
import verified from '../components/verifyAccount/verifySuccessfully';

const App = () => (
  <div>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/admin" exact component={isAdmin(AdminPage)} />
        <Route path="/signup" exact component={clearMessage(Signup)} />
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={clearMessage(Login)} />
        <Route path="/Home" exact component={requireAuth(HomePage)} />
        <Route path="/userinfo" exact component={UserInfo} />
        <Route path="/verified" exact component={verified} />
        <Route path="/lost" exact component={Lost} />
        <Route path="/profile" exact component={requireAuth(Profile)} />
        <Route path="/verify/signup" exact component={clearMessage(verifyAccountPage)} />
        <Route path="/password/reset/" exact component={clearMessage(ModifyPasswordPage)} />
        <Route path="/forgetpassword" exact component={clearMessage(ResetPassword)} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
