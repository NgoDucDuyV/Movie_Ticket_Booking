# Sơ Đồ Kiến Trúc & Các Quy Trình Chính

## 1. Kiến Trúc Hệ Thống Tổng Quát

```
┌───────────────────────────────────────────────────────────────────────┐
│                           FRONTEND (React)                            │
│                    (Desktop, Mobile, Tablet)                          │
└───────────────────────────────┬─────────────────────────────────────┘
                                │ HTTP/HTTPS
                                │ REST API
                                ▼
        ┌───────────────────────────────────────────────────────┐
        │            API GATEWAY / Load Balancer                │
        │           (CORS, Rate Limiting, etc.)                 │
        └──────────────────┬──────────────────────────────────┘
                           │
        ┌──────────────────▼──────────────────┐
        │       EXPRESS.JS SERVER             │
        ├─────────────────────────────────────┤
        │  ┌─────────────────────────────────┐
        │  │  Routes (15+ endpoint groups)   │
        │  ├─────────────────────────────────┤
        │  │  Auth | Movie | Booking | etc   │
        │  └──────┬──────────────────────────┘
        │         │
        │  ┌──────▼──────────────────────────┐
        │  │  Middleware Stack               │
        │  ├──────────────────────────────────┤
        │  │  • Authentication (JWT)          │
        │  │  • Authorization (RBAC)          │
        │  │  • Validation (Joi/Express)      │
        │  │  • Error Handling                │
        │  │  • CORS                          │
        │  │  • Request Logging               │
        │  └──────┬───────────────────────────┘
        │         │
        │  ┌──────▼──────────────────────────┐
        │  │  Controllers                    │
        │  ├──────────────────────────────────┤
        │  │  Request → Validate → Service   │
        │  └──────┬───────────────────────────┘
        │         │
        │  ┌──────▼──────────────────────────┐
        │  │  Services                       │
        │  ├──────────────────────────────────┤
        │  │  AuthService                     │
        │  │  BookingService                  │
        │  │  PaymentService                  │
        │  │  EmailService                    │
        │  │  TicketService                   │
        │  │  ReportService                   │
        │  └──────┬───────────────────────────┘
        │         │
        │  ┌──────▼──────────────────────────┐
        │  │  Utilities & Helpers            │
        │  ├──────────────────────────────────┤
        │  │  JWT Token Management           │
        │  │  Password Hashing               │
        │  │  Price Calculator               │
        │  │  QR Code Generator              │
        │  │  Date/Time Utils                │
        │  └──────┬───────────────────────────┘
        │         │
        │  ┌──────▼──────────────────────────┐
        │  │  Models (Sequelize ORM)         │
        │  ├──────────────────────────────────┤
        │  │  User | Movie | Booking | etc   │
        │  │  (14 data models)               │
        │  └──────┬───────────────────────────┘
        │         │
        └─────────┼──────────────────────────┘
                  │
    ┌─────────────┴──────────────┬──────────────┬─────────────┐
    │                            │              │             │
    ▼                            ▼              ▼             ▼
┌─────────────┐          ┌─────────────┐ ┌──────────┐   ┌──────────┐
│  MySQL      │          │   Email     │ │ Payment  │   │   AWS    │
│  Database   │          │   Service   │ │ Gateway  │   │ S3/File  │
├─────────────┤          ├─────────────┤ ├──────────┤   │ Storage  │
│ 14 tables   │          │ Nodemailer  │ │ VNPAY    │   └──────────┘
│ Indexes    │          │ SendGrid    │ │ VietQR   │
│ Relations  │          │ (2FA OTP)   │ │ PayPal   │
└─────────────┘          └─────────────┘ └──────────┘

Optional: Redis Caching (Movie, Showtime data)
Optional: Job Scheduler (Seat expiry, Payment check)
```

---

## 2. Data Flow - Quy Trình Đặt Vé

