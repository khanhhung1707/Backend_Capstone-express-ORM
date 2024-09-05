import express from 'express';
import { getUserById, updateUser } from '../controllers/userController.js';
import { middleWareToken } from '../config/jwt.js';

const userRoutes = express.Router();

// Route GET để lấy thông tin người dùng theo ID
userRoutes.get('/nguoi_dung/:id', middleWareToken, getUserById);

//Route PUT chỉnh sửa thông tin người dùng
userRoutes.put('/nguoi_dung/:id', middleWareToken, updateUser);

export default userRoutes;