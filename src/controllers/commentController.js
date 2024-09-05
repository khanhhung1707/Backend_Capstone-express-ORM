import initModels from "../models/init-models.js"
import { responseData } from '../config/response.js';
import  sequelize  from '../models/connect.js'

const model = initModels(sequelize);

export const getCommentsByImageId = async (req, res) => {
    try {
        const { id } = req.params;

        // Tìm bình luận theo ID ảnh
        const comments = await model.binh_luan.findAll({
            where: { hinh_id: id },
            include: [{
                model: model.nguoi_dung,
                as: 'nguoi_dung', // Đảm bảo rằng alias khớp với alias trong định nghĩa mối quan hệ
                attributes: ['ho_ten', 'email', 'tuoi', 'anh_dai_dien']
            }]
        });

        if (!comments.length) {
            return responseData("", "Không tìm thấy bình luận", 404, res);
        }

        // Trả về phản hồi với thông tin bình luận
        return responseData(comments, "Lấy thông tin bình luận thành công", 200, res);
    } catch (error) {
        return responseData("", "Lỗi khi lấy thông tin bình luận", 500, res);
    }
};

export const saveComment = async (req, res) => {
    try {
        const { hinh_id, noi_dung, nguoi_dung_id } = req.body;

        // Tạo bình luận mới
        const newComment = await model.binh_luan.create({
            hinh_id,
            noi_dung,
            nguoi_dung_id,
            ngay_binh_luan: new Date()
        });

        // Trả về phản hồi với thông tin bình luận mới
        return responseData(newComment, "Lưu bình luận thành công", 201, res);
    } catch (error) {
        return responseData("", "Lỗi khi lưu bình luận", 500, res);
    }
};