```
┌──────────────┐
│    GUEST     │ Xem danh sách phim
└──────┬───────┘
       │ GET /api/movies
       ▼
┌─────────────────────────────────┐
│ MovieController.getMovies()     │ Fetch từ Movie model
└──────┬────────────────────────┬─┘
       │ Có phim yêu thích       │ Kết quả
       │ Chọn phim để xem chi tiết
       ▼
┌──────────────┐  GET /api/movies/{id}
│   Xem chi    │
│ tiết + lịch  │────────────────────→ MovieController.getMovieById()
│ chiếu        │ Gồm: showtimes by   └────────┬──────────────┘
└──────┬───────┘ rạp/ngày             │ Fetch Movie
       │                              │ + Showtimes
       │ Chọn suất chiếu              │
       ▼                              ▼
┌──────────────┐  POST /auth/login    ┌──────────────────┐
│ MUST LOGIN   │──────────────────────→ AuthController   │
│ (if not)     │ email + password      │ .login()         │
└──────┬───────┘ ◄─────────────────────┼──────────────────┘
       │ JWT Token + Refresh          │ Hash password
       │                              │ Create JWT
       ▼
┌──────────────┐
│   USER       │ Đã đăng nhập
└──────┬───────┘
       │ POST /api/bookings
       │ + showtimeId + seats[]
       ▼
┌─────────────────────────────────────┐
│ BookingController.createBooking()   │
└─────────────────────────────────────┘
       │ 1. BookingService.createBooking()
       │    - Validate seats available
       │    - Check each seat status = AVAILABLE
       ▼
┌─────────────────────────────────────┐
│ TicketPriceService.calculatePrice() │
│ Input: seatType, movieType,         │
│        dayType, timeSlot            │
└─────────┬───────────────────────────┘
          │ Output: price per seat
          ▼
┌──────────────────────────────┐
│ SeatLockService.lockSeats()  │
│ - Tạo Booking record         │
│ - Tạo BookingSeat records    │
│ - Set expires_at = now() + 5min
└──────┬───────────────────────┘
       │ Return Booking + seats
       │ Message: "5 phút để thanh toán"
       ▼
┌──────────────────┐
│ USER xem tổng    │ Total: 160,000 VND
│ tiền + chọn      │ Seats: A1, A2
│ phương thức      │ Choose: VNPAY
│ thanh toán       │
└──────┬───────────┘
       │ POST /api/payments
       │ + bookingId + method
       ▼
┌──────────────────────────────┐
│ PaymentController            │
│ .createPayment()             │
└──────┬───────────────────────┘
       │ PaymentService.initiatePayment()
       │ - Create Payment record (PENDING)
       │ - Call VNPAY API
       ▼
┌──────────────────────────────┐
│   VNPAY Payment Gateway      │ Redirect đến trang thanh toán
│   (Sandbox/Production)       │
└──────┬───────────────────────┘
       │ User thanh toán (card, bank, etc)
       │ Payment success/failed
       ▼
┌──────────────────────────────┐
│ VNPAY Callback               │ POST /api/payments/vnpay-callback
│ Gửi kết quả về Backend       │ ?vnp_Amount=16000000&vnp_BankCode=NCB...
└──────┬───────────────────────┘
       │ Verify signature
       │ Process callback
       ▼
    ┌──SUCCESS──┐           ┌────FAILED─────┐
    │           │           │                │
    ▼           ▼           ▼                ▼
┌─────────────────┐   ┌──────────────┐
│ Update Payment  │   │ Update Payment│
│ status =        │   │ status =     │
│ COMPLETED       │   │ FAILED       │
└────┬────────────┘   │              │
     │                │ Release      │
     │ TicketService  │ locked seats │
     │ .generatePDF() │              │
     │ .generateQR()  │ Booking      │
     │                │ status =     │
     │ EmailService   │ PENDING      │
     │ .sendTicket()  │ (Cho phép    │
     │               │ thanh toán   │
     ▼               │ lại)         │
┌─────────────────┐ └──────────────┘
│ Update Booking  │
│ status =        │
│ COMPLETED       │ Email gửi vé (PDF + QR)
│ ticket_pdf_url  │
│ qr_code         │
└─────────────────┘
     │
     │ SUCCESS! Vé điện tử được gửi
     │
     ▼
┌──────────────────┐
│ USER nhận vé:    │
│ - PDF email      │ Có thể tải lại từ:
│ - Download app   │ GET /api/user/bookings/{id}
│ - QR code        │ /tickets/{id}/download
└──────────────────┘
```

