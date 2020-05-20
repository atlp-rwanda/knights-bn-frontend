import React from 'react';

const TextArea = ({
  className,
  id,
  name,
  rows,
  placeholder,
  onChange,
  value,
}) => (
  <textarea
    className={className}
    id={id}
    name={name}
    rows={rows}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);

export default TextArea;
