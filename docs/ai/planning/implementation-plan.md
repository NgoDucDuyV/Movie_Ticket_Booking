# Kế Hoạch Triển Khai Backend

## 1. Cấu Trúc Thư Mục Backend

```
backend/
├── src/
│   ├── config/
│   │   ├── database.js          # Cấu hình database
│   │   ├── email.js             # Cấu hình email
│   │   ├── payment-gateway.js   # Cấu hình thanh toán
│   │   └── constants.js         # Hằng số hệ thống
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
│   │   ├── booking.controller.js
│   │   ├── payment.controller.js
│   │   ├── user.controller.js
│   │   ├── news.controller.js
│   │   ├── admin/
│   │   │   ├── admin.movie.controller.js
│   │   │   ├── admin.theater.controller.js
│   │   │   ├── admin.showtime.controller.js
│   │   │   ├── admin.user.controller.js
│   │   │   ├── admin.payment.controller.js
│   │   │   ├── admin.report.controller.js
│   │   │   └── admin.ticket-price.controller.js
│   │
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── movie.service.js
│   │   ├── theater.service.js
│   │   ├── booking.service.js
│   │   ├── payment.service.js
│   │   ├── user.service.js
│   │   ├── ticket.service.js       # Sinh vé PDF, QR
│   │   ├── email.service.js        # Gửi email
│   │   ├── otp.service.js          # OTP verification
│   │   ├── seat-lock.service.js    # Giữ ghế 5 phút
│   │   └── report.service.js       # Tạo báo cáo
│   │
│   ├── routes/
│   │   ├── index.js
│   │   ├── auth.routes.js
│   │   ├── movie.routes.js
│   │   ├── theater.routes.js
│   │   ├── booking.routes.js
│   │   ├── payment.routes.js
│   │   ├── user.routes.js
│   │   ├── news.routes.js
│   │   └── admin.routes.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js       # JWT verification
│   │   ├── authorize.middleware.js  # Role-based access
│   │   ├── validation.middleware.js # Request validation
│   │   ├── error.middleware.js      # Error handling
│   │   └── cors.middleware.js
│   │
│   ├── validators/
│   │   ├── auth.validator.js
│   │   ├── movie.validator.js
│   │   ├── booking.validator.js
│   │   ├── payment.validator.js
│   │   └── user.validator.js
│   │
│   ├── utils/
│   │   ├── jwt.util.js             # JWT token generation
│   │   ├── bcrypt.util.js          # Password hashing
│   │   ├── response.util.js        # Response formatter
│   │   ├── error.util.js           # Custom errors
│   │   ├── date.util.js            # Date utilities
│   │   ├── seat-selector.util.js   # Chọn ghế logic
│   │   └── qr-generator.util.js    # QR code generation
│   │
│   ├── libs/
│   │   ├── db.js                   # Database connection
│   │   ├── email.lib.js            # Email sending
│   │   ├── payment-gateway.lib.js  # Payment gateway
│   │   ├── pdf-generator.lib.js    # PDF ticket generation
│   │   └── cache.lib.js            # Redis cache (optional)
│   │
│   ├── jobs/
│   │   ├── expire-seat-lock.job.js # Job expire ghế giữ
│   │   ├── check-payment-status.job.js
│   │   └── send-reminder.job.js
│   │
│   ├── migrations/
│   │   ├── 001-create-users.js
│   │   ├── 002-create-movies.js
│   │   ├── 003-create-bookings.js
│   │   └── ...
│   │
│   └── server.js                   # Entry point
│
├── .env
├── .env.example
├── .gitignore
├── package.json
└── pnpm-lock.yaml
```

---

## 2. Danh Sách Model & Database Operations

