import React from 'react';
import '../assets/styles/containers/loginPage.scss';

const AlertComponent = (props) => (
  <span>
    <p className={props.isError ? 'text-danger' : 'hide'} id="loginError">
      <img className="alertIcon" src={require('../assets/images/alert.png')} />
      {props.errorMsg}
    </p>
  </span>
);
export default AlertComponent;
