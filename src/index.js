import {} from 'dotenv/config';
import  express  from 'express';
import cors from 'cors';
import { connectToDatabase } from './database/database.js';

const port = process.env.PORT ?? process.env.PORT_DEV;
const app = express();

connectToDatabase();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
