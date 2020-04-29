import React, { Component } from "react";
import { Button, Form, Image, Alert } from "react-bootstrap";
import "../../assets/styles/containers/loginPage.scss";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import {postThunk} from '../../redux/thunk/index';
import {loginUsersSuccess } from '../../redux/actions/userActions';

// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {
    constructor(props) {
    super(props);
    this.state =  { email: '', password: '', error:' ', loggedIn:false};
  }
  render() {
    const {error, loggedIn} = this.state;
    console.log(error)
    return (
      <div className="login-page">
        <Form>
          <h1>Sign in</h1>
        <span className="error">{error? error :' '}</span>
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
            <p>{loggedIn ? <Redirect to="home" /> : null}</p>
          <Form.Group >
            <Form.Control
              type="password"
              placeholder="password"
              name="password"
              onChange={this.onChangeHandler}
              id="password"
            />
          </Form.Group>
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
        this.setState({
        ...this.state,
        [event.target.name]: event.target.value,
    });
  };
  login = async (e) => {
    e.preventDefault();
   await this.props.postThunk('post','/auth/login',loginUsersSuccess,this.state);
   const {isLoggedIn}=this.props.userData.data;
  isLoggedIn? this.setState({
    ...this.state,
    loggedIn:isLoggedIn

}):
    this.setState({
      ...this.state,
      error: this.props.userData.data.message || this.props.userData.data.error,

  });
  };
}

const mapStateToProps = (state) => {
  return {
    userData: state.user
  };
};


export default connect(mapStateToProps,{postThunk})(Login);
