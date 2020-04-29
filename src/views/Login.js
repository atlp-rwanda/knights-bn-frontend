import React, { Component } from "react";
import { Form, Image, Alert } from "react-bootstrap";
import "../assets/styles/containers/loginPage.scss";
import { connect } from "react-redux";
import {
  fetchUsers,
  validateInput,
  loginUsersSuccess,
} from "../redux/actions/index";
import { Redirect } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import Line from "../components/line";
import { postThunk } from "../redux/thunk/index";
import { withRouter } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: "", password: "" },
      error: " ",
      loggedIn: false,
    };
  }
  render() {
    const { validateInput } = this.props;
    const emailValidation = this.props.validations.email;
    const passwordValidation = this.props.validations.password;
    const { error } = this.state;
    return (
      <div className="login-page">
        <Form>
          <h1>Sign in</h1>
          <span>
            <p className="text-danger">
              {error ? error : " "}
            </p>
          </span>
          <p>Login with so social media</p>
          <div className="Google-login-btn">
            <img
              className="facebookLogo"
              src={require("../assets/images/google.png")}
            />
            Sign in with Google
          </div>
          <div className="Facebook-login-btn">
            <img
              className="GoogleLogo"
              src={require("../assets/images/facebook.png")}
            />
            Sign in with Facebook
          </div>
          <div id="or">
            <Line className="Line" />
            <div id="or_">
              <span>or</span>
            </div>
            <Line className="Line_" />
          </div>
          <Textbox
            type="email"
            placeholder="email"
            id="email"
            name="email"
            onChange={validateInput}
            validation={emailValidation}
            errorMsg="invalid email"
            dataTestid="email"
          />
          <Textbox
            type="password"
            placeholder="password"
            id="password"
            name="password"
            onChange={validateInput}
            validation={passwordValidation}
            errorMsg="password can't be empty."
            dataTestid="password"
          />
          <p>{this.props.token ? <Redirect to="home" /> : null}</p>
          <p>{this.props.error}</p>
          <Button onClick={(e) => this.login(e)} id="loginBtn" label="Login" />
          <a id="forgotPassword" href="#">
            <p>Forgot Password?</p>
          </a>
        </Form>
      </div>
    );
  }
  login = async (e) => {
    e.preventDefault();
    const { validations: validatedFields } = this.props;
    const invalidFields = Object.keys(validatedFields).filter(
      (field) => validatedFields[field] === "is-invalid"
    );
    let validatedFieldsToArray = Object.keys(validatedFields);
    if (validatedFieldsToArray.length && invalidFields.length === 0) {
      await this.props.postThunk(
        "post",
        "/auth/login",
        loginUsersSuccess,
        this.props.user
      );
      const { isLoggedIn } = this.props.userData;
      isLoggedIn
        ? this.props.history.push("/home")
        : this.setState({
            ...this.state,
            error: this.props.userData.message || this.props.userData.error,
          });
    }
  };
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    error: state.user.message,
    validations: state.eventHandler.validations,
    user: state.eventHandler.user,
    userData: state.user.data,
  };
};

const mapDispatchToProps = {
  fetchUsers,
  validateInput,
  postThunk,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
