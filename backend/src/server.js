import "dotenv/config";
import express from "express";
import morgan from "morgan";
import connectDB from "./config/database.js";
import corsMiddleware from "./middleware/cors.middleware.js";
import {
  errorHandler,
  notFoundHandler,
} from "./middleware/error.middleware.js";
import router from "./routes/index.js";
// Initialize Express app
const app = express();
const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV || "development";

// Ensure DB connection for serverless
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    next(error);
  }
});

// ============================================
// 1. MIDDLEWARE
// ============================================

// Request logging
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

// CORS
app.use(corsMiddleware);

// Body parsing
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// ============================================
// 2. ROUTES
// ============================================

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Movie Ticket Booking API",
    version: "1.0.0",
    status: "running",
  });
});

app.use("/api", router);

// ============================================
// 3. ERROR HANDLING
// ============================================

// 404 handler
app.use(notFoundHandler);

// Global error handler (must be last)
app.use(errorHandler);

// ============================================
// 4. DATABASE CONNECTION & SERVER START
// ============================================

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    console.log("✓ Database connected");

    // Start server
    const server = app.listen(PORT, () => {
      console.log(`\n🚀 Server running at http://localhost:${PORT}`);
      console.log(`📝 Environment: ${NODE_ENV}\n`);
    });

    // Graceful shutdown
    process.on("SIGTERM", () => {
      console.log("\n⚠️  SIGTERM received, shutting down gracefully...");
      server.close(() => {
        console.log("✓ Server closed");
        process.exit(0);
      });
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception:", error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("❌ Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

// Export app for Vercel serverless functions
export default app;

// Start server for local development
if (process.env.NODE_ENV !== "production") {
  startServer();
}
