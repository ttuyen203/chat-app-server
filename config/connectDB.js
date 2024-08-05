const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connect to DB");
    });
    connection.on("error", (error) => {
      console.log("Đã có lỗi xảy ra trong mongodb", error);
    });
  } catch (error) {
    console.log("Đã có lỗi xảy ra", error);
  }
}

module.exports = connectDB;
