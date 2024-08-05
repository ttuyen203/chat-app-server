const getUserDetailFromToken = require("../helpers/getUserDetailFromToken");

async function userDetail(request, response) {
  try {
    const token = request.cookies.token || "";

    const user = await getUserDetailFromToken(token);

    return response.status(200).json({
      message: "Thông tin người dùng",
      data: user,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = userDetail;
