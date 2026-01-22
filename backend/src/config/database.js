import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    const mongoUri =
      process.env.MONGODB_URI ||
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

    await mongoose.connect(mongoUri);

    if (process.env.NODE_ENV === "development") {
      console.log("✓ MongoDB connected successfully");
    }

    return mongoose.connection;
  } catch (error) {
    console.error("✗ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
