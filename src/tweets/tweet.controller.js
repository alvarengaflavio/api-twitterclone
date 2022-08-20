import * as tweetService from './tweet.service.js';

export const createTweetController = async (req, res) => {
  try {
    const { message } = req.body;
    const { userId } = req;
    console.log(message, userId);
    if (!message)
      return res.status(400).send({ message: 'Message is required' });
    if (!userId) return res.status(400).send({ message: 'UserId is required' });

    const { id } = await tweetService.createTweetService(userId, message);
    return res
      .status(201)
      .send({ message: 'Tweet created', tweet: { id, message } });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
