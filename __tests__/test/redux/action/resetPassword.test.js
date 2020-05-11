import {
  resetUserPassword, setCurentUser, userSignUp, verifyAccount,
} from '../../../../src/redux/actions/index';

describe('actionCreator', () => {
  it('Test reset password actions creator', () => {
    expect(resetUserPassword('success')).toEqual({ type: 'RESET_PASSWORD', payload: 'success' });
  });
  it('set current logged in user', () => {
    expect(setCurentUser('eugene')).toEqual({ type: 'CURRENT_USER', payload: 'eugene' });
  });
  it('signup creator', () => {
    expect(userSignUp('eukigali')).toEqual({ type: 'USER_SIGNUP', payload: 'eukigali' });
  });
  it('signup creator', () => {
    expect(verifyAccount('success')).toEqual({ type: 'VERIFY_ACCOUNT', payload: 'success' });
  });
});
