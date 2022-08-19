import {} from 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './database/database.js';
import { router as userRouter } from './users/user.route.js';

const port = process.env.PORT ?? process.env.PORT_DEV;
const app = express();

connectToDatabase();
app.use(cors());
app.use(express.json());

/*      USER ROUTER    */
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
