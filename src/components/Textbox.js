import React from 'react';
import '../assets/styles/containers/landingPage.scss';
import { Form } from 'react-bootstrap';

const Textbox = (props) => {
  return (
    <Form.Group>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
      />
    </Form.Group>
  );
};
export default Textbox;
