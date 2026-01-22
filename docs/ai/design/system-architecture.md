# Thiết Kế Hệ Thống: Movie Ticket Booking

## 1. Kiến Trúc Hệ Thống

```
┌─────────────────────────────────────────────────────────────────┐
│                       Frontend (React + TypeScript)             │
│  (Xử lý UI, gọi API, quản lý state người dùng)                │
└─────────────────────┬───────────────────────────────────────────┘
                      │ HTTP/HTTPS (RESTful API)
                      │
┌─────────────────────▼───────────────────────────────────────────┐
│                    Backend (Node.js + Express)                  │
├──────────────────────────────────────────────────────────────────┤
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  │  API Routes      │  │  Controllers     │  │  Services        │
│  │  - movies        │  │  - movie.ctrl    │  │  - movie.service │
│  │  - bookings      │  │  - booking.ctrl  │  │  - booking.svc   │
│  │  - payments      │  │  - payment.ctrl  │  │  - payment.svc   │
│  │  - users         │  │  - user.ctrl     │  │  - user.service  │
│  │  - admin         │  │  - admin.ctrl    │  │  - admin.service │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘
│
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  │  Middleware      │  │  Models (ORM)    │  │  Utilities       │
│  │  - auth          │  │  - User          │  │  - validators    │
│  │  - validation    │  │  - Movie         │  │  - helpers       │
│  │  - errorHandler  │  │  - Booking       │  │  - constants     │
│  │  - cors          │  │  - Payment       │  │  - jwt           │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘
│
└──────────────────────┬───────────────────────────────────────────┘
                      │
        ┌─────────────┼─────────────┬──────────────────┐
        │             │             │                  │
        ▼             ▼             ▼                  ▼
    ┌────────┐ ┌──────────┐ ┌──────────────┐  ┌──────────────┐
    │Database│ │Email     │ │Payment       │  │Cloud Storage │
    │(MySQL) │ │Service   │ │Gateways      │  │(PDF Tickets) │
    │        │ │          │ │- VNPAY       │  │              │
    │Tables: │ │(Nodemailer)│- VietQR      │  │              │
    │- users │ │          │ │- PayPal      │  │              │
    │- movies│ └──────────┘ └──────────────┘  └──────────────┘
    │- etc   │
    └────────┘
```

---

## 2. Thiết Kế Cơ Sở Dữ Liệu (Database Schema)

### 2.1 Sơ Đồ Entity-Relationship (ERD)

