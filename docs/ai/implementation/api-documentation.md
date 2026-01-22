# API Documentation - Movie Ticket Booking System

## Base URL
```
http://localhost:3000/api
```

---

## 1. Authentication APIs

### 1.1 Register
```
POST /auth/register
Content-Type: application/json

{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "phone": "0912345678"
}

Response (201):
{
  "success": true,
  "message": "Verification email sent. Please check your email.",
  "data": {
    "id": "uuid",
    "email": "john@example.com"
  }
}
```

### 1.2 Verify OTP
```
POST /auth/verify-otp
Content-Type: application/json

{
  "email": "john@example.com",
  "otp": "123456"
}

Response (200):
{
  "success": true,
  "message": "Account activated successfully",
  "data": {
    "id": "uuid",
    "email": "john@example.com",
    "status": "ACTIVE"
  }
}
```

### 1.3 Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}

Response (200):
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "john@example.com",
      "first_name": "John",
      "last_name": "Doe",
      "role": "USER"
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "expiresIn": 3600
    }
  }
}
```

### 1.4 Refresh Token
```
POST /auth/refresh-token
Content-Type: application/json

{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

Response (200):
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600
  }
}
```

### 1.5 Logout
```
POST /auth/logout
Authorization: Bearer {accessToken}

Response (200):
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

## 2. Movie APIs

### 2.1 Get Movies List
```
GET /movies?page=1&limit=20&genre=action&search=avatar
Authorization: (Optional)

Response (200):
{
  "success": true,
  "data": {
    "movies": [
      {
        "id": "uuid",
        "title": "Avatar",
        "description": "...",
        "image": "https://...",
        "type": "3D",
        "duration": 162,
        "release_date": "2022-12-15",
        "genre": "Sci-Fi",
        "status": "SHOWING"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 50,
      "totalPages": 3
    }
  }
}
```

### 2.2 Search Movies
```
GET /movies/search?q=avatar&genre=sci-fi&type=3D

Response (200):
{
  "success": true,
  "data": {
    "movies": [...]
  }
}
```

### 2.3 Get Movie Detail
```
GET /movies/{movieId}

Response (200):
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "Avatar",
    "description": "...",
    "author": "James Cameron",
    "image": "https://...",
    "trailer": "https://youtube.com/...",
    "type": "3D",
    "duration": 162,
    "release_date": "2022-12-15",
    "genre": "Sci-Fi",
    "status": "SHOWING",
    "showtimes": [
      {
        "id": "uuid",
        "theater": {
          "id": "uuid",
          "name": "CGV Landmark 81",
          "location": "HCMC"
        },
        "screen": {
          "id": "uuid",
          "name": "A1",
          "type": "3D"
        },
        "start_time": "2024-01-22T19:00:00Z",
        "end_time": "2024-01-22T20:42:00Z"
      }
    ]
  }
}
```

### 2.4 Get Movie Showtimes
```
GET /movies/{movieId}/showtimes?theater_id=uuid&date=2024-01-22

Response (200):
{
  "success": true,
  "data": {
    "showtimes": [
      {
        "id": "uuid",
        "start_time": "2024-01-22T10:00:00Z",
        "end_time": "2024-01-22T11:42:00Z",
        "screen": {
          "id": "uuid",
          "name": "A1",
          "type": "3D",
          "seat_capacity": 150
        },
        "available_seats": 45
      }
    ]
  }
}
```

### 2.5 Create Movie (Admin)
```
POST /admin/movies
Authorization: Bearer {adminToken}
Content-Type: multipart/form-data

{
  "title": "Avatar",
  "description": "...",
  "author": "James Cameron",
  "genre_id": "uuid",
  "type": "3D",
  "duration": 162,
  "release_date": "2022-12-15",
  "image": <file>,
  "trailer": "https://youtube.com/..."
}

Response (201):
{
  "success": true,
  "data": { ... movie }
}
```

