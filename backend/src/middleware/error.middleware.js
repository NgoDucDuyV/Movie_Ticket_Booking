import { AppError } from "../utils/error.util.js";
import { errorResponse } from "../utils/response.util.js";

/**
 * Global Error Handling Middleware
 * @param {Error} err - Error object
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 * @param {Function} next - Express next
 */
const errorHandler = (err, req, res, next) => {
  // Log error
  console.error("Error:", {
    message: err.message,
    stack: err.stack,
    timestamp: new Date().toISOString(),
    url: req.originalUrl,
    method: req.method,
  });

  // Handle AppError instances
  if (err instanceof AppError) {
    return errorResponse(res, err.message, err.statusCode, err.details);
  }

  // Handle Sequelize validation errors
  if (err.name === "SequelizeValidationError") {
    const details = err.errors.map((e) => ({
      field: e.path,
      message: e.message,
    }));
    return errorResponse(res, "Validation error", 400, details);
  }

  // Handle Sequelize unique constraint errors
  if (err.name === "SequelizeUniqueConstraintError") {
    const field = err.errors[0]?.path;
    return errorResponse(res, `${field} already exists`, 409);
  }

  // Handle JWT errors
  if (err.name === "JsonWebTokenError") {
    return errorResponse(res, "Invalid token", 401);
  }

  if (err.name === "TokenExpiredError") {
    return errorResponse(res, "Token expired", 401);
  }

  // Default error
  return errorResponse(res, "Internal server error", 500);
};

/**
 * 404 Not Found Middleware
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 */
const notFoundHandler = (req, res) => {
  errorResponse(res, `Route ${req.originalUrl} not found`, 404);
};

export { errorHandler, notFoundHandler };
