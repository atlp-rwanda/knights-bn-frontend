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
  pendingRequests,
  requestAction,
  createAccommodation,
  getAccommodations,
  bookAccommodation,
  getNotifications,
  markAllAsRead,
  chats,
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
      }).payload.payload.email,
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
      }).payload.key,
    ).toEqual(undefined);
  });

  it('should be able to make handleError action', () => {
    expect(
      handleError({
        type: 'VALIDATE_LOGIN_INPUT',
        error: 'error',
      }).error.error,
    ).toEqual('error');
  });

  it('should be able to make setLoadingStatus action', () => {
    expect(
      setLoadingStatus({
        type: 'SET_LOADING_STATUS',
        status: '',
      }).status.status,
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
      }),
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
      }).payload.user.data.user.email,
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
    expect(
      updateUserProfile({
        type: 'UPDATE_USER_PROFILE',
        user,
      }).payload.user.data.updatedUser.homeTown,
    ).toEqual('Gisozi');
  });

  it('should be able view pending request', () => {
    const requests = {
      isLoggedIn: true,
      message: 'Pending requests',
      data: [
        {
          id: 2,
          requesterId: 4,
          managerId: 2,
          type: 'two_way',
          reason: 'partner engagment',
          origin: 'Kigali',
          destination: 'Kampala',
          status: 'pending',
          departureDate: '2020-05-01T00:00:00.000Z',
          returnDate: '2020-07-01T00:00:00.000Z',
          cities: null,
          createdAt: '2020-04-18T09:58:51.511Z',
          updatedAt: '2020-04-18T09:58:51.511Z',
          Comments: [],
        },
        {
          id: 6,
          requesterId: 12,
          managerId: 2,
          type: 'multi_way',
          reason: 'Having fun',
          origin: 'New york',
          destination: 'East Africa',
          status: 'pending',
          departureDate: '2020-07-04T00:00:00.000Z',
          returnDate: '2020-08-31T00:00:00.000Z',
          cities: [
            {
              name: 'kigali',
              from: '2020-07-04',
              to: '2020-08-31',
            },
            {
              name: 'Nairobi',
              from: '2020-07-04',
              to: '2020-08-31',
            },
          ],
          createdAt: '2020-05-24T08:17:07.387Z',
          updatedAt: '2020-05-24T08:17:07.387Z',
          Comments: [],
        },
        {
          id: 1,
          requesterId: 1,
          managerId: 2,
          type: 'one_way',
          reason: 'partner engagment',
          origin: 'Kigali',
          destination: 'Lagos',
          status: 'pending',
          departureDate: '2020-04-01T00:00:00.000Z',
          returnDate: '2020-06-01T00:00:00.000Z',
          cities: null,
          createdAt: '2020-04-18T09:58:51.511Z',
          updatedAt: '2020-04-18T09:58:51.511Z',
          Comments: [],
        },
      ],
    };
    expect(
      pendingRequests({
        type: 'GET_PENDING_REQUESTS',
        requests,
      }).payload.requests.data[0].reason,
    ).toEqual('partner engagment');
  });
  it('should be able to take an action on request', () => {
    const message = {
      isLoggedIn: true,
      requestId: '6',
      message: 'The request successfully approved',
    };
    expect(
      requestAction({
        type: 'APPROVE_REQUESTS',
        message,
      }).message.message.message,
    ).toEqual('The request successfully approved');
  });
  it('create accommodation', () => {
    const accommodation = {
      name: 'Serena',
    };
    const expectedResults = {
      type: types.CREATE_ACCOMMODATION,
      payload: {
        name: 'Serena',
      },
    };
    expect(createAccommodation(accommodation)).toEqual(expectedResults);
  });
  it('returns accommodations', () => {
    const accommodations = {
      accommodationName: 'Star apart',
      pricePerNight: '20',
    };
    const expectedResults = {
      type: types.GET_ACCOMMODATIONS,
      payload: {
        accommodationName: 'Star apart',
        pricePerNight: '20',
      },
    };
    expect(getAccommodations(accommodations)).toEqual(expectedResults);
  });
  it('returns response after booking', () => {
    const payload = {
      message: 'Successfully booked',
      statusCode: '200',
    };
    const expectedResults = {
      type: types.BOOK_ACCOMMODATION,
      payload: {
        message: 'Successfully booked',
        statusCode: '200',
      },
    };
    expect(bookAccommodation(payload)).toEqual(expectedResults);
  });
  it('should be able view non read notifications', () => {
    const requests = {
      isLoggedIn: true,
      message: 'Your notifications',
      notifications: [
        {
          id: 6,
          requesterId: 12,
          managerId: 2,
          status: 'non_read',
          owner: 'requester',
          message: 'The request has been approved.',
          type: 'approved_request',
          createdAt: '2020-05-26T16:27:37.756Z',
          updatedAt: '2020-05-26T16:27:37.756Z',
        },
        {
          id: 10,
          requesterId: 12,
          managerId: 2,
          status: 'non_read',
          owner: 'requester',
          message: 'The request has been approved.',
          type: 'approved_request',
          createdAt: '2020-05-26T16:58:20.381Z',
          updatedAt: '2020-05-26T16:58:20.381Z',
        },
      ],
    };
    expect(
      getNotifications({
        type: 'GET_NOTIFICATION',
        requests,
      }).payload.requests.message,
    ).toEqual('Your notifications');
  });
  it('should be able to mark all notifications as read', () => {
    const response = {
      isLoggedIn: true,
      message: 'You have no unread notification',
    };
    expect(
      markAllAsRead({
        type: 'MARK_READ',
        response,
      }).message.response.message,
    ).toEqual('You have no unread notification');
  });
  it('test chat action', () => {
    const payload = {
      message: 'Hello',
      token: 'abc',
    };
    const expectedResults = {
      type: types.USERS_CHATS,
      payload: {
        message: 'Hello',
        token: 'abc',
      },
    };
    expect(chats(payload)).toEqual(expectedResults);
  });
});
