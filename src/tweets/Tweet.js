import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const TweetSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  likes: { type: Array, required: true },
  replice: { type: Array, required: true },
  retweet: { type: Array, required: true },
});

export const Tweet = model('Tweet', TweetSchema);
