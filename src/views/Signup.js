import React, { Component } from "react";
import { Form, Spinner } from "react-bootstrap";
import "../assets/styles/containers/loginPage.scss";
import { connect } from "react-redux";
import {
  validateSignupInput,
  loginUsersSuccess,
  handleError,
  setLoadingStatus,
  handleSuccess,
  resetInputFields,
  validateForm,
  clearErrorMsg,
  clearSuccessMsg
} from "../redux/actions/index";
import { Redirect } from "react-router-dom";
import TextBox from "../components/Textbox";
import Button from "../components/Button";
import Line from "../components/line";
import { thunk } from "../redux/thunk/index";
import { withRouter } from "react-router";
import AlertComponent from "../components/Alert";
import queryString from "querystring";
import SocialLogin from '../components/SocialLogin';

class Signup extends Component {
  signup = async (e) => {
    e.preventDefault();
    this.props.handleError("");
    this.props.handleSuccess("");
    this.props.validateForm(false);
    const { validations: validatedFields } = this.props;
    const invalidFields = Object.keys(validatedFields).filter(
      (field) => validatedFields[field] === "is-invalid"
    );
    let validatedFieldsToArray = Object.keys(validatedFields); 
    
    if (validatedFieldsToArray.length === 6 && invalidFields.length === 0) {
      this.props.setLoadingStatus(true);
      await this.props.thunk(
        "post",
        "/auth/signup",
        loginUsersSuccess,
        this.props.user
      );
      this.props.setLoadingStatus(false);
      this.props.userData.error
        ? this.props.handleError(this.props.userData.error)
        : this.props.handleSuccess(
            "Please check the email sent to your inbox to finish registration.")
      this.props.resetInputFields();
      this.props.validateForm(false);
    } else if (invalidFields.length === 6) {
      this.props.handleError("Please fill in the required fields.");
    } else {
      this.props.validateForm(true);
    }
  };
  
  render() {
    
    const {
      validateInput,
      error,
      isLoading,
      validations,
      user,
      success,
      isValidated,
    } = this.props;

    const returnedEmailVerificationQueryString = queryString.decode(
      this.props.location.search
    );
    if (
      returnedEmailVerificationQueryString["?message"] ===
      "Email already exists."
    )
      this.props.handleError("Email already exists.");
    if (returnedEmailVerificationQueryString["?token"])
      window.location.href = "/home";

    const token = localStorage.getItem("token");
    if (token) {
      this.props.history.push("/home");
    }

    return (
      <div className="signup-page loginContainer">
        <Spinner
          animation="border"
          variant="primary"
          className={isLoading ? "spinner--position__center" : "hide"}
        />
        <Form>
          <h1>Sign up</h1>
          <AlertComponent isError={error ? true : false} message={error} />
          <AlertComponent
            isSuccess={success ? true : false}
            message={success}
          />
          <p>Sign up with social media</p>
          <SocialLogin
            googleAction="Sign up with Google"
            facebookAction="Sign up with Facebook"
          />
          <div id="or">
            <Line className="Line" />{" "}
            <div id="or_">
              {" "}
              <span>or</span>{" "}
            </div>{" "}
            <Line className="Line_" />
          </div>
          <div className="flex--items">
            <TextBox
              type="text"
              placeholder="first name"
              id="firstName"
              name="firstName"
              onChange={validateInput}
              label="firstName"
              value={user.firstName || ""}
              isValid={isValidated ? validations.firstName : ""}
              errorMsg="first name can't be empty."
            />
            <TextBox
              type="text"
              placeholder="last name"
              id="lastName"
              name="lastName"
              onChange={validateInput}
              label="lastName"
              value={user.lastName || ""}
              isValid={isValidated ? validations.lastName : ""}
              errorMsg="last name can't be empty."
            />
          </div>
          <TextBox
            type="email"
            placeholder="email"
            id="email"
            name="email"
            onChange={validateInput}
            label="email"
            value={user.email || ""}
            isValid={isValidated ? validations.email : ""}
            errorMsg="invalid email."
          />
          <div className="flex--items">
            <TextBox
              type="password"
              placeholder="password"
              id="password"
              name="password"
              onChange={validateInput}
              label="password"
              value={user.password || ""}
              isValid={isValidated ? validations.password : ""}
              errorMsg="8 characters with at least a small case letter, upper case letter, a number and a symbol."
            />
            <TextBox
              type="password"
              placeholder="confirm password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={validateInput}
              label="confirmPassword"
              value={user.confirmPassword || ""}
              isValid={isValidated ? validations.confirmPassword : ""}
              errorMsg="Has to match password."
            />
          </div>
          <div className="position--center">
            <Form.Check
              type="radio"
              name="gender"
              id="male"
              value="male"
              label="Male"
              onChange={(event) => validateInput(event.target)}
              inline
            />
            <Form.Check
              type="radio"
              name="gender"
              id="female"
              value="female"
              label="Female"
              onChange={(event) => validateInput(event.target)}
              inline
            />
          </div>
          <Button
            aria-label="signup"
            onClick={(e) => this.signup(e)}
            id="loginBtn"
            label="SIGN UP"
            className="btn"
          ></Button>
          <a id="forgotPassword" href="#">
            <p>Already have an account? Login here</p>
          </a>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    error: state.errorHandler.error,
    validations: state.eventHandler.validations.signup,
    user: state.eventHandler.user,
    userData: state.user.data,
    isLoading: state.eventHandler.isLoading,
    isValidated: state.eventHandler.isValidated,
    success: state.successHandler.message,
  };
};

const mapDispatchToProps = {
  validateInput: validateSignupInput,
  thunk,
  handleError,
  setLoadingStatus,
  handleSuccess,
  resetInputFields,
  validateForm,
  clearErrorMsg,
  clearSuccessMsg
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