### 2.6 Update Movie (Admin)
```
PUT /admin/movies/{movieId}
Authorization: Bearer {adminToken}

{
  "title": "Avatar: The Way of Water",
  "status": "SHOWING"
}

Response (200):
{
  "success": true,
  "data": { ... movie }
}
```

### 2.7 Delete Movie (Admin)
```
DELETE /admin/movies/{movieId}
Authorization: Bearer {adminToken}

Response (200):
{
  "success": true,
  "message": "Movie deleted successfully"
}
```

---

## 3. Theater APIs

### 3.1 Get Theaters
```
GET /theaters?page=1&limit=10

Response (200):
{
  "success": true,
  "data": {
    "theaters": [
      {
        "id": "uuid",
        "name": "CGV Landmark 81",
        "location": "27 Ngô Đức Kế, Q1, HCMC",
        "phone": "0283344444",
        "website": "https://cgv.vn",
        "screens": [
          {
            "id": "uuid",
            "name": "A1",
            "type": "3D",
            "seat_capacity": 150
          }
        ]
      }
    ]
  }
}
```

### 3.2 Get Theater Detail
```
GET /theaters/{theaterId}

Response (200):
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "CGV Landmark 81",
    "location": "...",
    "phone": "...",
    "website": "...",
    "screens": [...]
  }
}
```

### 3.3 Create Theater (Admin)
```
POST /admin/theaters
Authorization: Bearer {adminToken}

{
  "name": "CGV Landmark 81",
  "location": "27 Ngô Đức Kế, Q1, HCMC",
  "phone": "0283344444",
  "website": "https://cgv.vn"
}

Response (201):
{
  "success": true,
  "data": { ... theater }
}
```

### 3.4 Update Theater (Admin)
```
PUT /admin/theaters/{theaterId}
Authorization: Bearer {adminToken}

{
  "phone": "0283344445"
}

Response (200):
{
  "success": true,
  "data": { ... theater }
}
```

### 3.5 Delete Theater (Admin)
```
DELETE /admin/theaters/{theaterId}
Authorization: Bearer {adminToken}

Response (200):
{
  "success": true,
  "message": "Theater deleted successfully"
}
```

---

## 4. Showtime APIs

### 4.1 Get Showtimes
```
GET /showtimes?movie_id=uuid&screen_id=uuid&date=2024-01-22

Response (200):
{
  "success": true,
  "data": {
    "showtimes": [
      {
        "id": "uuid",
        "movie": { ... },
        "screen": { ... },
        "start_time": "2024-01-22T10:00:00Z",
        "end_time": "2024-01-22T11:42:00Z",
        "status": "ACTIVE",
        "available_seats": 45
      }
    ]
  }
}
```

### 4.2 Create Showtime (Admin)
```
POST /admin/showtimes
Authorization: Bearer {adminToken}

{
  "movie_id": "uuid",
  "screen_id": "uuid",
  "start_time": "2024-01-22T19:00:00Z",
  "end_time": "2024-01-22T20:42:00Z"
}

Response (201):
{
  "success": true,
  "data": { ... showtime },
  "message": "Showtime created successfully. Verified no conflicts."
}
```

### 4.3 Update Showtime (Admin)
```
PUT /admin/showtimes/{showtimeId}
Authorization: Bearer {adminToken}

{
  "start_time": "2024-01-22T18:00:00Z",
  "status": "CANCELLED"
}

Response (200):
{
  "success": true,
  "data": { ... showtime }
}
```

### 4.4 Delete Showtime (Admin)
```
DELETE /admin/showtimes/{showtimeId}
Authorization: Bearer {adminToken}

Response (200):
{
  "success": true,
  "message": "Showtime deleted successfully"
}
```

---

## 5. Booking APIs

