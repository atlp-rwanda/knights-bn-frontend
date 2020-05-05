import { resetUserPassword } from '../../../../src/redux/actions/index';

describe('actionCreator', () => {
  it('Test reset password actions creator', () => {
    expect(resetUserPassword('success')).toEqual({ type: 'RESET_PASSWORD', payload: 'success' });
  });
});
