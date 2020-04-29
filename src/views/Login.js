import React, { Component } from 'react';
import { Form, Image, Alert } from 'react-bootstrap';
import '../assets/styles/containers/loginPage.scss';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/actions/index';
import { Redirect } from 'react-router-dom';
import Textbox from '../components/Textbox';
import Button from '../components/Button';
import Line from '../components/line';
import {postThunk} from '../redux/thunk/index';

// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {
  constructor(props) {
    super(props);
    this.state =  { email: '', password: '', error:''};
  }
  render() {
    const {error} = this.state;
    console.log(error);
    return (
      <div className="login-page">
        <Form>
          <h1>Sign in</h1>
          <p>Login with so social media</p>
          <div className="Google-login-btn">
            Sign in with Google
          </div>
          <div className="Facebook-login-btn">Sign in with Facebook</div>
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
            onChange={this.onChangeHandler}
          />
          <Textbox
            type="password"
            placeholder="password"
            id="password"
            name="password"
            onChange={this.onChangeHandler}
          />
          {/* <p>{this.props.token ? <Redirect to="home" /> : null}</p>
          <p>{this.props.error}</p> */}
          <Button onClick={(e) => this.login(e)} id="loginBtn" label="Login" />
          <a id="forgotPassword" href="#">
            <p>Forgot Password?</p>
          </a>
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
  login = (e) => {
    e.preventDefault();
    await this.props.postThunk('post','/auth/login',loginUsersSuccess,this.state);
    const {isLoggedIn} = this.props.userDtata;
       if(isLoggedIn){
        this.context.router.push('/home');
       }
       this.setState({
        ...this.state,
        error: this.props.userDtata.error
    });

  };
}

const mapStateToProps = (state) => {
  return {
     userDtata: state.data
  };
};


export default connect(mapStateToProps, {postThunk})(Login);
