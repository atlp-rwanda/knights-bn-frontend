import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/alert.scss';

const AlertComponent = ({
  isError, message, isSuccess, isAnimated,
}) => (
  <span>
    <p
      className={` ${isAnimated ? 'alert--animated' : 'alert'}
      ${isError ? 'alert__error text-danger'
        : isSuccess ? 'alert__success text-success '
          : 'hide'
      }`}
    >
      <img className={isError ? 'alertIcon' : 'hide'} src={require('../assets/images/alert.png')} />
      { message }
    </p>
  </span>
);

AlertComponent.propTypes = {
  isError: PropTypes.bool,
  message: PropTypes.string,
  isSuccess: PropTypes.bool,
  isAnimated: PropTypes.bool,
};

AlertComponent.defaultProps = {
  isAnimated: false,
  isError: false,
  message: '',
  isSuccess: false,
};
export default AlertComponent;