---

## 3. Data Flow - Hủy Vé

```
┌──────────────┐
│    USER      │ Xem lịch sử đặt vé
└──────┬───────┘
       │ GET /api/user/bookings
       ▼
┌────────────────────┐
│ List bookings      │ Status: PENDING, COMPLETED, CANCELLED
└────┬───────────────┘
     │ Chọn vé COMPLETED
     │ Nhấn "Hủy"
     ▼
┌────────────────────┐
│ PUT /api/bookings/ │
│ {id}/cancel        │
└────┬───────────────┘
     │ reason: "Change of plans"
     ▼
┌────────────────────────────┐
│ BookingController          │
│ .cancelBooking()           │
└────┬───────────────────────┘
     │ BookingService.cancelBooking()
     │ 1. Find booking
     ▼
┌────────────────────────────┐
│ Validate:                  │
│ - Showtime hasn't started? │
│ - Theater allows cancel?   │
└────┬───────────────────────┘
     │ if valid:
     ▼
┌────────────────────────────┐
│ Check Payment Status:      │
│                            │
│ If COMPLETED:              │
│  → Initiate REFUND         │
│                            │
│ If PENDING:                │
│  → Just release seats      │
└────┬───────────────────────┘
     ▼
┌────────────────────────────┐
│ Release locked seats:      │
│ - BookingSeat.destroy()    │
│ - Seat status = AVAILABLE  │
└────┬───────────────────────┘
     ▼
┌────────────────────────────┐
│ Update Booking status:     │
│ = CANCELLED                │
└────┬───────────────────────┘
     │ If refunded:
     │ PaymentService.refund()
     ▼
┌────────────────────────────┐
│ Update Payment status:     │
│ = REFUNDED                 │
│ refund_amount = amount     │
│ refund_date = now()        │
└────┬───────────────────────┘
     │ Send confirmation email
     ▼
┌────────────────────────────┐
│ EmailService.sendEmail()   │
│ Type: CANCEL_CONFIRMATION  │
│ Body: Booking cancelled,   │
│       Refund will be       │
│       processed in 3-5     │
│       business days        │
└────────────────────────────┘
```

---

## 4. Database Relationships

```
                        ┌─────────────────┐
                        │     ROLES       │
                        ├─────────────────┤
                        │ id (PK)         │
                        │ role_name       │ ◄──────┐
                        └────────┬────────┘        │
                                 │          Has role
                                 │
                        ┌────────▼────────┐
                        │     USERS       │
                        ├─────────────────┤
                        │ id (PK)         │
                        │ email           │
                        │ password        │
                        │ phone           │
                        │ role_id (FK)    │
                        │ status          │
                        └────────┬────────┘
                                 │
                 ┌───────────────┼────────────────┐
                 │               │                │
          Has bookings    Add to favorites    Update profile
                 │               │                │
                 ▼               ▼                ▼
        ┌──────────────┐  ┌──────────────┐
        │  BOOKINGS    │  │ FAVORITES    │
        ├──────────────┤  ├──────────────┤
        │ id (PK)      │  │ id (PK)      │
        │ user_id (FK) │  │ user_id (FK) │
        │ showtime_id  │  │ movie_id (FK)│
        │ total_price  │  └──────────────┘
        │ status       │
        └────┬─────────┘
             │
        ┌────▼─────────┐
        │ BOOKING_SEAT │◄──────┐
        ├──────────────┤       │
        │ id (PK)      │       │
        │ booking_id   │   Many seats
        │ seat_id (FK) │       │
        │ price_appld  │       │
        └──────────────┘       │
                               │
        ┌──────────────────────┘
        │
        ▼
    ┌──────────────┐
    │   SEATS      │
    ├──────────────┤
    │ id (PK)      │
    │ screen_id(FK)│
    │ seat_number  │
    │ type         │
    │ status       │
    └────┬─────────┘
         │ Belongs to
         │
         ▼
    ┌──────────────┐
    │   SCREENS    │
    ├──────────────┤
    │ id (PK)      │
    │ theater_id   │
    │ name         │
    │ capacity     │
    └────┬─────────┘
         │ Belongs to
         │
         ▼
    ┌──────────────┐
    │  THEATERS    │
    ├──────────────┤
    │ id (PK)      │
    │ name         │
    │ location     │
    │ phone        │
    └──────────────┘

┌─────────────────────────────────────────────────────┐

    ┌──────────────┐
    │   PAYMENTS   │◄──────┐
    ├──────────────┤       │ Has payment
    │ id (PK)      │       │
    │ booking_id   │       │
    │ amount       │  ┌────┴──────┐
    │ method       │  │ BOOKINGS  │
    │ status       │  └───────────┘
    │ transaction_ │
    │   id         │
    └──────────────┘

┌────────────────────────────────────────────────────┐

    ┌──────────────┐
    │   SHOWTIMES  │
    ├──────────────┤
    │ id (PK)      │
    │ movie_id (FK)│
    │ screen_id(FK)│
    │ start_time   │
    │ end_time     │
    └───┬──────────┘
        │
    ┌───┴─────────────┐
    │                 │
    ▼                 ▼
┌──────────────┐ ┌─────────────┐
│   MOVIES     │ │   SCREENS   │
├──────────────┤ └─────────────┘
│ id (PK)      │
│ title        │
│ genre_id     │
│ type (2D/3D) │
│ status       │
└────┬─────────┘
     │
     ▼
┌──────────────┐
│   GENRES     │
├──────────────┤
│ id (PK)      │
│ name         │
└──────────────┘

┌──────────────────────────────────────────────────────┐

┌──────────────┐
│ TICKET_PRICE │
├──────────────┤
│ id (PK)      │
│ type_seat    │
│ type_movie   │
│ price        │
│ day_type     │
│ time_range   │
└──────────────┘

┌──────────────────────────────────────────────────────┐

┌──────────────┐
│     NEWS     │
├──────────────┤
│ id (PK)      │
│ title        │
│ content      │
│ image        │
│ status       │
└──────────────┘
```

