import React from 'react';
import { Button } from 'react-bootstrap';

const SubmitButton = ({
  size, id, label, onClick,
}) => (
  <Button
    size={size}
    id={id}
    label={label}
    onClick={onClick}
    data-testid="button"
  >
    {label}
  </Button>
);

export default SubmitButton;
