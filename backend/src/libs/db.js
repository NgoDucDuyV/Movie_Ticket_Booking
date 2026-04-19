import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log("Kết nối CSDL thành công!");
  } catch (error) {
    console.log("Lỗi kết nối CSDL", error);
  }
};
