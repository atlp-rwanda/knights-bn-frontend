import React from 'react';
import '../assets/styles/containers/landingPage.scss';
import { Form } from 'react-bootstrap';

const Textbox = (props) => (
  <Form.Group>
    <Form.Control
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      name={props.name}
      onChange={(event) => props.onChange(event.target)}
      className={props.validation}
    />
    <Form.Control.Feedback type="invalid">
      {props.errorMsg}
    </Form.Control.Feedback>
  </Form.Group>
);
export default Textbox;
