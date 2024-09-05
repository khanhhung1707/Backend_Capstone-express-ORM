import initModels from "../models/init-models.js"
import { responseData } from '../config/response.js';
import  sequelize  from '../models/connect.js'

const model = initModels(sequelize);

export const checkImageSavedById = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.query; // Giả sử bạn gửi userId trong query của request

        // Kiểm tra xem ảnh đã được lưu bởi người dùng hay chưa
        const savedImage = await model.luu_anh.findOne({
            where: {
                hinh_id: id,
                nguoi_dung_id: userId
            }
        });

        if (!savedImage) {
            return responseData("", "Ảnh chưa được lưu", 404, res);
        }

        // Trả về phản hồi với thông tin ảnh đã được lưu
        return responseData(savedImage, "Ảnh đã được lưu", 200, res);
    } catch (error) {
        return responseData("", "Lỗi khi kiểm tra ảnh đã lưu", 500, res);
    }
};

export const getSavedImagesByUserId = async (req, res) => {
    try {
        const { userId } = req.params;

        // Tìm danh sách ảnh đã lưu theo ID người dùng
        const savedImages = await model.luu_anh.findAll({
            where: { nguoi_dung_id: userId },
            include: [{
                model: model.hinh_anh,
                as: 'hinh', // Đảm bảo rằng alias khớp với alias trong định nghĩa mối quan hệ
                attributes: ['hinh_id', 'ten_hinh', 'duong_dan', 'mo_ta']
            }]
        });

        if (!savedImages.length) {
            return responseData("", "Không tìm thấy ảnh đã lưu", 404, res);
        }

        // Trả về phản hồi với danh sách ảnh đã lưu
        return responseData(savedImages, "Lấy danh sách ảnh đã lưu thành công", 200, res);
    } catch (error) {
        return responseData("", "Lỗi khi lấy danh sách ảnh đã lưu", 500, res);
    }
};