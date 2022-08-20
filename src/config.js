import dotenv from 'dotenv';
// import {} from 'dotenv/config';

// if (process.env.NODE_ENV !== 'production') {
//   import('dotenv').then(dotenv => {
//     dotenv.config();
//     console.log('dotenv loaded');
//   });
// }

if (process.env.NODE_ENV !== 'production') dotenv.config();

const exportedAPI =
  process.env.NODE_ENV === 'production' ? process.env.PORT_DEV : dotenv;

export default exportedAPI;