### 5.1 Create Booking
```
POST /bookings
Authorization: Bearer {userToken}
Content-Type: application/json

{
  "showtime_id": "uuid",
  "seats": [
    {
      "seat_id": "uuid",
      "quantity": 1
    }
  ]
}

Response (201):
{
  "success": true,
  "data": {
    "id": "uuid",
    "user_id": "uuid",
    "showtime_id": "uuid",
    "total_seat": 2,
    "total_price": 160000,
    "status": "PENDING",
    "booking_seats": [
      {
        "seat_id": "uuid",
        "seat_number": "A1",
        "price_applied": 80000
      },
      {
        "seat_id": "uuid",
        "seat_number": "A2",
        "price_applied": 80000
      }
    ],
    "expires_at": "2024-01-22T19:05:00Z",
    "message": "Seats locked for 5 minutes. Please complete payment."
  }
}
```

### 5.2 Get Booking Detail
```
GET /bookings/{bookingId}
Authorization: Bearer {userToken}

Response (200):
{
  "success": true,
  "data": {
    "id": "uuid",
    "user_id": "uuid",
    "showtime": {
      "id": "uuid",
      "movie": { ... },
      "screen": { ... },
      "start_time": "2024-01-22T19:00:00Z"
    },
    "total_seat": 2,
    "total_price": 160000,
    "status": "PENDING",
    "booking_seats": [ ... ],
    "expires_at": "2024-01-22T19:05:00Z"
  }
}
```

### 5.3 Get User Bookings
```
GET /user/bookings?status=COMPLETED&page=1&limit=10
Authorization: Bearer {userToken}

Response (200):
{
  "success": true,
  "data": {
    "bookings": [
      {
        "id": "uuid",
        "movie_title": "Avatar",
        "theater_name": "CGV Landmark 81",
        "showtime": "2024-01-22T19:00:00Z",
        "total_price": 160000,
        "status": "COMPLETED",
        "ticket_pdf_url": "https://...",
        "created_at": "2024-01-20T10:30:00Z"
      }
    ],
    "pagination": { ... }
  }
}
```

### 5.4 Cancel Booking
```
PUT /bookings/{bookingId}/cancel
Authorization: Bearer {userToken}
Content-Type: application/json

{
  "reason": "Change of plans"
}

Response (200):
{
  "success": true,
  "data": {
    "id": "uuid",
    "status": "CANCELLED",
    "refund_status": "PROCESSING",
    "message": "Booking cancelled. Refund will be processed within 3-5 business days."
  }
}
```

---

## 6. Seat APIs

### 6.1 Get Seats for Showtime
```
GET /showtimes/{showtimeId}/seats

Response (200):
{
  "success": true,
  "data": {
    "screen": {
      "id": "uuid",
      "name": "A1",
      "rows": 15,
      "columns": 16
    },
    "seats": [
      {
        "id": "uuid",
        "seat_number": "A1",
        "row": "A",
        "column": 1,
        "type": "STANDARD",
        "status": "AVAILABLE",
        "price": 80000
      },
      {
        "id": "uuid",
        "seat_number": "A2",
        "row": "A",
        "column": 2,
        "type": "STANDARD",
        "status": "BOOKED",
        "price": 80000
      },
      {
        "id": "uuid",
        "seat_number": "A3",
        "row": "A",
        "column": 3,
        "type": "VIP",
        "status": "AVAILABLE",
        "price": 120000
      }
    ]
  }
}

Seat Status:
- AVAILABLE: Ghế trống
- BOOKED: Ghế đã bán
- HELD: Ghế đang được giữ (5 phút)
```

### 6.2 Get Screen Info (Admin)
```
GET /admin/screens/{screenId}/seats

Response (200):
{
  "success": true,
  "data": {
    "screen": { ... },
    "seats": [ ... ]
  }
}
```

### 6.3 Update Seat (Admin)
```
PUT /admin/seats/{seatId}
Authorization: Bearer {adminToken}

{
  "type": "VIP",
  "is_active": true
}

Response (200):
{
  "success": true,
  "data": { ... seat }
}
```

---

## 7. Payment APIs

