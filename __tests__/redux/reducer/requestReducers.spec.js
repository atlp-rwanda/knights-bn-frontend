import requestReducer from '../../../src/redux/reducers/requestReducer';
import statsReducer from '../../../src/redux/reducers/statsReducer';

import * as types from '../../../src/redux/actions/actionTypes';

import {
  pendingRequests,
  requestAction,
  allMyrequests,
} from '../../../src/redux/actions/requestActions';

describe('Test requestsReducer test', () => {
  it('View pending requests', () => {
    const requests = {
      type: types.GET_PENDING_REQUESTS,
      isLoggedIn: true,
      message: 'Pending requests',
      pendingRequests: [
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
    expect(requestReducer({}, pendingRequests({ requests }))).toBeTruthy();
    expect(
      requestReducer({}, pendingRequests({ requests })).data.requests
        .pendingRequests[1].reason,
    ).toBe('Having fun');
  });
  it('requests actions', () => {
    const message = {
      message: 'The request successfully rejected',
      requestId: '4',
      isLoggedIn: true,
    };
    expect(requestReducer({}, requestAction({ message }))).toBeTruthy();
    expect(
      requestReducer({}, requestAction({ message })).approvalData.message
        .message,
    ).toBe('The request successfully rejected');
  });
  it('should return current state by default', () => {
    const action = {};
    const initialState = {
      loading: false,
      token: '',
      error: '',
    };
    expect(requestReducer(initialState, action)).toEqual(initialState);
  });
  it('should return current state by default', () => {
    const action = {};
    const initialState = {
      approvalData: {
        message: '',
      },
      loading: false,
      token: '',
      error: '',
      data: {
        message: '',
      },
    };
    expect(requestReducer(null, action)).toEqual(initialState);
  });
  it('Return initial state', () => {
    const initialState = {
      myRequests: {
        message: '',
        allMyRequest: [],
      },
    };
    expect(statsReducer(undefined, {})).toEqual(initialState);
  });
  it('Return all requests action', () => {
    const initialState = {
      myRequests: {
        message: '',
        allMyRequest: [],
      },
    };
    const action = {
      type: types.MY_REQUESTS,
      data: {
        allMyRequest: [
          {
            origin: 'kigali',
          },
        ],
      },
    };
    expect(statsReducer(initialState, allMyrequests(action)).data.allMyRequest[0].origin).toEqual('kigali');
  });
});
