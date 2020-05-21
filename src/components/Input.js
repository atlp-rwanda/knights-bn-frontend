import React from 'react';

const InputComponent = ({
  type, placeholder, name, handleChange,
}) => (
  <input
    onChange={(event) => handleChange(event.target)}
    className="form-control"
    type={type}
    placeholder={placeholder}
    name={name}
  />
);
export default InputComponent;
