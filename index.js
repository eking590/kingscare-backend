// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
//import userRoutes from './routes/users.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors(
    {
  origin: [
    
    'http://localhost:4000',
    'https://kingscare-frontend-9q1j.vercel.app/'
  ],
  credentials: true
}
));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
//app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.json({
    status: 'running',
    message: 'KINGSCARE Backend API is active for development.',
  });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});