```
┌─────────────┐         ┌──────────────┐
│   USERS     │─────────│   ROLES      │
├─────────────┤ role_id ├──────────────┤
│ id (PK)     │         │ id (PK)      │
│ first_name  │         │ role_name    │
│ last_name   │         │ (ADMIN/USER) │
│ email       │         └──────────────┘
│ password    │
│ avatar      │
│ phone       │
│ address     │
│ status      │
│ created_at  │
│ updated_at  │
└─────────────┘
      │
      │ user_id
      └──────────────────┐
                         │
      ┌──────────────────▼──────────────┐
      │    BOOKINGS                     │
      ├─────────────────────────────────┤
      │ id (PK)                         │
      │ user_id (FK → USERS)            │
      │ showtime_id (FK → SHOWTIMES)    │
      │ total_seat                      │
      │ total_price_movie               │
      │ status (PENDING/COMPLETED/...)  │
      │ qr_code                         │
      │ created_at                      │
      │ updated_at                      │
      └──────────────────┬──────────────┘
                         │
                         │ booking_id
                         │
      ┌──────────────────▼──────────────┐
      │    BOOKING_SEAT                 │
      ├─────────────────────────────────┤
      │ id (PK)                         │
      │ booking_id (FK → BOOKINGS)      │
      │ seat_id (FK → SEATS)            │
      │ price_applied                   │
      │ quantity                        │
      │ created_at                      │
      └─────────────────────────────────┘


┌──────────────┐         ┌──────────────┐
│   MOVIES     │─────────│   GENRES     │
├──────────────┤ genre   ├──────────────┤
│ id (PK)      │         │ id (PK)      │
│ title        │         │ genre_name   │
│ description  │         └──────────────┘
│ author       │
│ image        │
│ trailer      │
│ type (2D/3D) │
│ duration     │
│ release_date │
│ status       │
│ created_at   │
│ updated_at   │
└──────────────┘


┌─────────────────┐
│   THEATERS      │
├─────────────────┤
│ id (PK)         │
│ name            │
│ location        │
│ phone           │
│ created_at      │
│ updated_at      │
└────────┬────────┘
         │
         │ theater_id
         │
    ┌────▼──────────┐
    │   SCREENS     │
    ├───────────────┤
    │ id (PK)       │
    │ name          │
    │ theater_id    │
    │ seat_capacity │
    │ type (2D/3D)  │
    │ created_at    │
    │ updated_at    │
    └────┬──────────┘
         │
         │ screen_id
         │
    ┌────▼──────────────────┐
    │   SEATS               │
    ├───────────────────────┤
    │ id (PK)               │
    │ screen_id (FK)        │
    │ seat_number           │
    │ row_letter            │
    │ type (STANDARD/VIP)   │
    │ is_variable           │
    │ status (AVAILABLE...) │
    │ created_at            │
    │ updated_at            │
    └───────────────────────┘


┌──────────────────┐
│   SHOWTIMES      │
├──────────────────┤
│ id (PK)          │
│ movie_id (FK)    │
│ screen_id (FK)   │
│ start_time       │
│ end_time         │
│ status           │
│ created_at       │
│ updated_at       │
└──────────────────┘


┌──────────────────┐
│  TICKET_PRICES   │
├──────────────────┤
│ id (PK)          │
│ type_seat        │
│ type_movie       │
│ price            │
│ day_type         │
│ start_time       │
│ end_time         │
│ created_at       │
│ updated_at       │
└──────────────────┘


┌──────────────────┐
│   PAYMENTS       │
├──────────────────┤
│ id (PK)          │
│ booking_id (FK)  │
│ amount           │
│ method           │
│ status           │
│ transaction_id   │
│ payment_time     │
│ created_at       │
│ updated_at       │
└──────────────────┘


┌──────────────────┐
│     NEWS         │
├──────────────────┤
│ id (PK)          │
│ title            │
│ content          │
│ image            │
│ status           │
│ created_at       │
│ updated_at       │
└──────────────────┘


┌──────────────────┐
│  FAVORITES       │
├──────────────────┤
│ id (PK)          │
│ user_id (FK)     │
│ movie_id (FK)    │
│ created_at       │
└──────────────────┘
```

---

## 3. Chi Tiết Các Bảng

### 3.1 USERS
| Trường | Kiểu | Ràng Buộc | Ghi Chú |
|--------|------|----------|--------|
| id | UUID | PK | Mã người dùng |
| role_id | UUID | FK → ROLES | Vai trò |
| first_name | VARCHAR(255) | NOT NULL | Tên |
| last_name | VARCHAR(255) | NOT NULL | Họ |
| email | VARCHAR(255) | UNIQUE, NOT NULL | Email đăng nhập |
| password | VARCHAR(255) | NOT NULL | Mật khẩu mã hóa |
| avatar | TEXT | | URL ảnh đại diện |
| phone | VARCHAR(20) | | Số điện thoại |
| address | TEXT | | Địa chỉ |
| status | ENUM | (ACTIVE, BLOCKED) | Trạng thái tài khoản |
| created_at | TIMESTAMP | DEFAULT NOW() | Ngày tạo |
| updated_at | TIMESTAMP | DEFAULT NOW() | Ngày cập nhật |

### 3.2 ROLES
| Trường | Kiểu | Ràng Buộc | Ghi Chú |
|--------|------|----------|--------|
| id | UUID | PK | Mã vai trò |
| role_name | VARCHAR(50) | UNIQUE, NOT NULL | Tên vai trò (ADMIN, USER) |

