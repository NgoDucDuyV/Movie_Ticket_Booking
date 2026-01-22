/**
 * Custom Error Class
 */
export class AppError extends Error {
  constructor(message, statusCode = 500, code = "INTERNAL_ERROR") {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.timestamp = new Date().toISOString();
  }
}

/**
 * Validation Error
 */
export class ValidationError extends AppError {
  constructor(message, details = null) {
    super(message, 400, "VALIDATION_ERROR");
    this.details = details;
  }
}

/**
 * Not Found Error
 */
export class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(message, 404, "NOT_FOUND");
  }
}

/**
 * Unauthorized Error
 */
export class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized access") {
    super(message, 401, "UNAUTHORIZED");
  }
}

/**
 * Forbidden Error
 */
export class ForbiddenError extends AppError {
  constructor(message = "Access forbidden") {
    super(message, 403, "FORBIDDEN");
  }
}

/**
 * Conflict Error
 */
export class ConflictError extends AppError {
  constructor(message = "Conflict") {
    super(message, 409, "CONFLICT");
  }
}
