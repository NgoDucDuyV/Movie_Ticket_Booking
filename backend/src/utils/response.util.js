/**
 * Success Response Formatter
 * @param {Object} res - Express response object
 * @param {any} data - Response data
 * @param {number} statusCode - HTTP status code (default 200)
 * @param {string} message - Optional success message
 * @returns {Object} JSON response
 */
export const successResponse = (
  res,
  data = null,
  statusCode = 200,
  message = null,
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

/**
 * Error Response Formatter
 * @param {Object} res - Express response object
 * @param {string} message - Error message
 * @param {number} statusCode - HTTP status code (default 500)
 * @param {Object|Array} details - Optional error details
 * @returns {Object} JSON response
 */
export const errorResponse = (
  res,
  message,
  statusCode = 500,
  details = null,
) => {
  return res.status(statusCode).json({
    success: false,
    error: {
      code: getErrorCode(statusCode),
      message,
      details,
    },
  });
};

/**
 * Get error code based on HTTP status
 * @param {number} statusCode - HTTP status code
 * @returns {string} Error code
 */
export const getErrorCode = (statusCode) => {
  const codes = {
    400: "VALIDATION_ERROR",
    401: "UNAUTHORIZED",
    403: "FORBIDDEN",
    404: "NOT_FOUND",
    409: "CONFLICT",
    500: "INTERNAL_ERROR",
  };
  return codes[statusCode] || "UNKNOWN_ERROR";
};