| Model | Create | Read | Update | Delete | Ghi Chú |
|-------|--------|------|--------|--------|---------|
| User | ✅ | ✅ | ✅ | ✅ | User profile, status |
| Role | ✅ | ✅ | ✅ | ✅ | ADMIN, USER |
| Movie | ✅ | ✅ | ✅ | ✅ | Film management |
| Genre | ✅ | ✅ | ✅ | ✅ | Film categories |
| Theater | ✅ | ✅ | ✅ | ✅ | Theater info |
| Screen | ✅ | ✅ | ✅ | ✅ | Rooms per theater |
| Seat | ✅ | ✅ | ✅ | ✅ | Seats per screen |
| Showtime | ✅ | ✅ | ✅ | ✅ | Showtimes, conflict check |
| Booking | ✅ | ✅ | ✅ | ✅ | Order tickets, cancel |
| BookingSeat | ✅ | ✅ | ✅ | ✅ | Many-to-many |
| Payment | ✅ | ✅ | ✅ | ✅ | Payment tracking |
| TicketPrice | ✅ | ✅ | ✅ | ✅ | Dynamic pricing |
| News | ✅ | ✅ | ✅ | ✅ | News & promotions |
| Favorite | ✅ | ✅ | ✅ | ✅ | Bookmark movies |

---

## 3. Giai Đoạn Phát Triển

### Giai Đoạn 1: Cơ Sở Hạ Tầng (Phase 1 - Infrastructure)
**Thời gian: 1 tuần**

- [x] Thiết kế database schema
- [ ] Cấu hình Node.js project với Express
- [ ] Thiết lập ORM (Sequelize/TypeORM)
- [ ] Cấu hình Environment variables (.env)
- [ ] Thiết lập Git & Version control
- [ ] Cấu hình logging & monitoring

**Deliverables:**
- Database schema migrations
- Project structure ready
- Configuration files

---

### Giai Đoạn 2: Xác Thực & Phân Quyền (Phase 2 - Auth & Authorization)
**Thời gian: 1 tuần**

- [ ] Model & Controller cho User, Role
- [ ] JWT authentication service
- [ ] Password hashing (bcrypt)
- [ ] Register API (với OTP verification)
- [ ] Login API
- [ ] Refresh token API
- [ ] Auth middleware
- [ ] Role-based authorization middleware
- [ ] Unit tests cho auth

**Deliverables:**
- /auth/register, /auth/login, /auth/verify-otp endpoints
- Auth middleware có thể được sử dụng

---

### Giai Đoạn 3: Quản Lý Phim & Rạp (Phase 3 - Movie & Theater Management)
**Thời gian: 1.5 tuần**

**Movies:**
- [ ] Movie model & database
- [ ] Movie CRUD controllers (User & Admin)
- [ ] Movie service (filtering, searching)
- [ ] GET /movies (danh sách, phân trang, lọc)
- [ ] GET /movies/search (tìm kiếm)
- [ ] GET /movies/:id (chi tiết)
- [ ] POST /admin/movies (tạo)
- [ ] PUT /admin/movies/:id (sửa)
- [ ] DELETE /admin/movies/:id (xóa)

**Genres:**
- [ ] Genre model
- [ ] Genre CRUD endpoints
- [ ] Associate movies with genres

**Theaters & Screens:**
- [ ] Theater model & CRUD
- [ ] Screen model & CRUD
- [ ] GET /theaters (danh sách)
- [ ] GET /theaters/:id (chi tiết + phòng)

**Deliverables:**
- Movie management APIs
- Theater management APIs
- Genre management APIs

---

### Giai Đoạn 4: Lịch Chiếu & Quản Lý Ghế (Phase 4 - Showtimes & Seats)
**Thời gian: 1 tuần**

**Showtimes:**
- [ ] Showtime model
- [ ] Conflict detection logic (không trùng suất chiếu cùng phòng)
- [ ] Create showtime (conflict check)
- [ ] Update showtime
- [ ] Delete showtime
- [ ] GET /movies/:id/showtimes

**Seats:**
- [ ] Seat model
- [ ] Seat layout generator (tạo hàng ghế A, B, C...)
- [ ] GET /screens/:id/seats (hiển thị sơ đồ ghế)
- [ ] Update seat status (AVAILABLE, BOOKED, HELD)

**Deliverables:**
- Showtime management APIs
- Seat display APIs
- Conflict detection

---

### Giai Đoạn 5: Đặt Vé & Quản Lý Giá (Phase 5 - Booking & Pricing)
**Thời gian: 1.5 tuần**

**Ticket Pricing:**
- [ ] TicketPrice model
- [ ] Price calculation logic (loại ghế, loại phim, khung giờ, ngày lễ)
- [ ] CRUD ticket prices (Admin)

**Booking:**
- [ ] Booking model
- [ ] BookingSeat model
- [ ] POST /bookings (đặt vé)
  - Validate seat availability
  - Calculate price
  - Lock seats for 5 minutes
  - Create booking record
