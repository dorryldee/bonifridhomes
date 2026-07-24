import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDb } from './db';
import inquiriesRouter from './routes/inquiries';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for frontend client integrations
app.use(cors());

// Parse incoming request JSON payloads
app.use(express.json());

// Initialize SQLite database
initDb()
  .then(() => {
    console.log('SQLite database initialized successfully.');
  })
  .catch((err) => {
    console.error('Failed to initialize SQLite database:', err);
  });

// Mount modular REST API routes
app.use('/api/inquiries', inquiriesRouter);

// Basic health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Bonifrid Homes Contact Backend is running smoothly.' });
});

// Start Express Listener
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
