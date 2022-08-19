import * as userService from './user.service.js';

export const findAllUserController = async (req, res) => {
  try {
    const users = await userService.findAllUserService();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const createUserController = async (req, res) => {
  try {
    const createUser = { ...req.body };
    if (
      !createUser.username ||
      !createUser.name ||
      !createUser.email ||
      !createUser.password
    ) {
      throw new Error(
        'Missing fields! Required: username, name, email, password and avatar.',
      );
    }

    const findUser = await userService.findByEmailUserService(createUser.email);
    if (findUser) {
      throw new Error('User already exists!');
    }

    const newUser = await userService.createUserService(createUser);
    delete newUser.password;
    res.status(201).send(newUser);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

export const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await userService.deleteUserService(id);
    if (!deleteUser) {
      throw new Error('User not found!');
    }
    res.status(200).send(deleteUser);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};
