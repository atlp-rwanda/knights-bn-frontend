import React from 'react';
import { Col, Form } from 'react-bootstrap';
import Input from './Input';

const RoomColumn = ({
  label, type, placeholder, name, handleChange,
}) => (
  <Col>
    <Form.Label className="roomLabel">{label}</Form.Label>
    <Input type={type} placeholder={placeholder} name={name} handleChange={handleChange} />
  </Col>
);
export default RoomColumn;
