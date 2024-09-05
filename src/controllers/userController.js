import initModels from "../models/init-models.js";
import { responseData } from '../config/response.js';
import sequelize from '../models/connect.js';

const model = initModels(sequelize);

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        // Tìm người dùng theo ID
        const user = await model.nguoi_dung.findOne({
            where: { nguoi_dung_id: id },
            attributes: ['nguoi_dung_id', 'email', 'ho_ten', 'tuoi', 'anh_dai_dien']
        });

        if (!user) {
            return responseData("", "Không tìm thấy người dùng", 404, res);
        }

        // Trả về phản hồi với thông tin người dùng
        return responseData(user, "Lấy thông tin người dùng thành công", 200, res);
    } catch (error) {
        return responseData("", "Lỗi khi lấy thông tin người dùng", 500, res);
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { ho_ten, email, tuoi, anh_dai_dien } = req.body;

        // Tìm người dùng theo ID và cập nhật thông tin
        const [updated] = await model.nguoi_dung.update({
            ho_ten,
            email,
            tuoi,
            anh_dai_dien
        }, {
            where: { nguoi_dung_id: id }
        });

        if (updated) {
            const updatedUser = await model.nguoi_dung.findOne({ where: { nguoi_dung_id: id } });
            return responseData(updatedUser, "Cập nhật thông tin cá nhân thành công", 200, res);
        }

        return responseData("", "Không tìm thấy người dùng", 404, res);
    } catch (error) {
        return responseData("", "Lỗi khi cập nhật thông tin cá nhân", 500, res);
    }
};