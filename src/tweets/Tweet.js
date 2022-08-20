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
  comments: { type: Array, required: true },
  retweets: { type: Array, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Tweet = model('Tweet', TweetSchema);
