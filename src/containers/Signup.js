import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import FormInput from '../components/FormInput';
import { handleChange, validateInput } from '../redux/actions/actions';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.props;
    const formInput = event.currentTarget;
    if (formInput.checkValidity() === false) {
      console.log('INVALID FORM');
      event.stopPropagation();
    }
    if (formInput.checkValidity() === true) {
      console.log('VALID FORM');
    }
  }

  render() {
    const {
      isValidated, user, handleChange, validateInput,
    } = this.props;
    // const {
    //   firstName, lastName, email, passportNumber, gender, password,
    // } = user;

    // isInputValid={validateInput}

    // when submit clicked : 
    // validate whole inputs => 
    // set isValidated from '' to true:false
    // set 


    //sInputValid="valid"
    return (
      <Form noValidate validated={this.isValidated} onSubmit={this.handleSubmit}>
        <FormInput type="text" name="firstName" handleChange={handleChange} placeHolderTxt="First name" errorMsg="firstName should have a minimum of 3 characters, no symbols allowed and no space in between" />
        <FormInput type="text" name="lastName" handleChange={handleChange} placeHolderTxt="Last name" errorMsg="lastName should have a minimum of 3 characters, no symbols allowed and no space in between" />
        <FormInput type="email" name="email" handleChange={handleChange} placeHolderTxt="Email" errorMsg="Invalid email address" />
        <FormInput type="text" name="passportNumber" handleChange={handleChange} placeHolderTxt="Passport number" errorMsg="Optional" />
        <FormInput type="password" name="password" handleChange={handleChange} placeHolderTxt="Password" errorMsg="password should contain at least one uppercase letter,one small letter, one special character, one number and one  and should be at minimum 6 characters" />
        <FormInput type="password" name="confirmPassword" handleChange={handleChange} placeHolderTxt="Confirm password" errorMsg="Should be similar to the password entered" />
        <Form.Check custom type="radio" name="gender" id="any" label="Male" inline />
        <Form.Check custom type="radio" name="gender" id="any2sfasdfdsf" label="Female" inline />
        <Button type="submit">Submit form</Button>
      </Form>
    );
  }
}
// type, name, placeHolderTxt, errorMsg, handleChange
const mapStateToProps = (globalState) => {
  console.log('globalState: ', globalState.eventHandler);
  const { isValidated, user } = globalState.eventHandler;
  return {
    isValidated,
    user,
  };
};
const mapDispatchToProps = {
  handleChange,
  validateInput,
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
