import jwt from 'jsonwebtoken';

const userRole = () => {
  const userToken = localStorage.getItem('user-token');
  return jwt.decode(userToken).role;
};

export default userRole;
