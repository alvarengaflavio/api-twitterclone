import { Router } from 'express';
import { User } from './user.js';
import * as userController from './user.controller.js';

export const router = Router();

router.get('/', userController.findAllUserController);
router.post('/', userController.createUserController);
router.delete('/:id', userController.deleteUserController);