---

## 5. Authentication & Authorization Flow

```
┌────────────┐
│ User Login │ email + password
└─────┬──────┘
      │
      ▼
┌─────────────────────┐
│ POST /auth/login    │
│ + email + password  │
└──────┬──────────────┘
       │
       ▼
┌──────────────────────────┐
│ AuthController.login()   │
└──────┬───────────────────┘
       │
       ▼
┌──────────────────────────┐
│ AuthService.login()      │
├──────────────────────────┤
│ 1. Find user by email    │
│ 2. Compare password hash │
│ 3. If match → Generate   │
│    JWT tokens            │
│ 4. Return tokens         │
└──────┬───────────────────┘
       │
       ├─ accessToken (1 hour)
       ├─ refreshToken (7 days)
       └─ user object
       │
       ▼
┌─────────────────────┐
│ Client stores token │
│ in localStorage     │
└──────┬──────────────┘
       │
       ▼
┌──────────────────────────┐
│ Send API request with    │
│ Header:                  │
│ Authorization: Bearer {  │
│   accessToken            │
│ }                        │
└──────┬───────────────────┘
       │
       ▼
┌──────────────────────────┐
│ authMiddleware           │
│ 1. Extract token         │
│ 2. Verify JWT signature  │
│ 3. Check expiry          │
│ 4. Decode payload        │
│ 5. Attach user to req    │
└──────┬───────────────────┘
       │
    ┌──Valid──┐ ┌──Expired──┐ ┌──Invalid──┐
    │         │ │           │ │           │
    ▼         ▼ ▼           ▼ ▼
┌──────────┐ ┌─────────────┐ ┌───────────┐
│Continue  │ │POST /auth/  │ │Return 401 │
│to next   │ │refresh-token│ │Unauthorized
│middleware│ │Get new      │ └───────────┘
└──────────┘ │accessToken  │
             └─────────────┘

┌─────────────────────────────────────────────────┐
Then: authorize middleware (if needed)
┌──────────────────────────────┐
│ authorize(roles: ['ADMIN'])  │
├──────────────────────────────┤
│ Check req.user.role          │
│ in allowed roles             │
└──────┬───────────────────────┘
       │
    ┌──Yes──┐ ┌──No──┐
    │       │ │      │
    ▼       ▼ ▼
┌──────────┐ ┌─────────────┐
│Continue  │ │Return 403   │
│to handler│ │Forbidden    │
└──────────┘ └─────────────┘
```

