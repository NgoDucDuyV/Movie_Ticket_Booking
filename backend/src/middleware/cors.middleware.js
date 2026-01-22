import cors from "cors";

/**
 * CORS Configuration
 */
const corsOptions = {
  origin: process.env.CORS_ORIGIN || "http://localhost:3001",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
