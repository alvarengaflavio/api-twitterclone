import * as authService from './auth.service.js';
import bcrypt from 'bcryptjs';

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authService.loginService(email);
    if (!user) throw new Error('User not found');

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) throw new Error('Password does not match');

    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    return res.status(400).send({
      message: err.message,
    });
  }
};
