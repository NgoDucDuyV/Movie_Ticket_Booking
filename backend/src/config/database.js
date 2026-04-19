import mongoose from "mongoose";
import "dotenv/config";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return mongoose.connection;
  }

  try {
    const mongoUri =
      process.env.MONGODB_URI ||
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

    const db = await mongoose.connect(mongoUri);
    isConnected = db.connections[0].readyState;
    
    if (process.env.NODE_ENV === "development") {
      console.log("✓ MongoDB connected successfully");
    }

    return mongoose.connection;
  } catch (error) {
    console.error("✗ MongoDB connection error:", error.message);
    // Don't exit in serverless, let the request fail
    if (process.env.NODE_ENV !== "production") {
      process.exit(1);
    }
    throw error;
  }
};

export default connectDB;
