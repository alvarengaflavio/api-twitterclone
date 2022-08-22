import { Router } from 'express';
import { authMiddleware } from '../auth/auth.middleware.js';
import * as tweetController from './tweet.controller.js';

export const router = Router();

// testar se realmente é /create ou só / mesmo
router.post('/create', authMiddleware, tweetController.createTweetController);
router.get('/', authMiddleware, tweetController.findAllTweetsController);
router.get('/search', authMiddleware, tweetController.searchTweetController);
