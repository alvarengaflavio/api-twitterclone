import { likes } from 'moongose/models/index.js';
import * as tweetService from './tweet.service.js';

export const createTweetController = async (req, res) => {
  try {
    const { message } = req.body;
    const { userId } = req;
    if (!message)
      return res.status(400).send({ message: 'Message is required' });
    if (!userId) return res.status(400).send({ message: 'UserId is required' });

    const { id } = await tweetService.createTweetService(userId, message);
    return res.status(201).send({
      message: `Tweet created!`,
      author: userId,
      tweet: { id, message },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const findAllTweetsController = async (req, res) => {
  try {
    const allTweets = await tweetService.findAllTweetsService();
    if (allTweets.length === 0)
      return res.status(404).send({ message: 'No tweets found' });

    return res.status(200).send({
      results: allTweets.map(tweet => ({
        id: tweet._id,
        message: tweet.message,
        likes: tweet.likes.length,
        comments: tweet.comments.length,
        retweets: tweet.retweets.length,
        createdAt: tweet.createdAt,
        name: tweet.user.name,
        username: tweet.user.username,
        avatar: tweet.user.avatar,
      })),
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
