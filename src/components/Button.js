import React from 'react';
import { Button } from 'react-bootstrap';
import '../assets/styles/components/languages.scss';
import CountryFlag from 'react-country-flag';

const SubmitButton = ({
  size, id, name, onClick, label, countryCode,
}) => (
  <Button
    size={size}
    id={id}
    onClick={(event) => onClick(event.target)}
    name={name}
    className="btn"
  >
    <CountryFlag countryCode={countryCode} />
    <span>{label}</span>
  </Button>
);

export default SubmitButton;
