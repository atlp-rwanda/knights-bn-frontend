import userReducer from '../../../src/redux/reducers/userReducer';
import * as types from '../../../src/redux/actions/actionTypes';
import {
  resetUserPassword,
  userProfile,
  updateUserProfile,
  getNotifications,
  markAllAsRead,
} from '../../../src/redux/actions/actions';

describe('Test userReducer test', () => {
  it('should be able test errorHandle', () => {
    const state = {
      data: {},
      loading: false,
      token: 'abc',
      error: '',
    };
    const action = {
      payload: {
        token: 'abc',
      },
      type: types.USER_LOGIN_SUCCESS,
    };
    expect(userReducer(state, action).data.token).toBe('abc');
  });
  it('reset password', () => {
    expect(userReducer({}, resetUserPassword('successfully'))).toEqual({
      message: 'successfully',
    });
  });
  it('Update User Profile', () => {
    const action = {
      type: types.USER_PROFILE,
      data: {
        isLoggedIn: true,
        status: 200,
        user: {
          biography: 'Catch Me If You Can',
          currency: 'Rwf',
          homeTown: 'Gisozi',
          language: 'Frensh',
          lastName: 'Rwibutso',
        },
      },
    };
    expect(userReducer({}, updateUserProfile({ action }))).toBeTruthy();
    expect(
      userReducer({}, updateUserProfile({ action })).updatedUser.action.data
        .user.biography,
    ).toEqual('Catch Me If You Can');
  });

  it('View user profile', () => {
    const action = {
      type: types.USER_PROFILE,
      data: {
        isLoggedIn: true,
        status: 200,
        user: {
          biography: 'Live at gisoxi',
          birthDay: '1999-01-01T00:00:00.000Z',
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
          createdAt: '2020-04-18T09:58:51.478Z',
        },
      },
    };
    expect(userReducer({}, userProfile({ action }))).toBeTruthy();
    expect(
      userReducer({}, userProfile({ action })).data.action.data.user.language,
    ).toBe('Frensh');
  });
  it('should return current state by default', () => {
    const action = {};
    const initialState = {
      loading: false,
      token: '',
      error: '',
    };
    expect(userReducer(initialState, action)).toEqual(initialState);
  });
  it('test view all reducer', () => {
    const state = {
      loading: true,
    };
    const action = {
      payload: {
        email: 'abc@gmail.com',
      },
      type: types.GET_ALL_USERS,
    };

    const expectedResult = {
      data: {
        email: 'abc@gmail.com',
      },
      loading: true,
    };
    expect(userReducer(state, action)).toEqual(expectedResult);
  });
  it('test view One reducer', () => {
    const state = {
      loading: true,
    };
    const action = {
      payload: {
        email: 'abc@gmail.com',
      },
      type: types.GET_ONE_USER,
    };

    const expectedResult = {
      datas: {
        email: 'abc@gmail.com',
      },
      loading: true,
    };
    expect(userReducer(state, action)).toEqual(expectedResult);
  });
  it('test to update role', () => {
    const state = {
      loading: true,
    };
    const action = {
      payload: {
        email: 'abc@gmail.com',
      },
      type: types.UPDATE_ROLE,
    };

    const expectedResult = {
      data: {
        email: 'abc@gmail.com',
      },
      loading: true,
    };
    expect(userReducer(state, action)).toEqual(expectedResult);
  });
  it('create accommodation', () => {
    const action = {
      type: types.CREATE_ACCOMMODATION,
      payload: {
        accommodation: {},
      },
    };
    const expectedResults = {
      createdAccommodation: {
        accommodation: {},
      },
    };
    expect(userReducer('', action)).toEqual(expectedResults);
  });
  it('retrieve all accommodations ', () => {
    const action = {
      type: types.GET_ACCOMMODATIONS,
      payload: {
        accommodationName: 'A hotel',
        pricePerNight: '20',
      },
    };
    const expectedResults = {
      accommodations: {
        accommodationName: 'A hotel',
        pricePerNight: '20',
      },
    };
    expect(userReducer('', action)).toEqual(expectedResults);
  });
  it('returns response on the created bookings ', () => {
    const action = {
      type: types.BOOK_ACCOMMODATION,
      payload: {
        statusCode: '200',
        message: 'booked successfully',
      },
    };
    const expectedResults = {
      bookedAccommodation: {
        statusCode: '200',
        message: 'booked successfully',
      },
    };
    expect(userReducer('', action)).toEqual(expectedResults);
  });
  it('returns default state if unknown input', () => {
    const action = {};
    const expectedResults = {
      loading: false,
      token: '',
      error: '',
      data: {
        message: '',
      },
      accommodations: '',
    };
    expect(userReducer('', action)).toEqual(expectedResults);
  });
  it('View notifications', () => {
    const notifications = [
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
    ];
    expect(userReducer({}, getNotifications({ notifications }))).toBeTruthy();
    expect(
      userReducer({}, getNotifications({ notifications })).notification[0]
        .message,
    ).toEqual('The request has been approved.');
  });
  it('mark notifications as read', () => {
    const response = {
      isLoggedIn: true,
      message: 'You have no unread notification',
    };
    expect(userReducer({}, markAllAsRead({ response }))).toBeTruthy();
  });
});