- [ ] Seat lock service (5 phút expiry)
- [ ] GET /bookings/:id (chi tiết booking)
- [ ] GET /user/bookings (lịch sử)
- [ ] Booking status: PENDING → COMPLETED/CANCELLED
- [ ] Job scheduler để auto-release ghế sau 5 phút

**Deliverables:**
- Booking creation APIs
- Price calculation engine
- Seat locking mechanism
- Background job for seat expiry

---

### Giai Đoạn 6: Thanh Toán (Phase 6 - Payment Processing)
**Thời gian: 1.5 tuần**

**Payment Integration:**
- [ ] Payment model
- [ ] VNPAY integration
  - Create payment request
  - Handle callback
  - Verify transaction
- [ ] Payment service (abstract payment gateway)
- [ ] POST /payments (initiate payment)
- [ ] POST /payments/vnpay-callback (handle callback)
- [ ] Payment status tracking (PENDING, COMPLETED, FAILED)
- [ ] Job scheduler để check payment status

**After Payment Success:**
- [ ] Create ticket PDF
- [ ] Generate QR code
- [ ] Send email with ticket
- [ ] Update booking status to COMPLETED

**Deliverables:**
- Payment APIs
- VNPAY integration
- Callback handling
- Payment status tracking

---

### Giai Đoạn 7: Vé Điện Tử & Email (Phase 7 - E-Ticket & Email)
**Thời gian: 1 tuần**

**Ticket Generation:**
- [ ] QR code generation (booking ID)
- [ ] PDF ticket generation
  - Movie info
  - Theater info
  - Seat numbers
  - QR code
  - Transaction ID
- [ ] Store PDF URL in booking
- [ ] Ticket download endpoint

**Email Service:**
- [ ] Email configuration (Nodemailer/SendGrid)
- [ ] Email templates (OTP, booking confirmation, ticket)
- [ ] Send OTP email
- [ ] Send booking confirmation email
- [ ] Send ticket PDF attachment

**Deliverables:**
- Ticket generation & download
- Email service
- Ticket distribution

---

### Giai Đoạn 8: Hủy Vé & Hoàn Tiền (Phase 8 - Cancellation & Refund)
**Thời gian: 0.5 tuần**

- [ ] Cancel booking endpoint
- [ ] Validate cancellation rules:
  - Showtime hasn't started
  - Theater allows cancellation
- [ ] Refund logic:
  - If paid → call payment gateway for refund
  - Update payment status to REFUNDED
- [ ] Release locked seats
- [ ] Update booking status to CANCELLED
- [ ] Send cancellation email

**Deliverables:**
- Cancellation APIs
- Refund processing

---

### Giai Đoạn 9: Quản Lý Người Dùng & Hồ Sơ (Phase 9 - User Management)
**Thời gian: 0.5 tuần**

- [ ] GET /user/profile
- [ ] PUT /user/profile (cập nhật thông tin)
- [ ] Avatar upload
- [ ] Favorites (bookmark movies)
  - POST /favorites
  - GET /favorites
  - DELETE /favorites/:movieId
- [ ] Admin user management
  - GET /admin/users
  - PUT /admin/users/:id (edit)
  - PUT /admin/users/:id/block (chặn tài khoản)

**Deliverables:**
- User profile management
- Favorites management
- Admin user management

---

### Giai Đoạn 10: Tin Tức & Khuyến Mãi (Phase 10 - News & Promotions)
**Thời gian: 0.5 tuần**

- [ ] News model & CRUD
- [ ] GET /news (danh sách)
- [ ] POST /admin/news (tạo)
- [ ] PUT /admin/news/:id (sửa)
- [ ] DELETE /admin/news/:id (xóa)
- [ ] Image upload for news

**Deliverables:**
- News management APIs

---

### Giai Đoạn 11: Báo Cáo & Thống Kê (Phase 11 - Reports & Analytics)
**Thời gان

n:**
- [ ] Report service
- [ ] Revenue calculation
- [ ] GET /admin/reports/revenue (by date/movie/theater/seat-type)
- [ ] Occupancy rate calculation
- [ ] Export to CSV
- [ ] Dashboard data endpoints

**Deliverables:**
- Report generation APIs
- Analytics endpoints

