# Backend - Movie Ticket Booking System

## 📁 Cấu Trúc Thư Mục

```
backend/
├── src/
│   ├── config/                 # Cấu hình
│   │   ├── database.js        # Kết nối MySQL
│   │   ├── constants.js       # Hằng số hệ thống
│   │   └── ...
│   │
│   ├── models/                 # Sequelize Models (14 models)
│   │   ├── user.model.js
│   │   ├── movie.model.js
│   │   ├── booking.model.js
│   │   └── ...
│   │
│   ├── controllers/            # Request Handlers
│   │   ├── auth.controller.js
│   │   ├── movie.controller.js
│   │   ├── booking.controller.js
│   │   ├── admin/             # Admin controllers
│   │   │   ├── admin.movie.controller.js
│   │   │   └── ...
│   │   └── ...
│   │
│   ├── services/              # Business Logic
│   │   ├── auth.service.js
│   │   ├── movie.service.js
│   │   ├── booking.service.js
│   │   ├── payment.service.js
│   │   ├── email.service.js
│   │   └── ...
│   │
│   ├── routes/                # API Routes
│   │   ├── index.js
│   │   ├── auth.routes.js
│   │   ├── movie.routes.js
│   │   ├── booking.routes.js
│   │   ├── admin.routes.js
│   │   └── ...
│   │
│   ├── middleware/            # Express Middleware
│   │   ├── auth.middleware.js
│   │   ├── authorize.middleware.js
│   │   ├── validation.middleware.js
│   │   ├── error.middleware.js
│   │   ├── cors.middleware.js
│   │   └── ...
│   │
│   ├── validators/            # Input Validation (Joi)
│   │   ├── auth.validator.js
│   │   ├── movie.validator.js
│   │   ├── booking.validator.js
│   │   └── ...
│   │
│   ├── utils/                 # Utility Functions
│   │   ├── response.util.js   # Response formatting
│   │   ├── error.util.js      # Custom errors
│   │   ├── jwt.util.js        # JWT token management
│   │   ├── bcrypt.util.js     # Password hashing
│   │   ├── date.util.js       # Date utilities
│   │   ├── qr-generator.util.js
│   │   └── ...
│   │
│   ├── libs/                  # External Integrations
│   │   ├── db.js              # (moved: use config/database.js)
│   │   ├── email.lib.js       # Nodemailer
│   │   ├── payment-gateway.lib.js
│   │   ├── pdf-generator.lib.js
│   │   └── ...
│   │
│   ├── jobs/                  # Background Jobs
│   │   ├── expire-seat-lock.job.js
│   │   ├── check-payment-status.job.js
│   │   ├── scheduler.js
│   │   └── ...
│   │
│   ├── migrations/            # Database Migrations
│   │   ├── 001-create-roles.js
│   │   ├── 002-create-users.js
│   │   ├── 003-create-movies.js
│   │   └── ...
│   │
│   ├── seeders/               # Seed Data
│   │   ├── 001-seed-roles.js
│   │   ├── 002-seed-users.js
│   │   └── ...
│   │
│   ├── server.js              # Express App Entry Point
│   ├── controllers/
│   │   └── product.controller.js  # (Old - to be refactored)
│   ├── libs/
│   │   └── db.js              # (Old - keep for reference)
│   ├── models/
│   │   └── product.model.js   # (Old - to be refactored)
│   └── routers/
│       ├── index.js           # (Old - will be replaced)
│       └── product.router.js  # (Old - will be refactored)
│
├── tests/
│   ├── unit/
│   │   ├── services/
│   │   │   ├── auth.service.test.js
│   │   │   ├── booking.service.test.js
│   │   │   └── ...
│   │   └── utils/
│   │       ├── jwt.util.test.js
│   │       └── ...
│   │
│   ├── integration/
│   │   ├── auth.integration.test.js
│   │   ├── movie.integration.test.js
│   │   ├── booking.integration.test.js
│   │   └── ...
│   │
│   └── setup.test.js
│
├── .env.example              # Environment variables template
├── .env                      # Environment variables (local)
├── .gitignore
├── .babelrc
├── package.json
├── pnpm-lock.yaml
├── jest.config.js           # Jest testing configuration
└── README.md                # This file
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd backend
pnpm install
# or npm install
```

### 2. Setup Environment Variables
```bash
cp .env.example .env
# Edit .env with your local configuration
```

### 3. Database Setup
```bash
# Create database
mysql -u root -p
> CREATE DATABASE movie_ticket_booking CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Run migrations (when ready)
pnpm sequelize db:migrate
```

### 4. Run Development Server
```bash
pnpm dev
# Server runs on http://localhost:3000
```

### 5. Run Tests
```bash
pnpm test              # Run all tests
pnpm test:watch       # Run in watch mode
pnpm test:coverage    # Generate coverage report
```

---

## 📋 File Descriptions

### Core Files Created

