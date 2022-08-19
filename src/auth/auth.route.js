import express from 'express';
import * as authController from './auth.controller.js';

export const router = express.Router();

router.post('/login', authController.loginController);
