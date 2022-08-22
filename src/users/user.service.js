import { User } from './user.js';

export const findAllUserService = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw new Error('Error finding all users');
  }
};

export const createUserService = async createUser => {
  try {
    const user = new User({ ...createUser });
    const newUser = await User.create(user);
    return newUser.toJSON();
  } catch (err) {
    throw new Error('Error creating user');
  }
};

export const deleteUserService = async id => {
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
  } catch (err) {
    throw new Error('Error deleting user');
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////////
export const findByEmailUserService = async email => {
  const user = await User.findOne({ email });
  return user;
};

export const findByIdUserService = async userId => {
  const foundUser = await User.findById(userId);
  return foundUser;
};

export const validateEmail = email => {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
};