---

### Giai Đoạn 12: Check-in & Verify Tickets (Phase 12 - Check-in)
**Thời gian: 0.5 tuần**

- [ ] QR code scanning endpoint
- [ ] Verify ticket validity
  - Valid booking?
  - Correct showtime?
  - Not already checked-in?
- [ ] Update booking status to CHECKED_IN
- [ ] Staff interface support

**Deliverables:**
- Ticket verification APIs
- Check-in functionality

---

### Giai Đoạn 13: Testing & Optimization (Phase 13 - QA)
**Thời gian: 1.5 tuần**

- [ ] Unit tests (mỗi service)
- [ ] Integration tests (flow hoàn chỉnh)
- [ ] API endpoint tests
- [ ] Database constraint tests
- [ ] Concurrent booking tests
- [ ] Payment gateway mock tests
- [ ] Performance optimization
- [ ] Security audit
- [ ] Load testing

**Deliverables:**
- Comprehensive test suite
- Performance reports

---

## 4. Dependencies & Packages

```json
{
  "dependencies": {
    "express": "^4.18.0",
    "sequelize": "^6.35.0",        // ORM
    "mysql2": "^3.6.0",            // MySQL driver
    "dotenv": "^16.3.0",           // Environment variables
    "jsonwebtoken": "^9.1.0",      // JWT
    "bcryptjs": "^2.4.3",          // Password hashing
    "joi": "^17.11.0",             // Data validation
    "cors": "^2.8.5",              // CORS
    "express-validator": "^7.0.0", // Express validation
    "multer": "^1.4.5",            // File upload
    "nodemailer": "^6.9.0",        // Email
    "pdfkit": "^0.13.0",           // PDF generation
    "qrcode": "^1.5.0",            // QR code
    "axios": "^1.6.0",             // HTTP requests
    "redis": "^4.6.0",             // Caching (optional)
    "uuid": "^9.0.0",              // UUID generation
    "node-schedule": "^2.1.0"      // Job scheduler
  },
  "devDependencies": {
    "jest": "^29.7.0",             // Testing
    "supertest": "^6.3.0",         // API testing
    "nodemon": "^3.0.0",           // Development
    "eslint": "^8.54.0"            // Linting
  }
}
```

---

## 5. Timeline Tổng Hợp

| Phase | Nội Dung | Thời Gian | Tổng Cộng |
|-------|---------|----------|----------|
| 1 | Infrastructure | 1 tuần | 1 tuần |
| 2 | Auth & Authorization | 1 tuần | 2 tuần |
| 3 | Movie & Theater Mgmt | 1.5 tuần | 3.5 tuần |
| 4 | Showtimes & Seats | 1 tuần | 4.5 tuần |
| 5 | Booking & Pricing | 1.5 tuần | 6 tuần |
| 6 | Payment Processing | 1.5 tuần | 7.5 tuần |
| 7 | E-Ticket & Email | 1 tuần | 8.5 tuần |
| 8 | Cancellation & Refund | 0.5 tuần | 9 tuần |
| 9 | User Management | 0.5 tuần | 9.5 tuần |
| 10 | News & Promotions | 0.5 tuần | 10 tuần |
| 11 | Reports & Analytics | 1 tuần | 11 tuần |
| 12 | Check-in | 0.5 tuần | 11.5 tuần |
| 13 | Testing & Optimization | 1.5 tuần | 13 tuần |

**Tổng cộng: ~13 tuần (3 tháng)**

---

## 6. Độ Ưu Tiên Features

**CRITICAL (Must-have):**
- ✅ Auth (Register, Login, OTP)
- ✅ Movie Management
- ✅ Booking & Seat Selection
- ✅ Payment Processing
- ✅ E-Ticket Generation

**HIGH (Should-have):**
- ✅ Ticket Cancellation & Refund
- ✅ Theater & Screen Management
- ✅ User Profile
- ✅ Admin Dashboard APIs
- ✅ Payment Status Tracking

**MEDIUM (Nice-to-have):**
- ✅ News & Promotions
- ✅ Favorites
- ✅ Reports & Analytics
- ✅ Advanced Search & Filters

**LOW (Future):**
- 🔲 Loyalty program
- 🔲 Group booking discounts
- 🔲 Seat recommendation AI
- 🔲 Mobile app

