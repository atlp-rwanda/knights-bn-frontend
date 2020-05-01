import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import SocialLoginIcon from './SocialLoginIcon';
import '../assets/styles/containers/loginPage.scss';

const SocialLogin = ({ googleAction, facebookAction }) => (
  <div>
    <SocialLoginIcon
      icon={FcGoogle}
      label={googleAction}
      class="mr-2 color"
      formClass="social-login-btn"
      buttonClass="btnStyle"
      action="https://knights-bn-backnd.herokuapp.com/api/v1/auth/login/google"
    />
    <SocialLoginIcon
      icon={FaFacebookF}
      label={facebookAction}
      class="mr-2 ml-3 text-light bg-info"
      formClass="social-login-btn"
      buttonClass="btnStyle"
      action="https://knights-bn-backnd.herokuapp.com/api/v1/auth/login/facebook"
    />
  </div>
);

export default SocialLogin;