| File | Purpose |
|------|---------|
| `src/config/database.js` | MySQL/Sequelize connection |
| `src/config/constants.js` | System constants & enums |
| `src/utils/response.util.js` | Standard response formatter |
| `src/utils/error.util.js` | Custom error classes |
| `src/middleware/error.middleware.js` | Global error handler |
| `src/middleware/cors.middleware.js` | CORS configuration |
| `src/middleware/auth.middleware.js` | JWT verification |
| `src/middleware/authorize.middleware.js` | Role-based access control |
| `src/middleware/validation.middleware.js` | Request validation |
| `.env.example` | Environment variables template |

### To Create Next

**Phase 1 (Infrastructure):**
- [ ] `src/server.js` - Express app initialization
- [ ] `src/routes/index.js` - Main routes file
- [ ] `src/jobs/scheduler.js` - Background job scheduler

**Phase 2 (Authentication):**
- [ ] `src/models/user.model.js` - User model
- [ ] `src/models/role.model.js` - Role model
- [ ] `src/controllers/auth.controller.js` - Auth handlers
- [ ] `src/services/auth.service.js` - Auth logic
- [ ] `src/validators/auth.validator.js` - Auth validation
- [ ] `src/utils/jwt.util.js` - JWT utilities
- [ ] `src/utils/bcrypt.util.js` - Password hashing
- [ ] `src/routes/auth.routes.js` - Auth endpoints
- [ ] `src/libs/email.lib.js` - Email service

---

## 🏗️ Development Workflow

### Adding a New Feature (Example: Movie Management)

1. **Create Model** (`src/models/movie.model.js`)
   - Define table structure
   - Set relationships

2. **Create Controller** (`src/controllers/movie.controller.js`)
   - Handle HTTP requests
   - Call services

3. **Create Service** (`src/services/movie.service.js`)
   - Business logic
   - Database operations

4. **Create Validator** (`src/validators/movie.validator.js`)
   - Input validation schemas

5. **Create Routes** (`src/routes/movie.routes.js`)
   - Define endpoints
   - Attach middleware

6. **Register Routes** (in `src/routes/index.js`)
   - Import and use routes

7. **Create Tests** (`tests/`)
   - Unit tests for services
   - Integration tests for APIs

---

## 📚 13 Development Phases

Following the implementation plan from `docs/ai/planning/implementation-plan.md`:

| Phase | Duration | Focus |
|-------|----------|-------|
| 1 | 1 week | Infrastructure & Setup |
| 2 | 1 week | Authentication (JWT, OTP) |
| 3 | 1.5 weeks | Movies & Theaters |
| 4 | 1 week | Showtimes & Seats |
| 5 | 1.5 weeks | Booking & Pricing |
| 6 | 1.5 weeks | Payment Processing |
| 7 | 1 week | E-Tickets & Email |
| 8 | 0.5 week | Cancellation & Refund |
| 9 | 0.5 week | User Management |
| 10 | 0.5 week | News & Promotions |
| 11 | 1 week | Analytics & Reports |
| 12 | 0.5 week | Check-in |
| 13 | 1.5 weeks | Testing & Optimization |

**Total: ~13 weeks (3 months)**

---

## 📝 Key Constants & Enums

See `src/config/constants.js` for:
- User roles (ADMIN, USER)
- Booking status (PENDING, COMPLETED, CANCELLED, etc.)
- Payment status (PENDING, COMPLETED, FAILED, REFUNDED)
- Seat types (STANDARD, VIP, SWEETBOX)
- Movie types (2D, 3D)
- Payment methods (VNPAY, VIETQR, PAYPAL, MOMO)

---

## 🔧 Useful npm Scripts

```json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "test": "jest --coverage",
    "test:watch": "jest --watch",
    "migrate": "sequelize db:migrate",
    "migrate:undo": "sequelize db:migrate:undo:all",
    "seed": "sequelize db:seed:all",
    "lint": "eslint src/"
  }
}
```

---

## 📚 Reference Documentation

All detailed documentation is in `docs/ai/`:
- **requirements/** - Full SRS specification
- **design/** - Database schema & system architecture
- **implementation/** - API documentation & code templates
- **planning/** - 13-phase implementation roadmap

---

## 🔐 Security Checklist

- [ ] Environment variables configured (.env)
- [ ] Database connection pool configured
- [ ] JWT secret properly set
- [ ] CORS configured for frontend
- [ ] Input validation on all endpoints
- [ ] Error handling without exposing sensitive info
- [ ] Password hashing with bcrypt
- [ ] Request logging in place

---

## 🎯 Next Steps

1. ✅ Folders created
2. ✅ Config files created
3. ✅ Middleware created
4. ✅ Utilities created
5. ⏭️ **Next:** Create `src/server.js` and main Express app
6. ⏭️ Then: Create first model (User, Role)
7. ⏭️ Then: Create first endpoints (Auth)

---

## 📞 Questions?

Refer to documentation:
- **Full specs:** `docs/ai/requirements/movie-ticket-booking-srs.md`
- **Architecture:** `docs/ai/design/system-architecture.md`
- **API endpoints:** `docs/ai/implementation/api-documentation.md`
- **Code templates:** `docs/ai/implementation/backend-structure.md`
- **Timeline:** `docs/ai/planning/implementation-plan.md`

