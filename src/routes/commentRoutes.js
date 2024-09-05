import express from 'express';
import {  getCommentsByImageId, saveComment } from '../controllers/commentController.js';
import { middleWareToken } from '../config/jwt.js';

const commentRoutes = express.Router();

// Route get thông tin bình luận theo ID ảnh
commentRoutes.get('/binh_luan/hinh_anh/:id', middleWareToken, getCommentsByImageId);

// Route POST để lưu thông tin bình luận
commentRoutes.post('/binh_luan', middleWareToken, saveComment);

export default commentRoutes;