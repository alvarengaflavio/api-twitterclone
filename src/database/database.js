import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  try {
    console.log('Connecting to database...');
    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => console.log('MongoDB connected!'));
  } catch (err) {
    console.log(`Error connecting to database: ${err}`);
  }
};


