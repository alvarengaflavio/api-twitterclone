import { Tweet } from './Tweet.js';

export const createTweetService = async (userId, message) => {
  const tweet = new Tweet({
    user: userId,
    message: message,
    likes: [],
    replice: [],
    retweet: [],
  });
  const newTweet = await Tweet.create(tweet);
  return newTweet;
};
