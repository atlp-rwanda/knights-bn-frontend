import React from 'react';
import { shallow } from '../setupTests';
import SocialLogin from '../src/components/SocialLogin';
import UserInfo from '../src/helpers/UserInfo';
import Login from '../src/views/Login';

describe('testing Social Login', () => {
  it('Login should render correctly in "debug" mode without', () => {
    const component = shallow(<Login debug />);

    expect(component).toMatchSnapshot();
  });

  it('SocialLogin should render correctly in "debug" mode', () => {
    const component = shallow(<SocialLogin debug />);

    expect(component).toMatchSnapshot();
  });

  it('UserInfo should render correctly in "debug" mode', () => {
    const component = shallow(<UserInfo debug />);
    expect(component).toMatchSnapshot();
  });
  it('should filter the user informaation from search and save it correctly ', () => {
    const props = {
      location: {
        pathname: '/userinfo/',
        search:
          '?data=%7B"user":%7B"id":12,"firstName":"Niyonsenga","lastName":"Eric","gender":"male","email":"niyeric11@gmail.com","passport":"12345678","password":"$2b$10$Auc8QIr7B26kMEikqxvlOOzBx3XNTi3sNjadNreP5nc19A4D2n0H.","method":null,"clientId":null,"lineManager":null,"birthDay":null,"language":null,"currency":null,"homeTown":null,"role":null,"department":null,"biography":null,"profileImage":null,"createdAt":"2020-04-18T10:06:42.206Z","updatedAt":"2020-04-18T10:09:34.053Z"%7D,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImVtYWlsIjoibml5ZXJpYzExQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6Ik5peW9uc2VuZ2EiLCJsYXN0TmFtZSI6IkVyaWMiLCJyb2xlIjpudWxsLCJpYXQiOjE1ODg1ODg5ODd9.vGGFnCGyw-J8sj-D5ZaeqeZU8dBZM3SwVpX9EhlRmYk"%7D',
        hash: '',
        state: undefined,
      },
    };
    const component = shallow(<UserInfo {...props} />);
    expect(component.text().includes('Request loading error')).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
