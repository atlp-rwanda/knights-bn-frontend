import React from 'react';
import { Form } from 'react-bootstrap';
import '../assets/styles/components/textBox.scss';

const TextBox = (props) => (
  <Form.Group>
    <Form.Control
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      name={props.name}
      onChange={props.isProfile ? props.onChange : (event) => props.onChange(event.target)}
      aria-label={props.label}
      value={props.value}
      className={props.isValid === 'is-invalid' ? 'is-invalid' : ''}
      disabled={props.disabled}

    />
    <Form.Control.Feedback
      type="invalid"
      className={`feedback ${props.isValid === 'is-valid' ? 'hide' : 'show'}`}
    >
      {' '}
      {props.errorMsg}
      {' '}
    </Form.Control.Feedback>
  </Form.Group>
);
export default TextBox;
