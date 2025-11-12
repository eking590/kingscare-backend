// backend/routes/auth.js
import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import auth from '../middleware/auth.js'; 
import { registerUser, loginUser, getCurrentUser } from '../controllers/authController.js';

const router = express.Router();

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET , {
    expiresIn: '30d',
  });
};

// @desc    Register user
// @route   POST /api/auth/register
router.post('/register', registerUser);

// @desc    Login user
// @route   POST /api/auth/login
router.post('/login', loginUser);

// @desc    Get current user
// @route   GET /api/auth/me
router.get('/me', auth, getCurrentUser);

export default router;