### 7.1 Create Payment
```
POST /payments
Authorization: Bearer {userToken}
Content-Type: application/json

{
  "booking_id": "uuid",
  "method": "VNPAY",
  "amount": 160000
}

Response (201):
{
  "success": true,
  "data": {
    "id": "uuid",
    "booking_id": "uuid",
    "amount": 160000,
    "method": "VNPAY",
    "status": "PENDING",
    "payment_url": "https://sandbox.vnpayment.vn/paygate?...",
    "created_at": "2024-01-22T19:00:00Z"
  }
}
```

### 7.2 VNPAY Callback
```
GET /payments/vnpay-callback?vnp_Amount=16000000&vnp_BankCode=NCB&...

Response (200):
{
  "RspCode": "00",
  "Message": "Success"
}

Processing:
- Verify signature
- Update payment status
- If success: Create ticket, send email, update booking
- If failed: Release locked seats
```

### 7.3 Get Payment Detail
```
GET /payments/{paymentId}
Authorization: Bearer {userToken}

Response (200):
{
  "success": true,
  "data": {
    "id": "uuid",
    "booking_id": "uuid",
    "amount": 160000,
    "method": "VNPAY",
    "status": "COMPLETED",
    "transaction_id": "vnp_12345678",
    "payment_time": "2024-01-22T19:02:00Z",
    "booking": {
      "id": "uuid",
      "ticket_pdf_url": "https://...",
      "qr_code": "..."
    }
  }
}
```

### 7.4 Admin Payment List
```
GET /admin/payments?status=COMPLETED&start_date=2024-01-01&end_date=2024-01-31&page=1
Authorization: Bearer {adminToken}

Response (200):
{
  "success": true,
  "data": {
    "payments": [
      {
        "id": "uuid",
        "user": { ... },
        "booking": { ... },
        "amount": 160000,
        "method": "VNPAY",
        "status": "COMPLETED",
        "transaction_id": "vnp_12345678",
        "payment_time": "2024-01-22T19:02:00Z"
      }
    ],
    "summary": {
      "total_transactions": 150,
      "total_amount": 24000000,
      "successful": 145,
      "failed": 5
    },
    "pagination": { ... }
  }
}
```

---

## 8. User Profile APIs

### 8.1 Get User Profile
```
GET /user/profile
Authorization: Bearer {userToken}

Response (200):
{
  "success": true,
  "data": {
    "id": "uuid",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "phone": "0912345678",
    "address": "123 Main St",
    "avatar": "https://...",
    "status": "ACTIVE",
    "role": "USER",
    "created_at": "2024-01-20T10:00:00Z"
  }
}
```

### 8.2 Update User Profile
```
PUT /user/profile
Authorization: Bearer {userToken}
Content-Type: multipart/form-data

{
  "first_name": "John",
  "phone": "0912345678",
  "address": "123 Main St",
  "avatar": <file>
}

Response (200):
{
  "success": true,
  "data": { ... user }
}
```

### 8.3 Add to Favorites
```
POST /user/favorites
Authorization: Bearer {userToken}

{
  "movie_id": "uuid"
}

Response (201):
{
  "success": true,
  "message": "Movie added to favorites"
}
```

### 8.4 Get Favorites
```
GET /user/favorites?page=1&limit=20
Authorization: Bearer {userToken}

Response (200):
{
  "success": true,
  "data": {
    "favorites": [
      {
        "id": "uuid",
        "movie": { ... movie },
        "added_at": "2024-01-20T10:00:00Z"
      }
    ],
    "pagination": { ... }
  }
}
```

### 8.5 Remove from Favorites
```
DELETE /user/favorites/{movieId}
Authorization: Bearer {userToken}

Response (200):
{
  "success": true,
  "message": "Movie removed from favorites"
}
```

---

## 9. Admin User Management APIs

### 9.1 Get Users List
```
GET /admin/users?page=1&limit=20&status=ACTIVE&search=john

Response (200):
{
  "success": true,
  "data": {
    "users": [
      {
        "id": "uuid",
        "first_name": "John",
        "last_name": "Doe",
        "email": "john@example.com",
        "phone": "0912345678",
        "status": "ACTIVE",
        "created_at": "2024-01-20T10:00:00Z",
        "total_bookings": 5,
        "total_spent": 800000
      }
    ],
    "pagination": { ... }
  }
}
```

