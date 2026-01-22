import mongooose from "mongoose";
export const connectDB = async () => {
  try {
    await mongooose.connect(process.env.MONGODB_CONNECTION);
    console.log("Kết lỗi CSDL thành công!");
  } catch (error) {
    console.log("Lỗi kết lỗi CSDL", error);
  }
};