### 3.3 MOVIES
| Trường | Kiểu | Ràng Buộc | Ghi Chú |
|--------|------|----------|--------|
| id | UUID | PK | Mã phim |
| title | VARCHAR(255) | NOT NULL | Tên phim |
| description | TEXT | | Mô tả |
| author | VARCHAR(255) | | Đạo diễn/Nhà sản xuất |
| image | TEXT | | URL poster |
| trailer | TEXT | | URL trailer |
| type | ENUM | (2D, 3D) | Loại phim |
| duration | INT | | Thời lượng (phút) |
| release_date | DATE | | Ngày phát hành |
| genre_id | UUID | FK → GENRES | Thể loại |
| status | ENUM | (SHOWING, COMING_SOON, STOPPED) | Trạng thái |
| created_at | TIMESTAMP | DEFAULT NOW() | Ngày tạo |
| updated_at | TIMESTAMP | DEFAULT NOW() | Ngày cập nhật |

### 3.4 THEATERS
| Trường | Kiểu | Ràng Buộc | Ghi Chú |
|--------|------|----------|--------|
| id | UUID | PK | Mã rạp |
| name | VARCHAR(255) | NOT NULL | Tên rạp |
| location | VARCHAR(255) | NOT NULL | Địa chỉ |
| phone | VARCHAR(20) | | Số hotline |
| website | VARCHAR(255) | | Website |
| created_at | TIMESTAMP | DEFAULT NOW() | Ngày tạo |
| updated_at | TIMESTAMP | DEFAULT NOW() | Ngày cập nhật |

### 3.5 SCREENS
| Trường | Kiểu | Ràng Buộc | Ghi Chú |
|--------|------|----------|--------|
| id | UUID | PK | Mã phòng |
| theater_id | UUID | FK → THEATERS, NOT NULL | Rạp |
| name | VARCHAR(100) | NOT NULL | Tên phòng (VD: A1, A2) |
| seat_capacity | INT | NOT NULL | Tổng số ghế |
| type | ENUM | (2D, 3D, IMAX) | Loại phòng |
| created_at | TIMESTAMP | DEFAULT NOW() | Ngày tạo |
| updated_at | TIMESTAMP | DEFAULT NOW() | Ngày cập nhật |

### 3.6 SEATS
| Trường | Kiểu | Ràng Buộc | Ghi Chú |
|--------|------|----------|--------|
| id | UUID | PK | Mã ghế |
| screen_id | UUID | FK → SCREENS, NOT NULL | Phòng chiếu |
| seat_number | VARCHAR(10) | NOT NULL | Số ghế (VD: A1, B5) |
| row_letter | VARCHAR(2) | | Hàng (A, B, C...) |
| seat_column | INT | | Cột (1, 2, 3...) |
| type | ENUM | (STANDARD, VIP, SWEETBOX) | Loại ghế |
| is_variable | BOOLEAN | DEFAULT FALSE | Ghế giá thay đổi |
| is_active | BOOLEAN | DEFAULT TRUE | Ghế có hoạt động |
| created_at | TIMESTAMP | DEFAULT NOW() | Ngày tạo |
| updated_at | TIMESTAMP | DEFAULT NOW() | Ngày cập nhật |

### 3.7 SHOWTIMES
| Trường | Kiểu | Ràng Buộc | Ghi Chú |
|--------|------|----------|--------|
| id | UUID | PK | Mã suất chiếu |
| movie_id | UUID | FK → MOVIES, NOT NULL | Phim |
| screen_id | UUID | FK → SCREENS, NOT NULL | Phòng chiếu |
| start_time | DATETIME | NOT NULL | Giờ bắt đầu |
| end_time | DATETIME | NOT NULL | Giờ kết thúc |
| status | ENUM | (ACTIVE, CANCELLED) | Trạng thái |
| created_at | TIMESTAMP | DEFAULT NOW() | Ngày tạo |
| updated_at | TIMESTAMP | DEFAULT NOW() | Ngày cập nhật |

