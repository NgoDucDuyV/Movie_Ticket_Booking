# Backend Architecture - Quick Reference

## 🎯 Project Overview

**Movie Ticket Booking System** - Nền tảng đặt vé xem phim trực tuyến với:
- Guest browsing (xem phim, rạp, lịch chiếu)
- User booking & payment (đặt vé, thanh toán)
- Admin management (quản lý phim, rạp, lịch chiếu, doanh thu)
- Payment integration (VNPAY, VietQR, PayPal)
- E-ticket generation (PDF + QR code)

---

## 📋 Key Entities

| Entity | Purpose | Key Fields |
|--------|---------|-----------|
| **User** | User accounts | id, email, password, name, phone, address, status |
| **Role** | Access control | ADMIN, USER |
| **Movie** | Film information | title, description, poster, trailer, genre, type (2D/3D) |
| **Genre** | Film categories | horror, action, comedy, etc. |
| **Theater** | Cinema branches | name, location, phone, website |
| **Screen** | Screening rooms | name, capacity, type (2D/3D/IMAX) |
| **Seat** | Individual seats | number, type (STANDARD/VIP), status |
| **Showtime** | Film schedules | movie, screen, start_time, end_time |
| **Booking** | User orders | user, showtime, total_price, status, qr_code |
| **BookingSeat** | Seats in booking | booking, seat, price_applied |
| **Payment** | Payment records | booking, amount, method, status, transaction_id |
| **TicketPrice** | Dynamic pricing | seat_type, movie_type, price, day_type, time_range |
| **News** | Promotions & news | title, content, image, status |
| **Favorite** | Bookmarked movies | user, movie |

---

## 🔑 Core Features (Priority Order)

### Phase 1: Foundation (1 week)
- [x] Database schema design
- [ ] Project setup & dependencies
- [ ] Environment configuration
- [ ] Logging & monitoring

### Phase 2: Authentication (1 week)
- [ ] User registration (email + OTP)
- [ ] Login with JWT
- [ ] Token refresh
- [ ] Role-based authorization

### Phase 3: Content Management (1.5 weeks)
- [ ] Movie CRUD (+ search & filtering)
- [ ] Theater & Screen CRUD
- [ ] Genre management
- [ ] Showtime management (conflict detection)

### Phase 4: Core Booking (1.5 weeks)
- [ ] Seat display & availability
- [ ] Ticket price calculation
- [ ] Booking creation & seat locking (5 min)
- [ ] Booking history & cancellation

### Phase 5: Payment Processing (1.5 weeks)
- [ ] VNPAY integration
- [ ] Payment status tracking
- [ ] Callback handling
- [ ] Refund processing

### Phase 6: Features (2 weeks)
- [ ] E-ticket generation (PDF + QR)
- [ ] Email notifications
- [ ] User profile management
- [ ] Favorites management
- [ ] Admin reports & analytics

### Phase 7: Polish (1.5 weeks)
- [ ] Comprehensive testing
- [ ] Performance optimization
- [ ] Security audit
- [ ] Documentation

**Total: ~13 weeks (3 months)**

---

## 🏗️ Architecture Layers

```
┌─────────────────────────────────────────────────────┐
│                   Routes (REST API)                 │
│  /api/auth, /api/movies, /api/bookings, etc        │
└────────────────┬────────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────────┐
│              Controllers & Middleware                │
│  Request validation, auth, error handling          │
└────────────────┬────────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────────┐
│                  Services (Business Logic)          │
│  Auth, Booking, Payment, Email, PDF generation     │
└────────────────┬────────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────────┐
│                  Models (ORM: Sequelize)            │
│  Data access & database operations                  │
└────────────────┬────────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────────┐
│              Database (MySQL) & External APIs       │
│  Datastore, Email service, Payment gateway         │
└─────────────────────────────────────────────────────┘
```

---

## 🔌 API Endpoints Structure

### Public (Guest)
```
GET  /api/movies                    # List movies
GET  /api/movies/{id}              # Movie detail
GET  /api/movies/search            # Search movies
GET  /api/movies/{id}/showtimes    # Movie showtimes
GET  /api/theaters                 # List theaters
GET  /api/theaters/{id}            # Theater detail
GET  /api/news                     # List news
POST /api/auth/register            # User registration
POST /api/auth/login               # User login
POST /api/auth/verify-otp          # Verify email OTP
```

### Protected (Authenticated User)
```
POST   /api/bookings               # Create booking
GET    /api/bookings/{id}          # Booking detail
GET    /api/user/bookings          # User's bookings
PUT    /api/bookings/{id}/cancel   # Cancel booking
GET    /api/showtimes/{id}/seats   # Get seats for showtime
POST   /api/payments               # Create payment
GET    /api/payments/{id}          # Payment detail
POST   /api/user/favorites         # Add to favorites
GET    /api/user/favorites         # Get favorites
PUT    /api/user/profile           # Update profile
GET    /api/user/profile           # Get profile
```

### Admin Only
```
POST   /api/admin/movies           # Create movie
PUT    /api/admin/movies/{id}      # Update movie
DELETE /api/admin/movies/{id}      # Delete movie
POST   /api/admin/theaters         # Create theater
CRUD   /api/admin/screens          # Manage screens
CRUD   /api/admin/showtimes        # Manage showtimes
CRUD   /api/admin/seats            # Manage seats
CRUD   /api/admin/ticket-prices    # Manage prices
CRUD   /api/admin/news             # Manage news
GET    /api/admin/users            # List users
PUT    /api/admin/users/{id}/block # Block user
GET    /api/admin/bookings         # List bookings
GET    /api/admin/payments         # Payment tracking
GET    /api/admin/reports/revenue  # Revenue reports
```

