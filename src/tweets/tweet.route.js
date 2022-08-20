import express from 'express';
import { authMiddleware } from '../auth/auth.middleware.js';
import * as tweetController from './tweet.controller.js';

export const router = express.Router();

router.post('/', authMiddleware, tweetController.createTweetController);
router.get('/', authMiddleware, tweetController.findAllTweetsController);
