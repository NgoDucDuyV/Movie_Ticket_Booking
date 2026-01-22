export default {
  // User Roles
  ROLES: {
    ADMIN: "ADMIN",
    USER: "USER",
  },

  // User Status
  USER_STATUS: {
    ACTIVE: "ACTIVE",
    BLOCKED: "BLOCKED",
  },

  // Movie Status
  MOVIE_STATUS: {
    SHOWING: "SHOWING",
    COMING_SOON: "COMING_SOON",
    STOPPED: "STOPPED",
  },

  // Movie Type
  MOVIE_TYPE: {
    "2D": "2D",
    "3D": "3D",
  },

  // Seat Type
  SEAT_TYPE: {
    STANDARD: "STANDARD",
    VIP: "VIP",
    SWEETBOX: "SWEETBOX",
  },

  // Seat Status
  SEAT_STATUS: {
    AVAILABLE: "AVAILABLE",
    BOOKED: "BOOKED",
    HELD: "HELD",
  },

  // Booking Status
  BOOKING_STATUS: {
    PENDING: "PENDING",
    COMPLETED: "COMPLETED",
    CANCELLED: "CANCELLED",
    EXPIRED: "EXPIRED",
    CHECKED_IN: "CHECKED_IN",
  },

  // Payment Status
  PAYMENT_STATUS: {
    PENDING: "PENDING",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    REFUNDED: "REFUNDED",
  },

  // Payment Method
  PAYMENT_METHOD: {
    VNPAY: "VNPAY",
    VIETQR: "VIETQR",
    PAYPAL: "PAYPAL",
    MOMO: "MOMO",
  },

  // Day Type
  DAY_TYPE: {
    REGULAR: "REGULAR",
    WEEKEND: "WEEKEND",
    HOLIDAY: "HOLIDAY",
  },

  // News Status
  NEWS_STATUS: {
    PUBLISHED: "PUBLISHED",
    DRAFT: "DRAFT",
    ARCHIVED: "ARCHIVED",
  },

  // Seat Lock Duration
  SEAT_LOCK_MINUTES: parseInt(process.env.SEAT_LOCK_MINUTES) || 5,

  // Pagination
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
};
