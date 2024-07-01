import express from 'express';
import cors from 'cors';
import todoRouter from './routes/todoRouter';

const app = express();

app.use(cors());
app.use(express.json());

// Routers //
app.use('/api/tasks', todoRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
