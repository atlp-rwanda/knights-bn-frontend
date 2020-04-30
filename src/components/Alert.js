import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertComponent = (props) => {
  const { variant, alertMsg } = props;
  return (
    <Alert variant={variant}>
      {alertMsg}
    </Alert>
  );
};
export default AlertComponent;
