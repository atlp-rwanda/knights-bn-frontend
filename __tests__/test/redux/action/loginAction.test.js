import {
  loginUsersSuccess,
  validateInput,
  handleError,
  setLoadingStatus,
} from '../../../../src/redux/actions';

describe(' test loginUsersSuccess actions', () => {
  it('should be able to make login action', () => {
    const payload = {
      email: 'alain.maxime@gmail.com',
      password: 'Niyonkuru@1',
    };
    expect(loginUsersSuccess({
      type: 'USER_LOGIN_SUCCESS',
      payload,
    }).payload.payload.email).toEqual('alain.maxime@gmail.com');
  });

  it('should be able to make validateInput action', () => {
    const target = {
      email: 'alain.maxime@gmail.com',
      password: 'Niyonkuru@1',
    };
    expect(validateInput({
      type: 'VALIDATE_INPUT',
      target,
    }).payload.key).toEqual(undefined);
  });

  it('should be able to make handleError action', () => {
    expect(handleError({
      type: 'VALIDATE_INPUT',
      error: 'error',
    }).error.error).toEqual('error');
  });

  it('should be able to make setLoadingStatus action', () => {
    expect(setLoadingStatus({
      type: 'SET_LOADING_STATUS',
      status: '',
    }).status.status).toEqual('');
  });
});
