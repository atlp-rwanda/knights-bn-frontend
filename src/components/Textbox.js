import React from 'react';
import { Form } from 'react-bootstrap';

const TextBox = (props) => (
  <Form.Group>
    <Form.Control
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      name={props.name}
      onChange={(event) => props.onChange(event.target)}
      aria-label={props.label}
      value={props.value}
    />
  </Form.Group>
);
export default TextBox;