---

## 🗂️ Key Files to Create

**Priority 1 (Critical):**
- models/ - All 14 data models
- controllers/ - Request handlers
- services/ - Business logic
- routes/ - API endpoints
- middleware/ - Auth, validation, error handling

**Priority 2 (Important):**
- validators/ - Input validation schemas
- utils/ - Helpers (JWT, bcrypt, response formatting)
- libs/ - Database, email, payment gateway integrations
- jobs/ - Background tasks (seat expiry, payment check)

**Priority 3 (Supporting):**
- migrations/ - Database schema changes
- seeders/ - Initial data
- tests/ - Unit & integration tests

---

## 💾 Database Design Highlights

**Key Constraints:**
- User.email → UNIQUE
- Booking.user_id + Showtime.id → Can have multiple bookings
- Seat.screen_id + Seat.seat_number → UNIQUE
- Showtime → Check no conflicts in same screen
- BookingSeat → Many-to-many relationship

**Indexes (Performance):**
- users(email)
- movies(status, release_date)
- bookings(user_id, status, created_at)
- payments(booking_id, status)
- seats(screen_id, status)

**Status Fields (State Machine):**
- Booking: PENDING → COMPLETED → CHECKED_IN or CANCELLED
- Payment: PENDING → COMPLETED/FAILED → REFUNDED (optional)
- User: ACTIVE or BLOCKED

---

## 🔐 Security Considerations

1. **Authentication:**
   - JWT tokens (1 hour expiry)
   - Refresh tokens (7 days)
   - OTP for registration verification

2. **Authorization:**
   - Role-based access control (RBAC)
   - Middleware checks user role before operations

3. **Data Protection:**
   - bcryptjs for password hashing
   - Encryption for sensitive data (payment info)
   - HTTPS only in production

4. **Business Logic:**
   - Atomic transactions for bookings + payments
   - Soft locks on seats during selection
   - Concurrent booking conflict prevention

---

## 🔄 Critical Workflows

### Booking Flow
```
1. User selects showtime
2. System fetches available seats
3. User selects seats (check availability in real-time)
4. System locks seats for 5 minutes
5. Create Booking record (status: PENDING)
6. User proceeds to payment
7. Payment succeeds → Create Payment record + Ticket PDF + Email
8. Update Booking status → COMPLETED
9. Seats become BOOKED permanently
```

### Conflict Detection (Showtimes)
```
Admin creates showtime for Movie A in Room 101, 19:00-20:45
System checks: Any showtime in Room 101 between 19:00-20:45?
- If YES → Error: Conflict with existing showtime
- If NO → Save showtime
```

### Price Calculation
```
Seat Type: VIP
Movie Type: 3D
Day Type: WEEKEND
Time: 20:00

Lookup TicketPrice where:
- type_seat = VIP
- type_movie = 3D
- day_type = WEEKEND
- start_time <= 20:00 AND end_time > 20:00

Result: Price = 150,000 VND
```

---

## 📊 Documentation Files Created

Location: `docs/ai/`

1. **requirements/** - SRS document with detailed feature list
2. **design/** - Database schema, ERD, system architecture
3. **planning/** - 13-phase implementation roadmap with timelines
4. **implementation/** 
   - API documentation (endpoints, request/response examples)
   - Backend structure (folder layout, file templates)
5. **testing/** - Test strategy template
6. **deployment/** - Infrastructure setup (to be created)
7. **monitoring/** - Observability setup (to be created)

---

## 🚀 Next Steps

1. **Setup Project:**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Create Models:**
   - Start with foundational models (Role, Genre)
   - Then related models (User, Movie, Theater)
   - Finally, transaction models (Booking, Payment)

3. **Implement Phase 1 (Infrastructure):**
   - Database connection
   - Environment configuration
   - Error handling middleware

4. **Implement Phase 2 (Authentication):**
   - User registration + OTP
   - JWT login
   - Authorization middleware

5. **Continue per implementation plan**

---

## 📞 API Base URL
```
Development:  http://localhost:3000/api
Production:   https://api.movietickets.com/api
```

---

## 🎓 Best Practices

✅ **DO:**
- Use services for business logic (not controllers)
- Validate all inputs before processing
- Use transactions for multi-step operations
- Implement proper error handling & logging
- Write tests as you code
- Follow consistent naming conventions
- Use environment variables for configs

❌ **DON'T:**
- Put business logic in controllers
- Skip input validation
- Use hardcoded values
- Forget error handling
- Make database calls directly from routes
- Skip tests
- Ignore edge cases (concurrent bookings, etc.)

---

## 📈 Performance Targets

- API response time: < 200ms
- Seat availability check: < 100ms
- Payment processing: < 2 seconds
- Database queries: Use indexes, pagination
- Concurrent bookings: Support 100+ simultaneous users
- Cache frequently accessed data (movies, showtimes)

---

## 📞 Support

For questions or clarifications on the architecture:
- Check `docs/ai/` for detailed documentation
- Review implementation plan for phase breakdown
- Refer to API documentation for endpoint details

