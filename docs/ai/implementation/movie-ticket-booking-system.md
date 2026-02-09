---
phase: implementation
title: Implementation Guide - Hệ thống Đặt Vé Xem Phim
description: Hướng dẫn kỹ thuật implementation, patterns, và code guidelines
---

# Implementation Guide - Hệ thống Đặt Vé Xem Phim

## Development Setup
**Bắt đầu như thế nào?**

### Prerequisites

- **Node.js**: Version 18.x hoặc cao hơn
- **MongoDB**: Version 6.x hoặc cao hơn (local hoặc MongoDB Atlas)
- **npm** hoặc **pnpm**: Package manager
- **Git**: Version control

### Environment Setup Steps

1. **Clone repository và install dependencies**
```bash
# Backend
cd backend
npm install
# hoặc
pnpm install

# Frontend
cd frontend
npm install
# hoặc
pnpm install
```

2. **Setup MongoDB**
   - Cài đặt MongoDB local hoặc tạo MongoDB Atlas account
   - Tạo database: `movie_ticket_booking`

3. **Environment Variables**

Tạo file `.env` trong `backend/`:
```env
# Server
NODE_ENV=development
PORT=3000

# MongoDB
MONGODB_URI=mongodb://localhost:27017/movie_ticket_booking
# hoặc MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/movie_ticket_booking

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=24h
JWT_REFRESH_SECRET=your-refresh-token-secret
JWT_REFRESH_EXPIRES_IN=7d

# Email (Nodemailer với SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@movieticket.com

# hoặc SendGrid
# SENDGRID_API_KEY=your-sendgrid-api-key

# Payment Gateways
VNPAY_TMN_CODE=your-tmn-code
VNPAY_HASH_SECRET=your-hash-secret
VNPAY_URL=https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
VNPAY_RETURN_URL=http://localhost:3000/api/payments/vnpay/callback

VIETQR_API_KEY=your-vietqr-api-key
VIETQR_API_URL=https://api.vietqr.io

PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_CLIENT_SECRET=your-paypal-client-secret
PAYPAL_MODE=sandbox

# Frontend URL (cho CORS và redirects)
FRONTEND_URL=http://localhost:5173

# File Upload
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=5242880
```

Tạo file `.env` trong `frontend/`:
```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Movie Ticket Booking
```

4. **Run Development Servers**
```bash
# Backend (terminal 1)
cd backend
npm run dev

# Frontend (terminal 2)
cd frontend
npm run dev
```

### Configuration Needed

- **CORS**: Cấu hình trong `backend/src/middleware/cors.middleware.js`
- **Error Handling**: Centralized error handler
- **Validation**: Setup validation schemas (có thể dùng Joi hoặc express-validator)

## Code Structure
**Code được tổ chức như thế nào?**

