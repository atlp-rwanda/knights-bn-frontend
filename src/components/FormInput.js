import React from 'react';
import { Form } from 'react-bootstrap';
import '../assets/styles/containers/signupPage.scss';

// type={isInputValid}
const FormInput = (props) => {
  const {
    type, name, placeHolderTxt, errorMsg, handleChange, isInputValid,
  } = props;
  return (
    <Form.Group controlId="formInput">
      <Form.Control type={type} name={name} onChange={(event) => handleChange(event.target)} placeholder={placeHolderTxt} required />
      <Form.Control.Feedback type="invalid" className={(isInputValid === 'valid') ? 'hide' : 'show'}>
        {errorMsg}
      </Form.Control.Feedback>
    </Form.Group>
  );
};
// FormInput.propTypes = {
//   type: PropTypes.string.required,
//   placeHolderTxt: PropTypes.string.required,
//   errorMsg: PropTypes.string.required,
// };

export default FormInput;
