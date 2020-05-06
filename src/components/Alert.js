import React from 'react';
import '../assets/styles/components/alert.scss';

const AlertComponent = (props) => (
  <span>
    <p
      className={` ${
        props.isError ? 'alert alert__error text-danger'
          : props.isSuccess ? 'alert alert__success text-success '
            : 'hide'
      }`}
    >
      <img className={props.isError ? 'alertIcon' : 'hide'} src={require('../assets/images/alert.png')} />
      {props.message}
    </p>
  </span>
);
export default AlertComponent;