### Backend Directory Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── constants.js          # Constants (status enums, etc.)
│   │   └── database.js           # MongoDB connection
│   ├── controllers/
│   │   ├── admin/
│   │   │   ├── movie.controller.js
│   │   │   ├── theater.controller.js
│   │   │   ├── showtime.controller.js
│   │   │   ├── booking.controller.js
│   │   │   ├── user.controller.js
│   │   │   └── report.controller.js
│   │   └── client/
│   │       ├── auth.controller.js
│   │       ├── movie.controller.js
│   │       ├── booking.controller.js
│   │       ├── payment.controller.js
│   │       └── user.controller.js
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── movie.service.js
│   │   ├── booking.service.js
│   │   ├── payment.service.js
│   │   ├── price.service.js
│   │   ├── email.service.js
│   │   ├── pdf.service.js
│   │   └── admin.service.js
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
│   │   ├── payment.model.js
│   │   ├── ticketPrice.model.js
│   │   └── news.model.js
│   ├── routes/
│   │   ├── index.js               # Main router
│   │   ├── auth.routes.js
│   │   ├── movie.routes.js
│   │   ├── booking.routes.js
│   │   ├── payment.routes.js
│   │   ├── user.routes.js
│   │   └── admin.routes.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── authorize.middleware.js
│   │   ├── validation.middleware.js
│   │   ├── error.middleware.js
│   │   └── cors.middleware.js
│   ├── utils/
│   │   ├── error.util.js
│   │   ├── response.util.js
│   │   ├── jwt.util.js
│   │   ├── qr.util.js
│   │   └── logger.util.js
│   ├── validators/
│   │   ├── auth.validator.js
│   │   ├── movie.validator.js
│   │   └── booking.validator.js
│   └── server.js                  # Entry point
├── tests/
│   ├── unit/
│   │   ├── services/
│   │   └── utils/
│   └── integration/
│       └── api/
├── uploads/                        # Uploaded files
├── .env
├── package.json
└── README.md
```

### Frontend Directory Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   ├── buttons/
│   │   ├── Card/
│   │   ├── Layouts/
│   │   └── Search/
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── MovieDetailPage.tsx
│   │   ├── BookingPage.tsx
│   │   ├── PaymentPage.tsx
│   │   ├── BookingHistoryPage.tsx
│   │   ├── ProfilePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   └── admin/
│   │       ├── AdminDashboard.tsx
│   │       ├── AdminMoviesPage.tsx
│   │       └── ...
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useMovies.ts
│   │   ├── useBooking.ts
│   │   └── usePayment.ts
│   ├── services/
│   │   └── api.ts                 # API client
│   ├── lib/
│   │   └── utils.ts
│   ├── i18n/
│   │   ├── index.ts
│   │   └── locales/
│   ├── Layouts/
│   │   └── MainLayout.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
├── .env
├── package.json
└── vite.config.ts
```

### Naming Conventions

- **Files**: camelCase cho JavaScript, PascalCase cho React components
  - `auth.service.js`, `MovieCard.tsx`
- **Variables/Functions**: camelCase
  - `getMovies`, `calculatePrice`
- **Constants**: UPPER_SNAKE_CASE
  - `MAX_SEAT_LOCK_TIME`, `BOOKING_STATUS`
- **Models/Classes**: PascalCase
  - `User`, `Booking`
- **API Routes**: kebab-case
  - `/api/movies`, `/api/bookings/:id`

## Implementation Notes
**Chi tiết kỹ thuật quan trọng**

### Core Features

#### 1. Authentication Flow

**Implementation Approach:**

```javascript
// services/auth.service.js
export const register = async (userData) => {
  // 1. Validate input
  // 2. Check if email/phone exists
  // 3. Hash password với bcrypt
  // 4. Generate email verification token
  // 5. Save user với status INACTIVE
  // 6. Send verification email
  // 7. Return user (không có password)
};

export const login = async (email, password) => {
  // 1. Find user by email
  // 2. Check if user exists và active
  // 3. Compare password với bcrypt
  // 4. Generate JWT token (access + refresh)
  // 5. Return tokens và user info
};

export const verifyEmail = async (token) => {
  // 1. Find user by verification token
  // 2. Check token expiration
  // 3. Update user: emailVerified = true, status = ACTIVE
  // 4. Return success
};
```

**JWT Token Structure:**
```javascript
// Access Token (24h)
{
  userId: ObjectId,
  email: string,
  role: string,
  iat: number,
  exp: number
}

// Refresh Token (7 days)
{
  userId: ObjectId,
  tokenId: string, // random UUID
  iat: number,
  exp: number
}
```

#### 2. Booking Flow với Seat Locking

**Implementation Approach:**

