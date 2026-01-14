import express from 'express';
import subjectsRouter from './routes/subjects';

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

app.use('/api/subjects', subjectsRouter);

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Express + TypeScript server is running.' });
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
