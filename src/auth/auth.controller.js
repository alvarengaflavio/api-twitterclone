import * as authService from './auth.service.js';

export const loginController = async (req, res) => {
  res.send({ message: 'login success!' });
};