```javascript
// services/booking.service.js
export const createBooking = async (userId, showtimeId, seatIds) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  
  try {
    // 1. Validate showtime exists và chưa bắt đầu
    const showtime = await Showtime.findById(showtimeId).session(session);
    if (!showtime || showtime.startTime < new Date()) {
      throw new Error('Showtime không hợp lệ');
    }
    
    // 2. Check seat availability (với lock)
    const seats = await Seat.find({
      _id: { $in: seatIds },
      screenId: showtime.screenId
    }).session(session);
    
    // 3. Check conflicts với existing bookings
    const existingBookings = await Booking.find({
      showtimeId,
      bookingStatus: { $in: ['PENDING', 'CONFIRMED'] },
      'seats.seatId': { $in: seatIds },
      expiresAt: { $gt: new Date() }
    }).session(session);
    
    if (existingBookings.length > 0) {
      throw new Error('Ghế đã được đặt');
    }
    
    // 4. Calculate total price
    const totalPrice = await calculateBookingPrice(showtime, seats);
    
    // 5. Create booking với PENDING status
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes
    const booking = await Booking.create([{
      userId,
      showtimeId,
      totalSeats: seatIds.length,
      totalPrice,
      bookingStatus: 'PENDING',
      seats: seats.map(seat => ({
        seatId: seat._id,
        seatNumber: seat.seatNumber,
        price: calculateSeatPrice(seat, showtime)
      })),
      expiresAt
    }], { session });
    
    await session.commitTransaction();
    return booking[0];
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }
};
```

**Cleanup Expired Bookings:**
```javascript
// Có thể dùng MongoDB TTL index
// Hoặc background job
export const cleanupExpiredBookings = async () => {
  const expiredBookings = await Booking.updateMany(
    {
      bookingStatus: 'PENDING',
      expiresAt: { $lt: new Date() }
    },
    {
      $set: { bookingStatus: 'EXPIRED' }
    }
  );
  
  // Release seats
  return expiredBookings;
};

// Chạy mỗi phút với cron job hoặc setInterval
```

#### 3. Price Calculation Service

**Implementation Approach:**

```javascript
// services/price.service.js
export const calculateBookingPrice = async (showtime, seats) => {
  const movie = await Movie.findById(showtime.movieId);
  const dayType = getDayType(showtime.startTime); // 0 = weekday, 1 = weekend
  const timeSlot = getTimeSlot(showtime.startTime); // '09:00-17:00' hoặc '17:00-22:00'
  
  let totalPrice = 0;
  
  for (const seat of seats) {
    const price = await getTicketPrice({
      typeSeat: seat.type,
      typeMovie: movie.type,
      dayType,
      timeSlot
    });
    
    totalPrice += price;
  }
  
  return totalPrice;
};

const getTicketPrice = async ({ typeSeat, typeMovie, dayType, timeSlot }) => {
  const price = await TicketPrice.findOne({
    typeSeat,
    typeMovie,
    dayType,
    startTime: { $lte: timeSlot.start },
    endTime: { $gte: timeSlot.end },
    isActive: true
  });
  
  return price ? price.price : getDefaultPrice(typeSeat, typeMovie);
};
```

#### 4. Payment Integration

**Implementation Approach (Factory Pattern):**

