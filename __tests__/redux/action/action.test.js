import {
  loginUsersSuccess,
  validateLoginInput,
  validateSignupInput,
  handleError,
  setLoadingStatus,
  handleSuccess,
  resetInputFields,
  clearErrorMsg,
  clearSuccessMsg,
  validateForm,
} from '../../../src/redux/actions';
import * as types from '../../../src/redux/actions/actionTypes';

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

  it('should be able to validateInput action', () => {
    const target = {
      email: 'alain.maxime@gmail.com',
      password: 'Niyonkuru@1',
    };
    expect(validateLoginInput({
      type: 'VALIDATE_LOGIN_INPUT',
      target,
    }).payload.key).toEqual(undefined);
  });

  it('should be able to make handleError action', () => {
    expect(handleError({
      type: 'VALIDATE_LOGIN_INPUT',
      error: 'error',
    }).error.error).toEqual('error');
  });

  it('should be able to make setLoadingStatus action', () => {
    expect(setLoadingStatus({
      type: 'SET_LOADING_STATUS',
      status: '',
    }).status.status).toEqual('');
  });
  it('handleSuccess should return success type and message', () => {
    const expectedAction = {
      type: types.HANDLE_SUCCESS,
      message: 'successfully registered',
    };
    expect(handleSuccess('successfully registered')).toEqual(expectedAction);
  });
  it('validatedSignupInput should return type and payload', () => {
    const expectedAction = {
      type: types.VALIDATE_SIGNUP_INPUT,
      payload: {
        key: 'email',
        value: 'noname@gmail.com',
      },
    };
    expect(validateSignupInput(
      {
        name: 'email',
        value: 'noname@gmail.com',
      },
    )).toEqual(expectedAction);
  });
  it('validateForm should return type and status', () => {
    const expectedAction = {
      type: types.VALIDATE_FORM,
      status: true,
    };
    expect(validateForm(true)).toEqual(expectedAction);
  })
  it('resetInputFields should return type', () => {
    const expectedAction = {
      type: types.RESET_INPUT_FIELDS,
    };
    expect(resetInputFields()).toEqual(expectedAction);
  });
  it('clearErrorMsg should return type', () => {
    const expectedAction = {
      type: types.CLEAR_ERROR_MSG,
    };
    expect(clearErrorMsg()).toEqual(expectedAction);
  });
  it('clearSuccessMsg should return type', () => {
    const expectedAction = {
      type: types.CLEAR_SUCCESS_MSG,
    };
    expect(clearSuccessMsg()).toEqual(expectedAction);
  });
});
