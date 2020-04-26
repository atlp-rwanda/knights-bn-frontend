import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
// import LandingPage from '../containers/LandingPage';
import Signup from '../containers/Signup';

const App = () => (
  <div>
    <Route>
      <Nav />
      <Switch>
        <Route path="/signup" exact component={Signup} />
        {/* <Route path="/" exact component={Home} />
        <Route path="/landing" exact component={LandingPage} /> */}
      </Switch>
      <Footer />
    </Route>
  </div>
);

export default App;