```javascript
// services/payment.service.js
class PaymentGateway {
  async initiatePayment(booking, amount) {
    throw new Error('Method not implemented');
  }
  
  async verifyPayment(transactionId) {
    throw new Error('Method not implemented');
  }
}

class VNPAYGateway extends PaymentGateway {
  async initiatePayment(booking, amount) {
    // Tạo payment URL với VNPAY SDK
    const vnpParams = {
      vnp_Amount: amount * 100, // VNPAY tính bằng xu
      vnp_Command: 'pay',
      vnp_CreateDate: new Date().toISOString(),
      vnp_CurrCode: 'VND',
      vnp_IpAddr: booking.ipAddress,
      vnp_Locale: 'vn',
      vnp_OrderInfo: `Booking ${booking._id}`,
      vnp_OrderType: 'other',
      vnp_ReturnUrl: process.env.VNPAY_RETURN_URL,
      vnp_TxnRef: booking._id.toString(),
      vnp_TmnCode: process.env.VNPAY_TMN_CODE,
      vnp_Version: '2.1.0'
    };
    
    // Sort và hash
    const sortedParams = sortObject(vnpParams);
    const queryString = querystring.stringify(sortedParams);
    const signData = queryString;
    const hmac = crypto.createHmac('sha512', process.env.VNPAY_HASH_SECRET);
    const signed = hmac.update(signData).digest('hex');
    
    const paymentUrl = `${process.env.VNPAY_URL}?${queryString}&vnp_SecureHash=${signed}`;
    return paymentUrl;
  }
  
  async verifyPayment(vnpParams) {
    // Verify signature
    const secureHash = vnpParams.vnp_SecureHash;
    delete vnpParams.vnp_SecureHash;
    
    const sortedParams = sortObject(vnpParams);
    const signData = querystring.stringify(sortedParams);
    const hmac = crypto.createHmac('sha512', process.env.VNPAY_HASH_SECRET);
    const signed = hmac.update(signData).digest('hex');
    
    if (secureHash !== signed) {
      throw new Error('Invalid signature');
    }
    
    return {
      transactionId: vnpParams.vnp_TransactionNo,
      amount: vnpParams.vnp_Amount / 100,
      status: vnpParams.vnp_ResponseCode === '00' ? 'COMPLETED' : 'FAILED'
    };
  }
}

class VietQRGateway extends PaymentGateway {
  // Similar implementation
}

// Factory
export const createPaymentGateway = (method) => {
  switch (method) {
    case 'VNPAY':
      return new VNPAYGateway();
    case 'VIETQR':
      return new VietQRGateway();
    case 'PAYPAL':
      return new PayPalGateway();
    default:
      throw new Error('Unsupported payment method');
  }
};

export const processPayment = async (bookingId, paymentMethod) => {
  const booking = await Booking.findById(bookingId);
  if (!booking || booking.bookingStatus !== 'PENDING') {
    throw new Error('Booking không hợp lệ');
  }
  
  // Create payment record
  const payment = await Payment.create({
    bookingId,
    userId: booking.userId,
    paymentMethod,
    amount: booking.totalPrice,
    paymentStatus: 'PENDING'
  });
  
  // Initiate payment với gateway
  const gateway = createPaymentGateway(paymentMethod);
  const paymentUrl = await gateway.initiatePayment(booking, booking.totalPrice);
  
  return { paymentId: payment._id, paymentUrl };
};
```

#### 5. E-Ticket Generation

**Implementation Approach:**

```javascript
// services/pdf.service.js
import PDFDocument from 'pdfkit';
import QRCode from 'qrcode';

export const generateETicket = async (booking) => {
  const showtime = await Showtime.findById(booking.showtimeId)
    .populate('movieId')
    .populate('screenId');
  const theater = await Theater.findById(showtime.screenId.theaterId);
  
  // Generate QR Code
  const qrData = JSON.stringify({
    bookingId: booking._id.toString(),
    showtimeId: showtime._id.toString(),
    userId: booking.userId.toString()
  });
  const qrCodeImage = await QRCode.toDataURL(qrData);
  
  // Create PDF
  const doc = new PDFDocument({ size: 'A4' });
  const buffers = [];
  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => {});
  
  // Add content
  doc.fontSize(20).text('VÉ XEM PHIM', { align: 'center' });
  doc.moveDown();
  doc.fontSize(16).text(`Phim: ${showtime.movieId.title}`);
  doc.text(`Rạp: ${theater.name}`);
  doc.text(`Phòng: ${showtime.screenId.name}`);
  doc.text(`Ngày: ${formatDate(showtime.startTime)}`);
  doc.text(`Giờ: ${formatTime(showtime.startTime)}`);
  doc.moveDown();
  doc.text(`Ghế: ${booking.seats.map(s => s.seatNumber).join(', ')}`);
  doc.text(`Tổng tiền: ${formatCurrency(booking.totalPrice)} VND`);
  doc.moveDown();
  
  // Add QR Code
  doc.image(qrCodeImage, {
    fit: [150, 150],
    align: 'center'
  });
  
  doc.end();
  
  // Wait for PDF to finish
  return new Promise((resolve) => {
    doc.on('end', () => {
      const pdfBuffer = Buffer.concat(buffers);
      resolve(pdfBuffer);
    });
  });
};
```

