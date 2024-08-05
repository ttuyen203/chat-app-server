const UserModel = require("../models/UserModel");

async function searchUser(request, response) {
  try {
    // Lấy thông tin tìm kiếm từ request body
    const { search } = request.body;

    // Tạo một biểu thức chính quy từ chuỗi tìm kiếm, không phân biệt chữ hoa chữ thường và tìm toàn bộ
    const query = new RegExp(search, "i", "g");

    // Tìm kiếm người dùng dựa trên tên hoặc email khớp với biểu thức chính quy
    const user = await UserModel.find({
      $or: [{ name: query }, { email: query }],
    }).select("-password");

    return response.json({
      message: "Toàn bộ người dùng",
      data: user,
      success: true,
    });
  } catch (error) {
    // Xử lý lỗi
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = searchUser;
