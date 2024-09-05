import express from 'express';
import { signUp, login  } from '../controllers/authController.js';

const authRouter = express.Router();

// Route đăng ký
authRouter.post('/signup', signUp);
// Route đăng nhập
authRouter.post('/login', login);

export default authRouter;