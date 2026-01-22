# Backend Folder Structure & File Templates

## 1. Complete Backend Directory Tree

```
backend/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   ├── email.js
│   │   ├── payment-gateway.js
│   │   └── constants.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   ├── role.model.js
│   │   ├── movie.model.js
│   │   ├── genre.model.js
│   │   ├── theater.model.js
│   │   ├── screen.model.js
│   │   ├── seat.model.js
│   │   ├── showtime.model.js
│   │   ├── booking.model.js
│   │   ├── booking-seat.model.js
│   │   ├── payment.model.js
│   │   ├── ticket-price.model.js
│   │   ├── news.model.js
│   │   └── favorite.model.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── movie.controller.js
│   │   ├── theater.controller.js
│   │   ├── screen.controller.js
│   │   ├── booking.controller.js
│   │   ├── payment.controller.js
│   │   ├── user.controller.js
│   │   ├── news.controller.js
│   │   ├── seat.controller.js
│   │   ├── admin/
│   │   │   ├── admin.movie.controller.js
│   │   │   ├── admin.theater.controller.js
│   │   │   ├── admin.screen.controller.js
│   │   │   ├── admin.showtime.controller.js
│   │   │   ├── admin.user.controller.js
│   │   │   ├── admin.payment.controller.js
│   │   │   ├── admin.report.controller.js
│   │   │   ├── admin.ticket-price.controller.js
│   │   │   ├── admin.seat.controller.js
│   │   │   └── admin.news.controller.js
│   │
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── movie.service.js
│   │   ├── theater.service.js
│   │   ├── screen.service.js
│   │   ├── booking.service.js
│   │   ├── payment.service.js
│   │   ├── user.service.js
│   │   ├── seat.service.js
│   │   ├── ticket.service.js
│   │   ├── email.service.js
│   │   ├── otp.service.js
│   │   ├── seat-lock.service.js
│   │   ├── report.service.js
│   │   └── pdf-generator.service.js
│   │
│   ├── routes/
│   │   ├── index.js
│   │   ├── auth.routes.js
│   │   ├── movie.routes.js
│   │   ├── theater.routes.js
│   │   ├── screen.routes.js
│   │   ├── booking.routes.js
│   │   ├── payment.routes.js
│   │   ├── user.routes.js
│   │   ├── news.routes.js
│   │   ├── seat.routes.js
│   │   └── admin.routes.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── authorize.middleware.js
│   │   ├── validation.middleware.js
│   │   ├── error.middleware.js
│   │   ├── cors.middleware.js
│   │   └── request-logger.middleware.js
│   │
│   ├── validators/
│   │   ├── auth.validator.js
│   │   ├── movie.validator.js
│   │   ├── theater.validator.js
│   │   ├── booking.validator.js
│   │   ├── payment.validator.js
│   │   ├── user.validator.js
│   │   └── generic.validator.js
│   │
│   ├── utils/
│   │   ├── jwt.util.js
│   │   ├── bcrypt.util.js
│   │   ├── response.util.js
│   │   ├── error.util.js
│   │   ├── date.util.js
│   │   ├── qr-generator.util.js
│   │   ├── seat-selector.util.js
│   │   └── price-calculator.util.js
│   │
│   ├── libs/
│   │   ├── db.js
│   │   ├── email.lib.js
│   │   ├── payment-gateway.lib.js
│   │   ├── pdf-generator.lib.js
│   │   └── cache.lib.js
│   │
│   ├── jobs/
│   │   ├── expire-seat-lock.job.js
│   │   ├── check-payment-status.job.js
│   │   └── scheduler.js
│   │
│   ├── migrations/
│   │   ├── 001-create-roles.js
│   │   ├── 002-create-users.js
│   │   ├── 003-create-genres.js
│   │   ├── 004-create-movies.js
│   │   ├── 005-create-theaters.js
│   │   ├── 006-create-screens.js
│   │   ├── 007-create-seats.js
│   │   ├── 008-create-showtimes.js
│   │   ├── 009-create-bookings.js
│   │   ├── 010-create-booking-seats.js
│   │   ├── 011-create-payments.js
│   │   ├── 012-create-ticket-prices.js
│   │   ├── 013-create-news.js
│   │   └── 014-create-favorites.js
│   │
│   ├── seeders/
│   │   ├── 001-seed-roles.js
│   │   ├── 002-seed-users.js
│   │   ├── 003-seed-genres.js
│   │   └── 004-seed-ticket-prices.js
│   │
│   └── server.js
│
├── tests/
│   ├── unit/
│   │   ├── services/
│   │   │   ├── auth.service.test.js
│   │   │   ├── booking.service.test.js
│   │   │   └── payment.service.test.js
│   │   └── utils/
│   │       ├── jwt.util.test.js
│   │       └── price-calculator.util.test.js
│   │
│   ├── integration/
│   │   ├── auth.integration.test.js
│   │   ├── movie.integration.test.js
│   │   ├── booking.integration.test.js
│   │   └── payment.integration.test.js
│   │
│   └── setup.test.js
│
├── .env
├── .env.example
├── .gitignore
├── .babelrc
├── package.json
├── pnpm-lock.yaml
├── jest.config.js
├── README.md
└── docker-compose.yml (optional)
```

