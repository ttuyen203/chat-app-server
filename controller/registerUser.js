const UserModel = require("../models/UserModel");
const bcryptjs = require("bcryptjs");

async function registerUser(request, response) {
  try {
    const { name, email, password, profile_pic } = request.body;

    // Check if email already exists
    const checkEmail = await UserModel.findOne({ email });

    if (checkEmail) {
      return response.status(400).json({
        message: "Email đã được sử dụng bởi người dùng khác",
        error: true,
      });
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashpassword = await bcryptjs.hash(password, salt);

    // Create new user object
    const newUser = new UserModel({
      name,
      email,
      profile_pic,
      password: hashpassword,
    });

    // Save the user
    const userSave = await newUser.save();

    return response.status(201).json({
      message: "Đăng ký thành công",
      data: userSave,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Đăng ký không thành công. Vui lòng thử lại sau.",
      error: true,
    });
  }
}

module.exports = registerUser;
