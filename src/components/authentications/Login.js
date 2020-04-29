import React, { Component } from "react";
import { Button, Form, Image, Alert } from "react-bootstrap";
import "../../assets/styles/containers/loginPage.scss";
import { connect } from "react-redux";
import { fetchUsers } from '../../redux/actions/index';
import { Redirect } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {
    constructor(props) {
    super(props);
    this.state = { data: { email: '', password: '' } };
  }
  render() {
    return (
      <div className="login-page">
        <Form>
          <h1>Sign in</h1>
          <p>Login with so social media</p>
          <div className="Google-login-btn">
            {/* <Image src="../../assets/images/google.jpeg" rounded /> */}
            Sign in with Google
          </div>
          <div className="Facebook-login-btn">Sign in with Facebook</div>
          <div id="or">
		      	<svg className="Line" viewBox="0 1 120.5 1">
			        	<path fill="transparent" stroke="rgba(231,231,231,1)" width="1px" linejoin="miter" linecap="square" miterlimit="10" rendering="auto" id="Line" d="M 0 1 L 120.5 1">
			        	</path>
		      	</svg>
		      	<div id="or_">
			    	  <span>or</span>
		      	</div>
		      	<svg className="Line_" viewBox="0 1 120.5 1">
			    	  <path fill="transparent" stroke="rgba(231,231,231,1)" width="1px" linejoin="miter" linecap="square" miterlimit="10" rendering="auto" id="Line_" d="M 0 1 L 120.5 1">
			    	  </path>
		      	</svg>
		      </div>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="email"
              id="email"
              name="email"
              onChange={this.onChangeHandler}
            />
          </Form.Group>
          <Form.Group >
            <Form.Control
              type="password"
              placeholder="password"
              name="password"
              onChange={this.onChangeHandler}
              id="password"
            />
          </Form.Group>
          <p>{this.props.token ? <Redirect to="home" /> : null}</p>
          <p>{this.props.error}</p>
          <Button
            onClick={(e) => this.login(e)}
            variant="primary"
            size="lg"
            id="loginBtn"
            block
          >
            Login
          </Button>
          <a id="forgotPassword" href="#"><p>Forgot Password?</p></a>
        </Form>
      </div>
    );
  }
  onChangeHandler = (event) => {
    console.log(event);
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };
  login = (e) => {
    e.preventDefault();
    this.props.fetchUsers(this.state.data);
  };
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
    error: state.user.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (request) => dispatch(fetchUsers(request)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
