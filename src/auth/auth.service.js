import { User } from '../users/user.js';

export const loginService = async email =>
  User.findOne({ email: email }).select('+password');