### Patterns & Best Practices

#### 1. Service Layer Pattern

- **Controllers** chỉ xử lý HTTP requests/responses
- **Services** chứa business logic
- **Models** chỉ định nghĩa schema và methods cơ bản

```javascript
// Controller (thin)
export const getMovies = async (req, res, next) => {
  try {
    const { page, limit, search, genre, status } = req.query;
    const movies = await movieService.getMovies({ page, limit, search, genre, status });
    res.json(successResponse(movies));
  } catch (error) {
    next(error);
  }
};

// Service (thick - business logic)
export const getMovies = async ({ page = 1, limit = 10, search, genre, status }) => {
  const query = {};
  if (search) query.title = { $regex: search, $options: 'i' };
  if (genre) query.genres = genre;
  if (status) query.status = status;
  
  const skip = (page - 1) * limit;
  const movies = await Movie.find(query)
    .populate('genres')
    .skip(skip)
    .limit(limit)
    .sort({ releaseDate: -1 });
  
  const total = await Movie.countDocuments(query);
  
  return {
    movies,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  };
};
```

#### 2. Error Handling Pattern

```javascript
// utils/error.util.js
export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationError extends AppError {
  constructor(message, errors) {
    super(message, 400);
    this.errors = errors;
  }
}

export class NotFoundError extends AppError {
  constructor(resource) {
    super(`${resource} không tìm thấy`, 404);
  }
}

// middleware/error.middleware.js
export const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  
  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource không tìm thấy';
    error = new NotFoundError(message);
  }
  
  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Dữ liệu đã tồn tại';
    error = new ValidationError(message);
  }
  
  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(e => e.message).join(', ');
    error = new ValidationError(message);
  }
  
  res.status(error.statusCode || 500).json({
    success: false,
    error: {
      message: error.message || 'Server Error',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};
```

#### 3. Validation Pattern

```javascript
// validators/booking.validator.js
import Joi from 'joi';

export const createBookingSchema = Joi.object({
  showtimeId: Joi.string().required(),
  seatIds: Joi.array().items(Joi.string()).min(1).max(10).required()
});

// middleware/validation.middleware.js
export const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: {
          message: 'Validation Error',
          details: error.details.map(d => d.message)
        }
      });
    }
    next();
  };
};
```

#### 4. Response Format Pattern

```javascript
// utils/response.util.js
export const successResponse = (data, message = 'Success', pagination = null) => {
  const response = {
    success: true,
    data,
    message
  };
  
  if (pagination) {
    response.pagination = pagination;
  }
  
  return response;
};

export const errorResponse = (message, code = 'ERROR', details = null) => {
  return {
    success: false,
    error: {
      code,
      message,
      ...(details && { details })
    }
  };
};
```

## Integration Points
**Các thành phần kết nối như thế nào?**

### API Integration

#### Frontend API Client

```typescript
// services/api.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000
});

// Request interceptor - Add JWT token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor - Handle errors
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
```

### Database Connections

```javascript
// config/database.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });
    
    return conn;
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;
```

### Third-party Service Setup

#### Email Service (Nodemailer)

```javascript
// services/email.service.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendEmail = async ({ to, subject, html }) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html
    });
    return true;
  } catch (error) {
    console.error('Email send error:', error);
    throw error;
  }
};
```

## Error Handling
**Xử lý lỗi như thế nào?**

### Error Handling Strategy

1. **Try-Catch trong Services**: Catch và throw AppError
2. **Error Middleware**: Centralized error handling
3. **Async Error Wrapper**: Wrap async route handlers

```javascript
// utils/asyncHandler.js
export const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Usage
router.get('/movies', asyncHandler(getMovies));
```

### Logging Approach

```javascript
// utils/logger.util.js
import winston from 'winston';

const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

export default logger;
```

### Retry/Fallback Mechanisms