---

## 6. Payment Processing Sequence

```
User chooses payment method (VNPAY)
            │
            ▼
    POST /api/payments
    + bookingId: "uuid"
    + method: "VNPAY"
    + amount: 160000
            │
            ▼
┌─────────────────────────────┐
│PaymentController            │
│.createPayment()             │
└──────┬──────────────────────┘
       │
       ▼
┌─────────────────────────────┐
│PaymentService.               │
│initiateVNPAYPayment()       │
├─────────────────────────────┤
│ 1. Create Payment record    │
│    status = PENDING         │
│ 2. Call VNPAY API           │
│    - Prepare payload        │
│    - Generate signature     │
│    - Call /paygate          │
└──────┬──────────────────────┘
       │
       ▼
┌──────────────────┐
│  VNPAY Sandbox   │ Return payment URL
│  /paygate        │
└──────┬───────────┘
       │
       ▼
┌──────────────────────────┐
│ Return to client         │
│ {                        │
│   paymentId: "uuid",     │
│   paymentUrl: "https://  │
│   sandbox.vnpayment..."  │
│ }                        │
└──────┬───────────────────┘
       │ Redirect to payment URL
       │ User enters card info
       ▼
┌──────────────────────────┐
│  VNPAY Payment Gateway   │
│  - Process payment       │
│  - Bank authorization    │
│  - Success/Failure       │
└──────┬───────────────────┘
       │
    ┌──SUCCESS──┐ ┌──FAILED──┐
    │           │ │          │
    ▼           ▼ ▼
  Callback     Callback
  success      failure
    │           │
    │ POST /api/payments/vnpay-callback
    │ + vnp_ResponseCode=00 (success) or non-zero (fail)
    │ + vnp_TxnRef=bookingId
    │ + vnp_Amount=16000000
    │ + vnp_TransactionNo
    │ + vnp_SecureHash=signature
    │
    ▼
┌─────────────────────────┐
│PaymentController        │
│.handleVNPAYCallback()   │
└──────┬──────────────────┘
       │
       ▼
┌─────────────────────────┐
│1. Verify signature      │
│   (HMAC-SHA512)         │
└──────┬──────────────────┘
       │
    ┌──Valid──┐ ┌──Invalid──┐
    │         │ │           │
    ▼         ▼ ▼
Update DB    Return error
             "Invalid signature"
    │
    │ Parse response code
    ▼
  ┌─────────────────────────┐
  │ If ResponseCode = 00    │
  │ (SUCCESS)               │
  └──────┬──────────────────┘
         │
         ▼
    ┌─────────────────────────┐
    │1. Update Payment:       │
    │   status = COMPLETED    │
    │   transaction_id = vnp_ │
    │   TransactionNo         │
    │                         │
    │2. Update Booking:       │
    │   status = COMPLETED    │
    │                         │
    │3. TicketService:        │
    │   - Generate PDF        │
    │   - Generate QR code    │
    │   - Store URLs          │
    │                         │
    │4. EmailService:         │
    │   - Send ticket email   │
    │   - Attach PDF          │
    │                         │
    │5. Return response       │
    │   RspCode = "00"        │
    │   Message = "Success"   │
    └──────┬──────────────────┘
           │
           ▼
        SUCCESS
        User receives email with ticket

  OR

  ┌─────────────────────────┐
  │ If ResponseCode != 00   │
  │ (FAILED)                │
  └──────┬──────────────────┘
         │
         ▼
    ┌─────────────────────────┐
    │1. Update Payment:       │
    │   status = FAILED       │
    │                         │
    │2. Update Booking:       │
    │   status = PENDING      │
    │   (keep for retry)      │
    │                         │
    │3. Release locked seats: │
    │   BookingSeat.destroy() │
    │   Seat.status = AVL     │
    │                         │
    │4. Return response:      │
    │   RspCode = "00"        │
    │   (Always return 00     │
    │   to VNPAY)             │
    └──────┬──────────────────┘
           │
           ▼
        FAILED
        User can retry payment
```

---

## 7. Background Jobs