### 9.2 Get User Detail
```
GET /admin/users/{userId}

Response (200):
{
  "success": true,
  "data": {
    "id": "uuid",
    "first_name": "John",
    "email": "john@example.com",
    "status": "ACTIVE",
    "bookings": [ ... ],
    "payments": [ ... ]
  }
}
```

### 9.3 Block User
```
PUT /admin/users/{userId}/block
Authorization: Bearer {adminToken}

{
  "reason": "Multiple failed payments"
}

Response (200):
{
  "success": true,
  "data": {
    "id": "uuid",
    "status": "BLOCKED"
  }
}
```

### 9.4 Unblock User
```
PUT /admin/users/{userId}/unblock
Authorization: Bearer {adminToken}

Response (200):
{
  "success": true,
  "data": {
    "id": "uuid",
    "status": "ACTIVE"
  }
}
```

---

## 10. Ticket Prices APIs

### 10.1 Get Ticket Prices
```
GET /admin/ticket-prices?type_seat=STANDARD&day_type=REGULAR

Response (200):
{
  "success": true,
  "data": {
    "prices": [
      {
        "id": "uuid",
        "type_seat": "STANDARD",
        "type_movie": "2D",
        "price": 80000,
        "day_type": "REGULAR",
        "start_time": "10:00",
        "end_time": "17:00"
      },
      {
        "id": "uuid",
        "type_seat": "VIP",
        "type_movie": "3D",
        "price": 150000,
        "day_type": "WEEKEND",
        "start_time": "18:00",
        "end_time": "22:00"
      }
    ]
  }
}
```

### 10.2 Create Ticket Price
```
POST /admin/ticket-prices
Authorization: Bearer {adminToken}

{
  "type_seat": "STANDARD",
  "type_movie": "2D",
  "price": 80000,
  "day_type": "REGULAR",
  "start_time": "10:00",
  "end_time": "17:00"
}

Response (201):
{
  "success": true,
  "data": { ... price }
}
```

### 10.3 Update Ticket Price
```
PUT /admin/ticket-prices/{priceId}
Authorization: Bearer {adminToken}

{
  "price": 85000
}

Response (200):
{
  "success": true,
  "data": { ... price }
}
```

---

## 11. News APIs

### 11.1 Get News List
```
GET /news?page=1&limit=10

Response (200):
{
  "success": true,
  "data": {
    "news": [
      {
        "id": "uuid",
        "title": "Khuyến mãi đặc biệt tết",
        "content": "...",
        "image": "https://...",
        "created_at": "2024-01-20T10:00:00Z"
      }
    ],
    "pagination": { ... }
  }
}
```

### 11.2 Get News Detail
```
GET /news/{newsId}

Response (200):
{
  "success": true,
  "data": {
    "id": "uuid",
    "title": "Khuyến mãi đặc biệt tết",
    "content": "...",
    "image": "https://...",
    "created_at": "2024-01-20T10:00:00Z"
  }
}
```

### 11.3 Create News (Admin)
```
POST /admin/news
Authorization: Bearer {adminToken}
Content-Type: multipart/form-data

{
  "title": "Khuyến mãi đặc biệt tết",
  "content": "...",
  "image": <file>,
  "status": "PUBLISHED"
}

Response (201):
{
  "success": true,
  "data": { ... news }
}
```

### 11.4 Update News (Admin)
```
PUT /admin/news/{newsId}
Authorization: Bearer {adminToken}

{
  "title": "Khuyến mãi tết 2024",
  "status": "PUBLISHED"
}

Response (200):
{
  "success": true,
  "data": { ... news }
}
```

### 11.5 Delete News (Admin)
```
DELETE /admin/news/{newsId}
Authorization: Bearer {adminToken}

Response (200):
{
  "success": true,
  "message": "News deleted successfully"
}
```

---

