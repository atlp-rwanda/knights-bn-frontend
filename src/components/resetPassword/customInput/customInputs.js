import React from 'react';

export const InputElement = ({
  type, name, value, palceholder, id, onchenge, className,
}) => (
  <input
    type={type}
    name={name}
    value={value}
    placeholder={palceholder}
    className={className}
    id={id}
    onChange={onchenge}
  />
);

export const ButtonElememnt = ({
  value, onclick, id, className,
}) => (
  <button
    type="submit"
    className={className}
    onClick={onclick}
    id={id}
  >
    {value}
  </button>
);
