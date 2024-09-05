/**
 * @swagger
 * /signup:
 *   post:
 *     description: Đăng ký người dùng mới
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Đăng ký thành công
 */

/**
 * @swagger
 * /login:
 *   post:
 *     description: Đăng nhập người dùng
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Đăng nhập thành công
 */

/**
 * @swagger
 * /binh_luan/hinh_anh/{id}:
 *   get:
 *     description: Lấy thông tin bình luận theo ID ảnh
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /binh_luan:
 *   post:
 *     description: Lưu thông tin bình luận
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               imageId:
 *                 type: string
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Bình luận đã được lưu
 */

/**
 * @swagger
 * /hinh_anh:
 *   get:
 *     description: Lấy danh sách hình ảnh
 *     tags: [Images]
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /tim_kiem_hinh_anh:
 *   get:
 *     description: Tìm kiếm hình ảnh theo tên
 *     tags: [Images]
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /hinh_anh/{id}:
 *   get:
 *     description: Lấy thông tin ảnh và người tạo ảnh bằng ID ảnh
 *     tags: [Images]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /hinh_anh/nguoi_dung/{userId}:
 *   get:
 *     description: Lấy danh sách ảnh đã tạo theo ID người dùng
 *     tags: [Images]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /hinh_anh/{id}:
 *   delete:
 *     description: Xóa hình ảnh theo ID ảnh
 *     tags: [Images]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /hinh_anh:
 *   post:
 *     description: Thêm hình ảnh
 *     tags: [Images]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ten_hinh:
 *                 type: string
 *               duong_dan:
 *                 type: string
 *               mo_ta:
 *                 type: string
 *               nguoi_dung_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Thành công
 */

/**
 * @swagger
 * /kiem_tra_luu_anh/{id}:
 *   get:
 *     description: Kiểm tra xem ảnh đã được lưu hay chưa theo ID ảnh
 *     tags: [Saved Images]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /luu_anh/nguoi_dung/{userId}:
 *   get:
 *     description: Lấy danh sách ảnh đã lưu theo ID người dùng
 *     tags: [Saved Images]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /nguoi_dung/{id}:
 *   get:
 *     description: Lấy thông tin người dùng theo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /nguoi_dung/{id}:
 *   put:
 *     description: Cập nhật thông tin người dùng
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ho_ten:
 *                 type: string
 *               email:
 *                 type: string
 *               tuoi:
 *                 type: number
 *               anh_dai_dien:
 *                 type: string
 *     responses:
 *       200:
 *         description: Thành công
 */