### 3.8 BOOKINGS
| Trường | Kiểu | Ràng Buộc | Ghi Chú |
|--------|------|----------|--------|
| id | UUID | PK | Mã booking |
| user_id | UUID | FK → USERS, NOT NULL | Người dùng |
| showtime_id | UUID | FK → SHOWTIMES, NOT NULL | Suất chiếu |
| total_seat | INT | NOT NULL | Tổng ghế |
| total_price | DECIMAL(10,2) | NOT NULL | Tổng tiền |
| status | ENUM | (PENDING, COMPLETED, CANCELLED, EXPIRED) | Trạng thái |
| qr_code | TEXT | | Mã QR |
| ticket_pdf_url | TEXT | | URL file vé PDF |
| expires_at | DATETIME | | Hết hạn giữ ghế (5 phút) |
| created_at | TIMESTAMP | DEFAULT NOW() | Ngày tạo |
| updated_at | TIMESTAMP | DEFAULT NOW() | Ngày cập nhật |

### 3.9 BOOKING_SEAT
| Trường | Kiểu | Ràng Buộc | Ghi Chú |
|--------|------|----------|--------|
| id | UUID | PK | Mã chi tiết |
| booking_id | UUID | FK → BOOKINGS, NOT NULL | Booking |
| seat_id | UUID | FK → SEATS, NOT NULL | Ghế |
| price_applied | DECIMAL(10,2) | NOT NULL | Giá áp dụng |
| quantity | INT | DEFAULT 1 | Số lượng (thường = 1) |
| created_at | TIMESTAMP | DEFAULT NOW() | Ngày tạo |
| updated_at | TIMESTAMP | DEFAULT NOW() | Ngày cập nhật |

### 3.10 PAYMENTS
| Trường | Kiểu | Ràng Buộc | Ghi Chú |
|--------|------|----------|--------|
| id | UUID | PK | Mã giao dịch |
| booking_id | UUID | FK → BOOKINGS, NOT NULL | Booking |
| amount | DECIMAL(10,2) | NOT NULL | Số tiền |
| method | ENUM | (VNPAY, VIETQR, PAYPAL, MOMO) | Phương thức |
| status | ENUM | (PENDING, COMPLETED, FAILED, REFUNDED) | Trạng thái |
| transaction_id | VARCHAR(255) | | Mã giao dịch từ gateway |
| payment_time | DATETIME | | Thời gian thanh toán |
| created_at | TIMESTAMP | DEFAULT NOW() | Ngày tạo |
| updated_at | TIMESTAMP | DEFAULT NOW() | Ngày cập nhật |

### 3.11 TICKET_PRICES
| Trường | Kiểu | Ràng Buộc | Ghi Chú |
|--------|------|----------|--------|
| id | UUID | PK | Mã giá |
| type_seat | ENUM | (STANDARD, VIP, SWEETBOX) | Loại ghế |
| type_movie | ENUM | (2D, 3D) | Loại phim |
| price | DECIMAL(10,2) | NOT NULL | Đơn giá |
| day_type | ENUM | (REGULAR, WEEKEND, HOLIDAY) | Loại ngày |
| start_time | TIME | | Bắt đầu khung giờ |
| end_time | TIME | | Kết thúc khung giờ |
| created_at | TIMESTAMP | DEFAULT NOW() | Ngày tạo |
| updated_at | TIMESTAMP | DEFAULT NOW() | Ngày cập nhật |

### 3.12 NEWS
| Trường | Kiểu | Ràng Buộc | Ghi Chú |
|--------|------|----------|--------|
| id | UUID | PK | Mã bài viết |
| title | VARCHAR(255) | NOT NULL | Tiêu đề |
| content | TEXT | NOT NULL | Nội dung |
| image | TEXT | | URL ảnh |
| status | ENUM | (PUBLISHED, DRAFT, ARCHIVED) | Trạng thái |
| created_at | TIMESTAMP | DEFAULT NOW() | Ngày đăng |
| updated_at | TIMESTAMP | DEFAULT NOW() | Ngày cập nhật |

