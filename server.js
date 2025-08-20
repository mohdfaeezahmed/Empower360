import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler.js';
import categoriesRouter from './routes/categories.js';
import policiesRouter from './routes/policies.js';
import { pool } from './db.js';

dotenv.config();
const app = express();

app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.get('/api/health', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS two');
    res.json({ ok: true, db: rows[0].two === 2 });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.use('/api/categories', categoriesRouter);
app.use('/api/policies', policiesRouter);

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Empower360 backend listening on port ${port}`);
});
