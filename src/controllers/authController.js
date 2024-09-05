import initModels from "../models/init-models.js"
import  sequelize  from '../models/connect.js'
import bcrypt from 'bcrypt';
import { responseData } from '../config/response.js';
import { createToken } from '../config/jwt.js';

const model = initModels(sequelize);

export const signUp = async (req, res) => {
    const { ho_ten, email, mat_khau, tuoi, anh_dai_dien } = req.body;

    try {
        // Kiểm tra email đã tồn tại chưa
        const existingUser = await model.nguoi_dung.findOne({ where: { email } });

        if (existingUser) {
            return responseData("", "Email đã tồn tại!", 409, res);
        }

        // Mã hóa mật khẩu
        const hashedPassword = bcrypt.hashSync(mat_khau, 10);

        // Tạo người dùng mới
        const newUser = {
            email,
            mat_khau: hashedPassword,
            ho_ten,
            tuoi,
            anh_dai_dien
        };
        await model.nguoi_dung.create(newUser)
        // Tạo token cho người dùng mới
        const token = createToken({ id: newUser.nguoi_dung_id, email: newUser.email });

        // Trả về phản hồi với token
        return responseData({
            token,
            user: {
                id: newUser.nguoi_dung_id,
                ho_ten: newUser.ho_ten,
                email: newUser.email
            }
        }, "Đăng ký thành công", 201, res);
    } catch (error) {
        return responseData("", "Lỗi khi đăng ký", 500, res);
    }
};


export const login = async (req, res) => {
  const { email, mat_khau } = req.body;

  try {
    // Tìm người dùng theo email
    const user = await model.nguoi_dung.findOne({
      where: { email }
    });

    if (!user) {
      return responseData("", "Email không tồn tại!", 404, res);
    }

    // So sánh mật khẩu
    const isPasswordValid = bcrypt.compareSync(mat_khau, user.mat_khau);

    if (!isPasswordValid) {
      return responseData("", "Mật khẩu không chính xác!", 401, res);
    }

    // Tạo token cho người dùng
    const token = createToken({ id: user.nguoi_dung_id, email: user.email });

    // Trả về phản hồi với token
    return responseData({
      token,
      user: {
        id: user.nguoi_dung_id,
        ho_ten: user.ho_ten,
        email: user.email
      }
    }, "Đăng nhập thành công", 200, res);
  } catch (error) {
    return responseData("", "Lỗi khi đăng nhập", 500, res);
  }
};