---

## 2. Key File Templates

### 2.1 models/user.model.js
```javascript
const { DataTypes } = require('sequelize');
const db = require('../libs/db');

const User = db.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  last_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  avatar: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('ACTIVE', 'BLOCKED'),
    defaultValue: 'ACTIVE',
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'users',
  timestamps: false,
});

module.exports = User;
```

### 2.2 controllers/movie.controller.js
```javascript
const { Movie, Genre } = require('../models');
const { successResponse, errorResponse } = require('../utils/response.util');
const movieValidator = require('../validators/movie.validator');

class MovieController {
  async getMovies(req, res) {
    try {
      const { page = 1, limit = 20, genre, search } = req.query;
      const offset = (page - 1) * limit;

      const where = {};
      if (search) {
        where.title = { [Op.like]: `%${search}%` };
      }

      const movies = await Movie.findAndCountAll({
        where,
        include: [{ model: Genre, as: 'genre' }],
        limit: parseInt(limit),
        offset,
        order: [['created_at', 'DESC']],
      });

      return successResponse(res, {
        movies: movies.rows,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: movies.count,
          totalPages: Math.ceil(movies.count / limit),
        },
      });
    } catch (error) {
      return errorResponse(res, error.message, 500);
    }
  }

  async getMovieById(req, res) {
    try {
      const { id } = req.params;
      const movie = await Movie.findByPk(id, {
        include: [
          { model: Genre, as: 'genre' },
          { model: Showtime, as: 'showtimes' },
        ],
      });

      if (!movie) {
        return errorResponse(res, 'Movie not found', 404);
      }

      return successResponse(res, movie);
    } catch (error) {
      return errorResponse(res, error.message, 500);
    }
  }

  async createMovie(req, res) {
    try {
      // Validate input
      const { error } = movieValidator.createMovieSchema.validate(req.body);
      if (error) {
        return errorResponse(res, error.details[0].message, 400);
      }

      const movie = await Movie.create(req.body);
      return successResponse(res, movie, 201);
    } catch (error) {
      return errorResponse(res, error.message, 500);
    }
  }

  async updateMovie(req, res) {
    try {
      const { id } = req.params;
      const movie = await Movie.findByPk(id);

      if (!movie) {
        return errorResponse(res, 'Movie not found', 404);
      }

      await movie.update(req.body);
      return successResponse(res, movie);
    } catch (error) {
      return errorResponse(res, error.message, 500);
    }
  }

  async deleteMovie(req, res) {
    try {
      const { id } = req.params;
      const movie = await Movie.findByPk(id);

      if (!movie) {
        return errorResponse(res, 'Movie not found', 404);
      }

      await movie.destroy();
      return successResponse(res, { message: 'Movie deleted successfully' });
    } catch (error) {
      return errorResponse(res, error.message, 500);
    }
  }
}

module.exports = new MovieController();
```

### 2.3 services/booking.service.js
```javascript
const { Booking, BookingSeat, Seat, Showtime } = require('../models');
const seatLockService = require('./seat-lock.service');
const priceCalculator = require('../utils/price-calculator.util');

class BookingService {
  async createBooking(userId, showtimeId, seats) {
    // 1. Validate seats availability
    // 2. Calculate total price
    // 3. Create booking
    // 4. Lock seats for 5 minutes
    // 5. Return booking details
  }

  async releaseExpiredBookings() {
    // 1. Find bookings with expired seats (older than 5 minutes)
    // 2. Release locked seats
    // 3. Update booking status to EXPIRED
  }

  async cancelBooking(bookingId) {
    // 1. Validate booking status
    // 2. Check if showtime hasn't started
    // 3. Release seats
    // 4. Create refund request
    // 5. Update booking status
  }

  async getBookingDetails(bookingId) {
    // Return booking with all details
  }
}

module.exports = new BookingService();
```

### 2.4 routes/auth.routes.js
```javascript
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authValidator = require('../validators/auth.validator');
const { validateRequest } = require('../middleware/validation.middleware');

router.post(
  '/register',
  validateRequest(authValidator.registerSchema),
  authController.register
);

router.post(
  '/login',
  validateRequest(authValidator.loginSchema),
  authController.login
);

router.post(
  '/verify-otp',
  validateRequest(authValidator.verifyOtpSchema),
  authController.verifyOtp
);

router.post(
  '/refresh-token',
  authController.refreshToken
);

module.exports = router;
```

