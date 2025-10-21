import "dotenv/config";
import express from 'express';
import cors from 'cors';
import router from './routes/router.js';

const app = express();

const PORT = process.env.SERVER_PORT || 3000;

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});