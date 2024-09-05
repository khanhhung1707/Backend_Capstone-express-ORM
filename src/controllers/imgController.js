
import initModels from "../models/init-models.js"
import { responseData } from '../config/response.js';
import  sequelize  from '../models/connect.js'
import { Op } from 'sequelize';

const model = initModels(sequelize);

export const getImages = async (req, res) => {
    try {
        // Lấy danh sách ảnh từ bảng hinh_anh
        const images = await model.hinh_anh.findAll();

        // Trả về phản hồi với danh sách ảnh
        return responseData(images, "Lấy danh sách ảnh thành công", 200, res);
    } catch (error) {
        return responseData("", "Lỗi khi lấy danh sách ảnh", 500, res);
    }
};

export const searchImagesByName = async (req, res) => {
    try {
        const { name } = req.query;

        // Tìm kiếm ảnh theo tên
        const images = await model.hinh_anh.findAll({
            where: {
                ten_hinh: {
                    [Op.like]: `%${name}%`
                }
            }
        });

        // Trả về phản hồi với danh sách ảnh tìm được
        return responseData(images, "Tìm kiếm danh sách ảnh thành công", 200, res);
    } catch (error) {
        return responseData("", "Lỗi khi tìm kiếm danh sách ảnh", 500, res);
    }
};

export const getImageAndCreatorById = async (req, res) => {
    try {
        const { id } = req.params;

        // Tìm ảnh và thông tin người tạo ảnh
        const image = await model.hinh_anh.findOne({
            where: { hinh_id: id },
            include: [{
                model: model.nguoi_dung,
                as:"nguoi_dung",
                attributes: ['ho_ten', 'email', 'tuoi', 'anh_dai_dien']
            }]
        });

        if (!image) {
            return responseData("", "Không tìm thấy ảnh", 404, res);
        }

        // Trả về phản hồi với thông tin ảnh và người tạo ảnh
        return responseData(image, "Lấy thông tin ảnh và người tạo ảnh thành công", 200, res);
    } catch (error) {
        return responseData("", "Lỗi khi lấy thông tin ảnh và người tạo ảnh", 500, res);
    }
};

export const getImagesByUserId = async (req, res) => {
    try {
        const { userId } = req.params;

        // Tìm danh sách ảnh đã tạo theo ID người dùng
        const createdImages = await model.hinh_anh.findAll({
            where: { nguoi_dung_id: userId },
            attributes: ['hinh_id', 'ten_hinh', 'duong_dan', 'mo_ta']
        });

        if (!createdImages.length) {
            return responseData("", "Không tìm thấy ảnh đã tạo", 404, res);
        }

        // Trả về phản hồi với danh sách ảnh đã tạo
        return responseData(createdImages, "Lấy danh sách ảnh đã tạo thành công", 200, res);
    } catch (error) {
        return responseData("", "Lỗi khi lấy danh sách ảnh đã tạo", 500, res);
    }
};

export const deleteImageById = async (req, res) => {
    try {
        const { id } = req.params;

        // Xóa ảnh theo ID
        const result = await model.hinh_anh.destroy({
            where: { hinh_id: id }
        });

        if (result === 0) {
            return responseData("", "Không tìm thấy ảnh để xóa", 404, res);
        }

        return responseData("", "Xóa ảnh thành công", 200, res);
    } catch (error) {
        console.log(error);
        return responseData("", "Lỗi khi xóa ảnh", 500, res);
    }
};

export const addImage = async (req, res) => {
    try {
        const { ten_hinh, duong_dan, mo_ta, nguoi_dung_id } = req.body;

        // Thêm ảnh vào cơ sở dữ liệu
        const newImage = await model.hinh_anh.create({
            ten_hinh,
            duong_dan,
            mo_ta,
            nguoi_dung_id
        });

        // Trả về phản hồi với thông tin ảnh mới thêm
        return responseData(newImage, "Thêm ảnh thành công", 201, res);
    } catch (error) {
        return responseData("", "Lỗi khi thêm ảnh", 500, res);
    }
};