### 2.5 middleware/auth.middleware.js
```javascript
const jwt = require('jsonwebtoken');
const { errorResponse } = require('../utils/response.util');

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return errorResponse(res, 'No token provided', 401);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return errorResponse(res, 'Invalid token', 401);
  }
};

module.exports = authMiddleware;
```

### 2.6 middleware/authorize.middleware.js
```javascript
const { errorResponse } = require('../utils/response.util');

const authorize = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return errorResponse(res, 'Unauthorized', 401);
    }

    if (!roles.includes(req.user.role)) {
      return errorResponse(res, 'Forbidden', 403);
    }

    next();
  };
};

module.exports = authorize;
```

### 2.7 utils/response.util.js
```javascript
const successResponse = (res, data, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    data,
  });
};

const errorResponse = (res, message, statusCode = 500, details = null) => {
  return res.status(statusCode).json({
    success: false,
    error: {
      message,
      details,
    },
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
```

### 2.8 server.js
```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./libs/db');
const routes = require('./routes');
const errorHandler = require('./middleware/error.middleware');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

// Database connection
db.authenticate()
  .then(() => {
    console.log('Database connected successfully');
    
    // Start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });

module.exports = app;
```

---

## 3. Environment Variables (.env)

```env
# Server
PORT=3000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=movie_ticket_booking

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=1h
JWT_REFRESH_SECRET=your_refresh_secret_key_here
JWT_REFRESH_EXPIRES_IN=7d

# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_password
EMAIL_FROM=noreply@movietickets.com

# Payment Gateway
VNPAY_TERMINAL_ID=your_vnpay_terminal_id
VNPAY_HASH_SECRET=your_vnpay_hash_secret
VNPAY_API_URL=https://sandbox.vnpayment.vn/paygate
PAYMENT_RETURN_URL=http://localhost:3000/api/payments/vnpay-callback

# OTP
OTP_EXPIRY_MINUTES=5
OTP_LENGTH=6

# AWS S3 (for file uploads)
AWS_REGION=ap-southeast-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_S3_BUCKET=movie-tickets-bucket

# Redis (optional for caching)
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# File Upload
MAX_FILE_SIZE=5242880
ALLOWED_IMAGE_TYPES=image/jpeg,image/png,image/webp

# Seat Lock Duration
SEAT_LOCK_MINUTES=5

# Logging
LOG_LEVEL=debug
```

---

## 4. package.json Essentials

```json
{
  "name": "movie-ticket-booking-backend",
  "version": "1.0.0",
  "description": "Backend for Movie Ticket Booking System",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "test": "jest --coverage",
    "test:watch": "jest --watch",
    "migrate": "sequelize db:migrate",
    "migrate:undo": "sequelize db:migrate:undo:all",
    "seed": "sequelize db:seed:all",
    "lint": "eslint src/"
  },
  "keywords": [
    "movie",
    "tickets",
    "booking"
  ],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.6.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.3.0",
    "express": "^4.18.0",
    "express-validator": "^7.0.0",
    "joi": "^17.11.0",
    "jsonwebtoken": "^9.1.0",
    "multer": "^1.4.5",
    "mysql2": "^3.6.0",
    "nodemailer": "^6.9.0",
    "node-schedule": "^2.1.0",
    "pdfkit": "^0.13.0",
    "qrcode": "^1.5.0",
    "redis": "^4.6.0",
    "sequelize": "^6.35.0",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "eslint": "^8.54.0",
    "jest": "^29.7.0",
    "nodemon": "^3.0.0",
    "sequelize-cli": "^6.6.0",
    "supertest": "^6.3.0"
  }
}
```

---

## 5. Database Connection (libs/db.js)

```javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 10,
      min: 2,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = sequelize;
```

---

## 6. Main Routes File (routes/index.js)

```javascript
const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.routes');
const movieRoutes = require('./movie.routes');
const theaterRoutes = require('./theater.routes');
const bookingRoutes = require('./booking.routes');
const paymentRoutes = require('./payment.routes');
const userRoutes = require('./user.routes');
const newsRoutes = require('./news.routes');
const adminRoutes = require('./admin.routes');

router.use('/auth', authRoutes);
router.use('/movies', movieRoutes);
router.use('/theaters', theaterRoutes);
router.use('/bookings', bookingRoutes);
router.use('/payments', paymentRoutes);
router.use('/user', userRoutes);
router.use('/news', newsRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
```

---

## 7. Integration with ORM (Sequelize)

Key considerations:
- Use proper relationships (hasMany, belongsToMany)
- Define indexes for frequently queried columns
- Use transactions for complex operations
- Implement soft deletes for audit trail
- Use hooks for cascading operations

Example relationship:
```javascript
// In models initialization
Movie.hasMany(Showtime, { foreignKey: 'movie_id', as: 'showtimes' });
Showtime.belongsTo(Movie, { foreignKey: 'movie_id', as: 'movie' });
```