### 3.13 FAVORITES
| Trường | Kiểu | Ràng Buộc | Ghi Chú |
|--------|------|----------|--------|
| id | UUID | PK | Mã yêu thích |
| user_id | UUID | FK → USERS, NOT NULL | Người dùng |
| movie_id | UUID | FK → MOVIES, NOT NULL | Phim |
| created_at | TIMESTAMP | DEFAULT NOW() | Ngày thêm |

### 3.14 GENRES
| Trường | Kiểu | Ràng Buộc | Ghi Chú |
|--------|------|----------|--------|
| id | UUID | PK | Mã thể loại |
| name | VARCHAR(100) | UNIQUE, NOT NULL | Tên thể loại |
| created_at | TIMESTAMP | DEFAULT NOW() | Ngày tạo |

---

## 4. Tính Toán Giá Vé

```javascript
// Pseudocode tính giá vé
function calculateTicketPrice(seatType, movieType, dayType, timeSlot) {
  let basePrice = TICKET_PRICES.findOne({
    type_seat: seatType,
    type_movie: movieType,
    day_type: dayType,
    start_time: <= timeSlot,
    end_time: > timeSlot
  });
  
  return basePrice.price;
}

// Ví dụ:
// Ghế VIP, Phim 3D, Cuối tuần, 19:00-21:00 → 150,000 VND
// Ghế Standard, Phim 2D, Ngày thường, 14:00-16:30 → 80,000 VND
```

---

## 5. Cơ Chế Giữ Ghế

```
Khi User chọn ghế:
1. Kiểm tra trạng thái ghế: AVAILABLE?
2. Nếu có → Lock ghế (tạo bản ghi BOOKING_SEAT với status HELD)
3. Set expiration time = now() + 5 phút
4. Nếu User thanh toán trong 5 phút → status COMPLETED
5. Nếu User không thanh toán trong 5 phút → job scheduler tự động release ghế
```

---

## 6. Flow Thanh Toán

```
User chọn phương thức thanh toán
  ↓
Hệ thống tạo Payment record (status = PENDING)
  ↓
Gửi request đến Payment Gateway (VNPAY/PayPal/...)
  ↓
Gateway trả response:
  - SUCCESS: payment.status = COMPLETED
             booking.status = COMPLETED
             Tạo vé PDF + QR Code
             Gửi email
  - FAILED:  payment.status = FAILED
             booking.status = PENDING
             Cho phép User thanh toán lại
  - PENDING: Hệ thống pooling kiểm tra status định kỳ
```

---

## 7. API Structure

```
/api
├── /auth
│   ├── POST /register
│   ├── POST /login
│   ├── POST /verify-otp
│   └── POST /refresh-token
├── /movies
│   ├── GET / (danh sách)
│   ├── GET /search (tìm kiếm)
│   ├── GET /:id (chi tiết)
│   └── GET /:id/showtimes (lịch chiếu)
├── /theaters
│   ├── GET / (danh sách)
│   └── GET /:id (chi tiết)
├── /bookings
│   ├── POST / (đặt vé)
│   ├── GET /my-bookings (lịch sử)
│   ├── GET /:id (chi tiết)
│   └── PUT /:id/cancel (hủy)
├── /payments
│   ├── POST / (tạo giao dịch)
│   ├── POST /vnpay-callback (callback từ VNPAY)
│   └── GET /:id (chi tiết)
├── /user
│   ├── GET /profile (hồ sơ)
│   ├── PUT /profile (cập nhật)
│   ├── POST /favorites (lưu phim yêu thích)
│   └── GET /favorites (danh sách yêu thích)
└── /admin
    ├── /movies (CRUD)
    ├── /theaters (CRUD)
    ├── /screens (CRUD)
    ├── /showtimes (CRUD)
    ├── /ticket-prices (CRUD)
    ├── /seats (CRUD)
    ├── /users (quản lý người dùng)
    ├── /news (CRUD)
    ├── /bookings (danh sách)
    ├── /payments (danh sách)
    └── /reports (báo cáo)
```

