import express from 'express';
import {  addImage, deleteImageById, getImageAndCreatorById, getImages, getImagesByUserId, searchImagesByName } from '../controllers/imgController.js';
import { middleWareToken } from '../config/jwt.js';

const imgRoutes = express.Router();

// Route get hình ảnh
imgRoutes.get('/hinh_anh', middleWareToken, getImages);

//Route tìm kiếm hình ảnh theo tên
imgRoutes.get('/tim_kiem_hinh_anh', middleWareToken, searchImagesByName);

//Route get thông tin ảnh và người tạo ảnh bằng ID ảnh
imgRoutes.get('/hinh_anh/:id', middleWareToken, getImageAndCreatorById)

// Route GET để lấy danh sách ảnh đã tạo theo ID người dùng
imgRoutes.get('/hinh_anh/nguoi_dung/:userId', middleWareToken, getImagesByUserId);

//Route xóa hình ảnh theo id ảnh
imgRoutes.delete('/hinh_anh/:id', middleWareToken, deleteImageById);

//Route thêm ảnh 
imgRoutes.post('/hinh_anh', middleWareToken, addImage);

export default imgRoutes;