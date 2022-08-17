const { connect } = require('mongoose');

const connectToDatabase = async () => {
  try {
    console.log('Connecting to database...');
    await connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }).then(() => console.log('MongoDB connected!'));
  } catch (err) {
    console.log(`Error connecting to database: ${err}`);
  }
};

module.exports = connectToDatabase;
