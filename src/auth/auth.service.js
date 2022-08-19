import { User } from '../users/user.js';
import jwt from 'jsonwebtoken';

export const loginService = async email =>
  User.findOne({ email: email }).select('+password');

////////////////////////////////////////////////////////////////////////

export const generateToken = userId => {
  const token = jwt.sign({ Id: userId }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });
  return token;
};
