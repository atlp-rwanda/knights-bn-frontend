import React from 'react';
import { Button } from 'react-bootstrap';
import '../assets/styles/components/languages.scss';
import CountryFlag from 'react-country-flag';

const SubmitButton = ({
  size,
  id,
  name,
  onClick,
  label,
  disabled,
  className,
  variant,
}) => (
  <div className="form-group mr-2">
    <Button
      size={size}
      name={name}
      id={id}
      label={label}
      onClick={onClick}
      aria-label={label}
      className={className}
      variant={variant}
      disabled={disabled}
    >
      <span>{label}</span>
    </Button>
  </div>
);

export default SubmitButton;
