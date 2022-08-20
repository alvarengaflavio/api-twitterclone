import { Tweet } from './Tweet.js';

export const createTweetService = async (userId, message) => {
  const tweet = new Tweet({
    user: userId,
    message: message,
    likes: [],
    comments: [],
    retweets: [],
  });
  const newTweet = await Tweet.create(tweet);
  return newTweet;
};
