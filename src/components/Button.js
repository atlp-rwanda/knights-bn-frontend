import React from 'react';
import { Button } from 'react-bootstrap';

function SubmitButton(props) {
  return (
    <Button
      size={props.size}
      id={props.id}
      label={props.label}
      onClick={props.onClick}
      data-testid="button"
    >
      {props.label}
    </Button>
  );
}

export default SubmitButton;