```javascript
// Retry mechanism cho email
export const sendEmailWithRetry = async (emailData, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      await sendEmail(emailData);
      return true;
    } catch (error) {
      if (i === maxRetries - 1) {
        // Log to database for manual retry
        await logFailedEmail(emailData);
        throw error;
      }
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))); // Exponential backoff
    }
  }
};
```

## Performance Considerations
**Làm sao giữ hệ thống nhanh?**

### Optimization Strategies

1. **Database Indexing**: Index tất cả fields thường query
2. **Pagination**: Luôn paginate cho list endpoints
3. **Selective Field Loading**: Chỉ load fields cần thiết
4. **Population Optimization**: Limit populated fields

```javascript
// Good: Selective fields
const movies = await Movie.find()
  .select('title image releaseDate status')
  .populate('genres', 'genreName')
  .limit(10);

// Bad: Load everything
const movies = await Movie.find().populate('genres');
```

### Caching Approach

```javascript
// Simple in-memory cache (có thể dùng Redis sau)
const cache = new Map();

export const getMoviesWithCache = async (key, fetchFn, ttl = 300000) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < ttl) {
    return cached.data;
  }
  
  const data = await fetchFn();
  cache.set(key, { data, timestamp: Date.now() });
  return data;
};
```

### Query Optimization

```javascript
// Use aggregation pipeline cho complex queries
export const getRevenueReport = async (startDate, endDate) => {
  return await Payment.aggregate([
    {
      $match: {
        paymentStatus: 'COMPLETED',
        paymentTime: { $gte: startDate, $lte: endDate }
      }
    },
    {
      $group: {
        _id: '$paymentMethod',
        totalRevenue: { $sum: '$amount' },
        count: { $sum: 1 }
      }
    }
  ]);
};
```

### Resource Management

- **Connection Pooling**: MongoDB connection pool
- **File Upload Limits**: Max file size, file type validation
- **Rate Limiting**: Prevent abuse (có thể dùng express-rate-limit)

## Security Notes
**Các biện pháp bảo mật**

### Authentication/Authorization

1. **Password Hashing**: bcrypt với salt rounds 10
2. **JWT Security**: 
   - Strong secret key
   - Short expiration time
   - Refresh token mechanism
3. **Role-based Access**: Middleware kiểm tra role

```javascript
// middleware/authorize.middleware.js
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: { message: 'Không có quyền truy cập' }
      });
    }
    next();
  };
};

// Usage
router.get('/admin/movies', auth, authorize('admin'), getMovies);
```

### Input Validation

- **Server-side Validation**: Luôn validate trên server
- **Sanitization**: Sanitize user inputs
- **Type Checking**: Validate data types

```javascript
// Prevent NoSQL Injection
const sanitizeQuery = (query) => {
  const sanitized = {};
  for (const [key, value] of Object.entries(query)) {
    if (typeof value === 'string') {
      sanitized[key] = value.replace(/[${}]/g, '');
    } else {
      sanitized[key] = value;
    }
  }
  return sanitized;
};
```

### Data Encryption

- **Sensitive Data**: Không lưu plain text passwords, payment info
- **HTTPS**: Bắt buộc cho production
- **Environment Variables**: Không commit secrets vào git

### Secrets Management

- **Environment Variables**: Sử dụng .env file
- **Gitignore**: Đảm bảo .env trong .gitignore
- **Production**: Sử dụng secret management service (AWS Secrets Manager, etc.)

### Payment Security

- **Webhook Verification**: Verify signatures từ payment gateways
- **Idempotency**: Prevent duplicate payments
- **No Card Storage**: Không lưu thông tin thẻ tín dụng

```javascript
// Verify VNPAY webhook
export const verifyVNPAYWebhook = (params) => {
  const secureHash = params.vnp_SecureHash;
  delete params.vnp_SecureHash;
  
  const sortedParams = sortObject(params);
  const signData = querystring.stringify(sortedParams);
  const hmac = crypto.createHmac('sha512', process.env.VNPAY_HASH_SECRET);
  const signed = hmac.update(signData).digest('hex');
  
  return secureHash === signed;
};
```