```
┌────────────────────────────────────────────┐
│  Job Scheduler (node-schedule)             │
│  Runs at regular intervals                 │
└────────────────┬───────────────────────────┘
                 │
    ┌────────────┼────────────┐
    │            │            │
    ▼            ▼            ▼
┌─────────────┐ ┌──────────────┐ ┌──────────────┐
│Job 1:       │ │Job 2:        │ │Job 3:        │
│Expire Seats │ │Check Payment │ │Send Reminders│
│(Every 1 min)│ │Status        │ │(Daily)       │
│             │ │(Every 5 min) │ │              │
└─────┬───────┘ └──────┬───────┘ └────┬─────────┘
      │                │              │
      ▼                ▼              ▼
┌────────────────┐ ┌──────────────┐ ┌────────────┐
│Find PENDING    │ │Find PENDING  │ │Find         │
│Bookings where  │ │Payments      │ │upcoming     │
│expires_at <    │ │Initiate      │ │showtimes    │
│NOW             │ │polling to    │ │Send email   │
│                │ │gateway       │ │reminders    │
│Release seats   │ │Update status │ │to users     │
│Remove booking  │ │if completed  │ │             │
│Update status   │ │Release seats │ │             │
│to EXPIRED      │ │if failed     │ │             │
└────────────────┘ └──────────────┘ └────────────┘
```

---

## 8. State Machines

### Booking State Machine
```
         ┌─────────────┐
         │   CREATED   │ Initial state
         └──────┬──────┘
                │
                ▼
         ┌─────────────┐
         │   PENDING   │ Waiting for payment
         └──────┬──────┘
                │
       ┌────────┴────────┐
       │                 │
       ▼                 ▼
    ┌──────────┐   ┌──────────────┐
    │COMPLETED │   │PAYMENT FAILED │
    │Payment OK│   │(can retry)    │
    │Seats     │   └───────┬──────┘
    │locked    │           │
    └────┬─────┘           │ Retry payment
         │                 │
         ▼                 ▼
    ┌──────────┐   ┌──────────────┐
    │CHECKED_IN│   │PENDING       │
    │(at cinema)   │(again)       │
    └──────────┘   └──────────────┘
    
    ANYTIME BEFORE SHOWTIME:
    
    ┌─────────────┐
    │   ANY STATE │ User clicks Cancel
    └──────┬──────┘
           ▼
    ┌─────────────┐
    │ CANCELLED   │ Seats released
    │ Refund      │ Payment refunded
    │ initiated   │
    └─────────────┘
```

### Payment State Machine
```
    ┌──────────┐
    │ PENDING  │ Initial
    └────┬─────┘
         │
    ┌────┴──────────┐
    │               │
    ▼               ▼
┌──────────┐   ┌──────────┐
│COMPLETED │   │  FAILED  │
│Payment   │   │Payment   │
│success   │   │failed    │
└──────────┘   └────┬─────┘
    │               │
    │               │ User retry
    │               │
    │               ▼
    │          ┌──────────┐
    │          │ PENDING  │
    │          └────┬─────┘
    │               │
    ▼               ▼
┌──────────┐   ┌──────────┐
│REFUNDED  │   │COMPLETED │
│(if       │   │(or FAILED│
│cancelled)│   │ again)   │
└──────────┘   └──────────┘
```

---

## 9. Seat Status Lifecycle

```
┌─────────────┐
│ AVAILABLE   │ Mới tạo
└──────┬──────┘
       │ User chọn ghế
       │ Tạo BookingSeat
       ▼
┌─────────────┐
│   HELD      │ Giữ 5 phút
└──────┬──────┘
       │
    ┌──┴──┐
    │     │
    │     │ Hết 5 phút + chưa thanh toán
    │     ▼
    │  ┌─────────────┐
    │  │ AVAILABLE   │ Release ghế
    │  └─────────────┘
    │
    │ Thanh toán thành công
    ▼
┌─────────────┐
│   BOOKED    │ Đã bán
└──────┬──────┘
       │ User check-in
       │ tại rạp
       ▼
┌─────────────┐
│ CHECKED_IN  │ Đã sử dụng
└─────────────┘

ALT:
BOOKED → CANCELLED (khi user hủy)
         Release ghế → AVAILABLE
```

