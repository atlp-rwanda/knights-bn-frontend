import React from 'react';
import Proptypes from 'prop-types';

const DateInput = ({
  label, name, value, handleChange,
}) => (
  <div>
    <label htmlFor={value}>{label}</label>
    <input type="date" name={name} onChange={(event) => handleChange(event.target)} />
  </div>
);
DateInput.propTypes = {
  label: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
};

export default DateInput;
