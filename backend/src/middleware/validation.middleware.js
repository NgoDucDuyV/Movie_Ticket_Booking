import { ValidationError } from "../utils/error.util.js";

/**
 * Request Validation Middleware using Joi
 * @param {Object} schema - Joi validation schema
 * @returns {Function} Middleware function
 */
export const validateRequest = (schema) => {
  return (req, res, next) => {
    try {
      // Validate request body, params, and query
      const { error, value } = schema.validate(
        {
          body: req.body,
          params: req.params,
          query: req.query,
        },
        {
          abortEarly: false,
          stripUnknown: true,
        },
      );

      if (error) {
        const details = error.details.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        }));
        throw new ValidationError("Validation failed", details);
      }

      // Replace request data with validated data
      req.body = value.body;
      req.params = value.params;
      req.query = value.query;

      next();
    } catch (err) {
      next(err);
    }
  };
};
