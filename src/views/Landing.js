import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/landingPage.scss';

const Landing = () => (
  <div className="loginContainer">
    <div className="description">
      <h1>Barefoot Nomad</h1>
      <p>
        Make company global travel and accommodation easy and
        convenient for the strong workforce of
        savvy members of staff, by leveraging the modern web.
      </p>
      <ul>
        <Link to="/signup" id="getStartedBtn">
          GET STARTED NOW
        </Link>
      </ul>
    </div>
    <div className="imageSide">
      <img
        className="landingPageImage"
        src={require('../assets/images/frontend image.png')}
      />
    </div>
  </div>
);

export default Landing;