## 12. Reports & Analytics APIs

### 12.1 Revenue Report
```
GET /admin/reports/revenue?start_date=2024-01-01&end_date=2024-01-31&group_by=daily
Authorization: Bearer {adminToken}

Response (200):
{
  "success": true,
  "data": {
    "summary": {
      "total_revenue": 24000000,
      "total_transactions": 150,
      "total_bookings": 300,
      "total_seats_sold": 300
    },
    "breakdown_by_date": [
      {
        "date": "2024-01-22",
        "revenue": 1600000,
        "transactions": 10,
        "seats_sold": 20
      }
    ],
    "breakdown_by_movie": [
      {
        "movie_id": "uuid",
        "title": "Avatar",
        "revenue": 4800000,
        "transactions": 30,
        "seats_sold": 60
      }
    ],
    "breakdown_by_theater": [
      {
        "theater_id": "uuid",
        "name": "CGV Landmark 81",
        "revenue": 12000000,
        "transactions": 75,
        "seats_sold": 150
      }
    ],
    "breakdown_by_seat_type": [
      {
        "seat_type": "STANDARD",
        "revenue": 16000000,
        "seats_sold": 200
      },
      {
        "seat_type": "VIP",
        "revenue": 8000000,
        "seats_sold": 50
      }
    ]
  }
}
```

### 12.2 Occupancy Rate
```
GET /admin/reports/occupancy?movie_id=uuid&theater_id=uuid&start_date=2024-01-01

Response (200):
{
  "success": true,
  "data": {
    "occupancy_rate": 78.5,
    "total_capacity": 1000,
    "total_sold": 785,
    "by_showtime": [
      {
        "showtime": "2024-01-22T10:00:00Z",
        "occupancy": 45,
        "capacity": 150,
        "percentage": 30.0
      }
    ]
  }
}
```

### 12.3 Export Revenue Report
```
GET /admin/reports/revenue/export?format=csv&start_date=2024-01-01&end_date=2024-01-31

Response: CSV file download
```

---

## 13. Check-in API

### 13.1 Verify Ticket (Scan QR Code)
```
POST /checkin/verify
Authorization: Bearer {staffToken}
Content-Type: application/json

{
  "qr_code": "uuid_or_booking_id"
}

Response (200):
{
  "success": true,
  "data": {
    "booking_id": "uuid",
    "user": {
      "first_name": "John",
      "last_name": "Doe"
    },
    "movie_title": "Avatar",
    "showtime": "2024-01-22T19:00:00Z",
    "seats": ["A1", "A2"],
    "status": "VALID",
    "already_checked_in": false
  }
}
```

### 13.2 Check-in Ticket
```
POST /checkin
Authorization: Bearer {staffToken}
Content-Type: application/json

{
  "booking_id": "uuid"
}

Response (200):
{
  "success": true,
  "data": {
    "booking_id": "uuid",
    "status": "CHECKED_IN",
    "checked_in_at": "2024-01-22T19:00:00Z"
  }
}
```

---

## 14. Error Handling

### Standard Error Response
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Email is required"
      }
    ]
  }
}
```

### Common Error Codes
| Code | HTTP | Meaning |
|------|------|---------|
| INVALID_CREDENTIALS | 401 | Wrong email/password |
| UNAUTHORIZED | 401 | Missing or invalid token |
| FORBIDDEN | 403 | Insufficient permissions |
| NOT_FOUND | 404 | Resource not found |
| VALIDATION_ERROR | 400 | Invalid input |
| CONFLICT | 409 | Duplicate email, showtime conflict, etc |
| SEAT_NOT_AVAILABLE | 400 | Seat already booked |
| BOOKING_EXPIRED | 400 | Booking hold expired |
| PAYMENT_FAILED | 400 | Payment processing failed |
| INTERNAL_ERROR | 500 | Server error |

---

## 15. Authentication

All protected endpoints require:
```
Authorization: Bearer {accessToken}
```

Token expires in 1 hour. Use refresh token to get new access token.

