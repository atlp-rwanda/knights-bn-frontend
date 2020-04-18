import React from 'react';
import Header from '../components/Header';
import '../assets/styles/containers/landingPage.scss';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <div>
        <div className="background" />
        <Header />
      </div>
    );
  }
}

export default LandingPage;
