import express from 'express';
import { checkImageSavedById, getSavedImagesByUserId } from '../controllers/saveImageController.js';
import { middleWareToken } from '../config/jwt.js';

const saveImageRoutes = express.Router();

// Route kiểm tra xem ảnh đã được lưu hay chưa theo ID ảnh
saveImageRoutes.get('/kiem_tra_luu_anh/:id',middleWareToken,  checkImageSavedById);

// Route GET để lấy danh sách ảnh đã lưu theo ID người dùng
saveImageRoutes.get('/luu_anh/nguoi_dung/:userId', middleWareToken, getSavedImagesByUserId);

export default saveImageRoutes;