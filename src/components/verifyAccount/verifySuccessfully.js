import React from 'react';
import { connect } from 'react-redux';
import '../../assets/styles/containers/login.scss';
import { withRouter } from 'react-router-dom';
import { setCurentUser } from '../../redux/actions/actions';
import { authThunk } from '../../redux/thunk/index';

class VerifyPage extends React.Component {
  async componentDidMount() {
    const { email, password } = this.props.history.location.state;
    const body = {
      email,
      password,
    };
    await this.props.authThunk('post', 'auth/login', setCurentUser, body);
    this.props.history.push('/home');
  }

  render() {
    return (
      <div>
        {this.props.displayMessage.loading ? <div className="spinner-border text-primary verify-spinner" /> : ''}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  test: state,
  displayMessage: state.AuthReducer,
});
export default withRouter(connect(mapStateToProps, { authThunk })(VerifyPage));
