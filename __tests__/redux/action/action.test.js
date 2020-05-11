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
  viewAllUsers,
  viewOneUser,
  updateUserRole,
  userProfile,
  updateUserProfile,
} from '../../../src/redux/actions';
import * as types from '../../../src/redux/actions/actionTypes';

describe(' test loginUsersSuccess actions', () => {
  it('should be able to make login action', () => {
    const payload = {
      email: 'alain.maxime@gmail.com',
      password: 'Niyonkuru@1',
    };
    expect(
      loginUsersSuccess({
        type: 'USER_LOGIN_SUCCESS',
        payload,
      }).payload.payload.email
    ).toEqual('alain.maxime@gmail.com');
  });

  it('should be able to validateInput action', () => {
    const target = {
      email: 'alain.maxime@gmail.com',
      password: 'Niyonkuru@1',
    };
    expect(
      validateLoginInput({
        type: 'VALIDATE_LOGIN_INPUT',
        target,
      }).payload.key
    ).toEqual(undefined);
  });

  it('should be able to make handleError action', () => {
    expect(
      handleError({
        type: 'VALIDATE_LOGIN_INPUT',
        error: 'error',
      }).error.error
    ).toEqual('error');
  });

  it('should be able to make setLoadingStatus action', () => {
    expect(
      setLoadingStatus({
        type: 'SET_LOADING_STATUS',
        status: '',
      }).status.status
    ).toEqual('');
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
    expect(
      validateSignupInput({
        name: 'email',
        value: 'noname@gmail.com',
      })
    ).toEqual(expectedAction);
  });
  it('validateForm should return type and status', () => {
    const expectedAction = {
      type: types.VALIDATE_FORM,
      status: true,
    };
    expect(validateForm(true)).toEqual(expectedAction);
  });
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
  it('test view all action', () => {
    const expectedAction1 = {
      type: types.GET_ALL_USERS,
      payload: {
        allUsers: {},
      },
    };
    expect(viewAllUsers({ allUsers: {} })).toEqual(expectedAction1);
  });
  it('it should test view on action', () => {
    const expectedAction2 = {
      type: types.GET_ONE_USER,
      payload: {
        oneUser: {},
      },
    };
    expect(viewOneUser({ oneUser: {} })).toEqual(expectedAction2);
  });
  it('it should test view on action', () => {
    const expectedAction3 = {
      type: types.UPDATE_ROLE,
      payload: {
        data: {},
      },
    };
    expect(updateUserRole({ data: {} })).toEqual(expectedAction3);
  });
  it('should be able to display user information', () => {
    const user = {
      loading: false,
      token: '',
      error: '',
      data: {
        status: 200,
        user: {
          biography: 'Live at gisoxi',
          birthDay: '1999-01-01T00:00:00.000Z',
          createdAt: '2020-04-18T09:58:51.478Z',
          currency: 'Rwf',
          department: 'IT',
          email: 'superadmin@barefootnomad.com',
          firstName: 'Moise',
          gender: 'male',
          homeTown: 'Gisozi',
          language: 'Frensh',
          lastName: 'Rwibutso',
          lineManager: 'william.ishimwe@andela.com',
          passport: 'ws846522',
          profileImage:
            'https://res.cloudinary.com/niyo/image/upload/v1589269369/znmfuyjn8y5xwbhaz5ci.jpg',
          role: 'superAdmin',
          updatedAt: '2020-05-12T07:43:06.523Z',
        },
        isLoggedIn: true,
      },
    };
    expect(
      userProfile({
        type: 'USER_PROFILE',
        user,
      }).payload.user.data.user.email
    ).toEqual('superadmin@barefootnomad.com');
  });
  it('should be able to update the user', () => {
    const user = {
      loading: false,
      token: '',
      error: '',
      data: {
        status: 200,
        updatedUser: {
          biography: 'Live at gisoxi',
          birthDay: '1999-01-01T00:00:00.000Z',
          createdAt: '2020-04-18T09:58:51.478Z',
          currency: 'Rwf',
          department: 'IT',
          email: 'superadmin@barefootnomad.com',
          firstName: 'Moise',
          gender: 'male',
          homeTown: 'Gisozi',
          language: 'Frensh',
          lastName: 'Rwibutso',
          lineManager: 'william.ishimwe@andela.com',
          passport: 'ws846522',
          profileImage:
            'https://res.cloudinary.com/niyo/image/upload/v1589269369/znmfuyjn8y5xwbhaz5ci.jpg',
          role: 'superAdmin',
          updatedAt: '2020-05-12T07:43:06.523Z',
        },
        isLoggedIn: true,
      },
    };
    // console.log(
    //   updateUserProfile({
    //     type: 'UPDATE_USER_PROFILE',
    //     user,
    //   })
    // );
  });
});
