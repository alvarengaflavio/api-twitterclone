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
    throw new Error('Error creating user no selfison');
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
  const user = await User.findById(userId);
  return user;
};
