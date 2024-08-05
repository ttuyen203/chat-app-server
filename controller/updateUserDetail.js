const getUserDetailFromToken = require("../helpers/getUserDetailFromToken");
const UserModel = require("../models/UserModel");

async function updateUserDetail(request, response) {
  try {
    const token = request.cookies.token || "";

    const user = await getUserDetailFromToken(token);

    const { name, profile_pic } = request.body;

    const updateUser = await UserModel.updateOne(
      { _id: user._id },
      {
        name,
        profile_pic,
      }
    );

    const userInfomation = await UserModel.findById(user._id);

    return response.json({
      message: "Sửa thông tin thành công",
      data: userInfomation,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = updateUserDetail;
