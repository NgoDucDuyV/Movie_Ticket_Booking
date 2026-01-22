---
phase: testing
title: Testing Strategy - Hệ thống Đặt Vé Xem Phim
description: Chiến lược testing, test cases, và đảm bảo chất lượng
---

# Testing Strategy - Hệ thống Đặt Vé Xem Phim

## Test Coverage Goals
**Mức độ testing cần đạt được**

- **Unit test coverage target**: 100% cho tất cả services, utilities, và models
- **Integration test scope**: Tất cả API endpoints, critical paths (booking flow, payment flow), error handling
- **End-to-end test scenarios**: Key user journeys (register → login → browse → book → pay → receive ticket)
- **Alignment với requirements**: Tất cả acceptance criteria trong requirements document phải được test

## Unit Tests
**Các components cần test**

### Auth Service

- [ ] **Test register service**
  - [ ] Register thành công với email hợp lệ
  - [ ] Register thành công với số điện thoại hợp lệ
  - [ ] Register thất bại khi email đã tồn tại
  - [ ] Register thất bại khi số điện thoại đã tồn tại
  - [ ] Password được hash đúng cách (bcrypt)
  - [ ] Email verification token được tạo
  - [ ] User được tạo với status INACTIVE

- [ ] **Test login service**
  - [ ] Login thành công với email và password đúng
  - [ ] Login thất bại với password sai
  - [ ] Login thất bại khi email không tồn tại
  - [ ] Login thất bại khi user bị BLOCKED
  - [ ] Login thất bại khi email chưa được verify
  - [ ] JWT token được tạo đúng format
  - [ ] Refresh token được tạo

- [ ] **Test verifyEmail service**
  - [ ] Verify thành công với token hợp lệ
  - [ ] Verify thất bại với token không hợp lệ
  - [ ] Verify thất bại với token đã hết hạn
  - [ ] User status được cập nhật thành ACTIVE sau khi verify

- [ ] **Test forgotPassword service**
  - [ ] Reset token được tạo khi email tồn tại
  - [ ] Reset token không được tạo khi email không tồn tại
  - [ ] Reset token có expiration time

- [ ] **Test resetPassword service**
  - [ ] Reset thành công với token hợp lệ
  - [ ] Reset thất bại với token không hợp lệ
  - [ ] Password mới được hash đúng cách

### Movie Service

- [ ] **Test getMovies service**
  - [ ] Trả về danh sách phim với pagination
  - [ ] Filter theo genre hoạt động đúng
  - [ ] Filter theo status hoạt động đúng
  - [ ] Search theo title hoạt động đúng (case-insensitive)
  - [ ] Sort theo releaseDate đúng
  - [ ] Populate genres đúng

- [ ] **Test getMovieById service**
  - [ ] Trả về movie khi ID hợp lệ
  - [ ] Throw NotFoundError khi ID không tồn tại
  - [ ] Populate genres và showtimes đúng

- [ ] **Test getMovieShowtimes service**
  - [ ] Trả về showtimes của movie
  - [ ] Filter theo theater hoạt động đúng
  - [ ] Filter theo date hoạt động đúng
  - [ ] Chỉ trả về showtimes chưa bắt đầu

### Booking Service

- [ ] **Test createBooking service**
  - [ ] Tạo booking thành công với seats hợp lệ
  - [ ] Throw error khi showtime không tồn tại
  - [ ] Throw error khi showtime đã bắt đầu
  - [ ] Throw error khi seats đã được đặt
  - [ ] Throw error khi seats đang được giữ (PENDING)
  - [ ] Booking được tạo với status PENDING
  - [ ] expiresAt được set đúng (5 phút từ now)
  - [ ] Total price được tính đúng
  - [ ] Transaction rollback khi có lỗi

- [ ] **Test getBookingsByUser service**
  - [ ] Trả về bookings của user
  - [ ] Filter theo status hoạt động đúng
  - [ ] Sort theo createdAt (desc) đúng
  - [ ] Populate showtime và movie đúng

- [ ] **Test cancelBooking service**
  - [ ] Cancel thành công khi showtime chưa bắt đầu
  - [ ] Throw error khi showtime đã bắt đầu
  - [ ] Throw error khi booking không tồn tại
  - [ ] Booking status được cập nhật thành CANCELLED
  - [ ] Seats được release (nếu chưa thanh toán)

- [ ] **Test cleanupExpiredBookings service**
  - [ ] Expired bookings được cập nhật thành EXPIRED
  - [ ] Chỉ cập nhật bookings với status PENDING
  - [ ] Seats được release

### Price Service

- [ ] **Test calculateBookingPrice service**
  - [ ] Tính giá đúng cho STANDARD seat, 2D, weekday
  - [ ] Tính giá đúng cho VIP seat, 3D, weekend
  - [ ] Tính giá đúng cho SWEETBOX seat
  - [ ] Áp dụng đúng price theo time slot
  - [ ] Tổng giá được tính đúng cho nhiều seats

- [ ] **Test getTicketPrice service**
  - [ ] Trả về price từ TicketPrice collection
  - [ ] Trả về default price khi không tìm thấy rule
  - [ ] Match đúng theo typeSeat, typeMovie, dayType, timeSlot

### Payment Service

- [ ] **Test processPayment service**
  - [ ] Tạo payment record với status PENDING
  - [ ] Throw error khi booking không tồn tại
  - [ ] Throw error khi booking status không phải PENDING
  - [ ] Initiate payment với gateway đúng
  - [ ] Trả về paymentUrl đúng

- [ ] **Test verifyPayment service (VNPAY)**
  - [ ] Verify thành công với signature hợp lệ
  - [ ] Throw error khi signature không hợp lệ
  - [ ] Cập nhật payment status thành COMPLETED khi thành công
  - [ ] Cập nhật booking status thành CONFIRMED
  - [ ] Generate QR code cho booking

- [ ] **Test handlePaymentCallback service**
  - [ ] Xử lý callback thành công
  - [ ] Update payment và booking đúng
  - [ ] Gửi email e-ticket sau khi payment thành công

### Email Service

- [ ] **Test sendEmail service**
  - [ ] Gửi email thành công
  - [ ] Handle error khi email service down
  - [ ] Retry mechanism hoạt động đúng

- [ ] **Test sendVerificationEmail service**
  - [ ] Email được gửi với đúng template
  - [ ] Verification link chứa đúng token

- [ ] **Test sendETicketEmail service**
  - [ ] Email được gửi với PDF attachment
  - [ ] PDF được generate đúng

### PDF Service

- [ ] **Test generateETicket service**
  - [ ] PDF được tạo với đúng format
  - [ ] QR code được generate đúng
  - [ ] Thông tin booking hiển thị đúng trong PDF
  - [ ] PDF có thể đọc được

### Models

- [ ] **Test User model**
  - [ ] Validation: email required, unique
  - [ ] Validation: password required
  - [ ] Pre-save: hash password
  - [ ] Methods: comparePassword hoạt động đúng

- [ ] **Test Booking model**
  - [ ] Validation: userId, showtimeId required
  - [ ] TTL index hoạt động đúng
  - [ ] Virtual fields tính toán đúng

- [ ] **Test Showtime model**
  - [ ] Validation: startTime, endTime required
  - [ ] Pre-save: tính endTime từ startTime + duration
  - [ ] Indexes hoạt động đúng

### Utilities

- [ ] **Test JWT utilities**
  - [ ] Generate token đúng format
  - [ ] Verify token đúng
  - [ ] Throw error khi token expired
  - [ ] Throw error khi token invalid

- [ ] **Test response utilities**
  - [ ] successResponse format đúng
  - [ ] errorResponse format đúng
  - [ ] Pagination được thêm đúng

- [ ] **Test QR utilities**
  - [ ] QR code được generate đúng
  - [ ] QR data có thể decode đúng

## Integration Tests
**Test tương tác giữa các components**

### Authentication APIs

- [ ] **POST /api/auth/register**
  - [ ] Register thành công → trả về 201, user data (không có password)
  - [ ] Register thất bại khi email đã tồn tại → trả về 400
  - [ ] Register thất bại khi validation fail → trả về 400 với error details
  - [ ] Email verification được gửi

- [ ] **POST /api/auth/login**
  - [ ] Login thành công → trả về 200, tokens và user data
  - [ ] Login thất bại với password sai → trả về 401
  - [ ] Login thất bại khi email chưa verify → trả về 403
  - [ ] JWT token có thể dùng để authenticate

- [ ] **POST /api/auth/verify-email**
  - [ ] Verify thành công → trả về 200
  - [ ] Verify thất bại với token không hợp lệ → trả về 400
  - [ ] User có thể login sau khi verify

- [ ] **GET /api/auth/me**
  - [ ] Trả về user data khi có valid token → 200
  - [ ] Trả về 401 khi không có token
  - [ ] Trả về 401 khi token invalid

### Movie APIs

- [ ] **GET /api/movies**
  - [ ] Trả về danh sách phim với pagination → 200
  - [ ] Filter theo genre hoạt động → 200
  - [ ] Search theo title hoạt động → 200
  - [ ] Pagination hoạt động đúng

- [ ] **GET /api/movies/:id**
  - [ ] Trả về movie detail khi ID hợp lệ → 200
  - [ ] Trả về 404 khi ID không tồn tại
  - [ ] Populate genres và showtimes đúng

- [ ] **GET /api/movies/:id/showtimes**
  - [ ] Trả về showtimes của movie → 200
  - [ ] Filter theo theater hoạt động
  - [ ] Filter theo date hoạt động

### Booking APIs

- [ ] **POST /api/bookings** (User only)
  - [ ] Tạo booking thành công → 201
  - [ ] Trả về 401 khi chưa authenticate
  - [ ] Trả về 400 khi seats không hợp lệ
  - [ ] Trả về 400 khi showtime đã bắt đầu
  - [ ] Booking được tạo với status PENDING
  - [ ] Seats được lock

- [ ] **GET /api/bookings** (User only)
  - [ ] Trả về bookings của user → 200
  - [ ] Filter theo status hoạt động
  - [ ] Trả về 401 khi chưa authenticate

- [ ] **PUT /api/bookings/:id/cancel** (User only)
  - [ ] Cancel thành công → 200
  - [ ] Trả về 400 khi showtime đã bắt đầu
  - [ ] Booking status được cập nhật thành CANCELLED

### Payment APIs

- [ ] **POST /api/payments** (User only)
  - [ ] Tạo payment request thành công → 201
  - [ ] Trả về paymentUrl
  - [ ] Trả về 400 khi booking không hợp lệ
  - [ ] Payment được tạo với status PENDING

- [ ] **POST /api/payments/:id/verify**
  - [ ] Verify payment thành công → 200
  - [ ] Payment status được cập nhật
  - [ ] Booking status được cập nhật thành CONFIRMED
  - [ ] E-ticket được generate và gửi email

### Admin APIs

- [ ] **POST /api/admin/movies** (Admin only)
  - [ ] Tạo movie thành công → 201
  - [ ] Trả về 403 khi không phải admin
  - [ ] Validation hoạt động đúng

- [ ] **POST /api/admin/showtimes** (Admin only)
  - [ ] Tạo showtime thành công → 201
  - [ ] Trả về 400 khi có conflict
  - [ ] Conflict detection hoạt động đúng

- [ ] **GET /api/admin/reports/revenue** (Admin only)
  - [ ] Trả về revenue report → 200
  - [ ] Filter theo date range hoạt động
  - [ ] Aggregate data đúng

### Error Handling

- [ ] **404 Not Found**
  - [ ] Trả về 404 với message rõ ràng khi resource không tồn tại

- [ ] **400 Bad Request**
  - [ ] Trả về 400 với validation errors khi input không hợp lệ

- [ ] **401 Unauthorized**
  - [ ] Trả về 401 khi không có token
  - [ ] Trả về 401 khi token invalid

- [ ] **403 Forbidden**
  - [ ] Trả về 403 khi không có quyền truy cập

- [ ] **500 Internal Server Error**
  - [ ] Trả về 500 với generic message (không leak sensitive info)

## End-to-End Tests
**Test user flows hoàn chỉnh**

### User Journey 1: Register → Login → Browse → Book → Pay

- [ ] **Step 1: Register**
  - [ ] User truy cập register page
  - [ ] Điền form và submit
  - [ ] Nhận email verification
  - [ ] Verify email thành công

- [ ] **Step 2: Login**
  - [ ] User login với email và password
  - [ ] Redirect đến homepage
  - [ ] Token được lưu trong localStorage

- [ ] **Step 3: Browse Movies**
  - [ ] Xem danh sách phim
  - [ ] Click vào một phim để xem chi tiết
  - [ ] Xem lịch chiếu của phim
  - [ ] Chọn suất chiếu

- [ ] **Step 4: Book Tickets**
  - [ ] Chọn ghế trên sơ đồ
  - [ ] Xác nhận booking
  - [ ] Booking được tạo với status PENDING
  - [ ] Redirect đến payment page

- [ ] **Step 5: Payment**
  - [ ] Chọn payment method (VNPAY)
  - [ ] Redirect đến payment gateway
  - [ ] Thanh toán thành công
  - [ ] Redirect về website
  - [ ] Payment được verify
  - [ ] Booking status được cập nhật thành CONFIRMED
  - [ ] E-ticket được gửi email

- [ ] **Step 6: View Ticket**
  - [ ] User xem booking history
  - [ ] Download e-ticket PDF
  - [ ] QR code hiển thị đúng

### User Journey 2: Guest Browse → Register → Book

- [ ] Guest xem danh sách phim mà không cần đăng nhập
- [ ] Guest chọn phim và suất chiếu
- [ ] Hệ thống yêu cầu đăng nhập
- [ ] Guest đăng ký tài khoản
- [ ] Guest đăng nhập và tiếp tục booking

### User Journey 3: Cancel Booking

- [ ] User xem booking history
- [ ] User chọn booking chưa thanh toán và hủy
- [ ] Booking được hủy thành công
- [ ] Seats được release

- [ ] User chọn booking đã thanh toán và hủy
- [ ] Hệ thống kiểm tra điều kiện hủy
- [ ] Nếu hợp lệ → hoàn tiền
- [ ] Booking status được cập nhật

### Admin Journey: Manage Movies → Create Showtime → View Reports

- [ ] Admin login
- [ ] Admin tạo movie mới
- [ ] Admin tạo showtime cho movie
- [ ] Admin xem revenue reports
- [ ] Admin export reports

### Edge Cases

- [ ] **Concurrent Booking**: Hai users cùng đặt một ghế → chỉ một thành công
- [ ] **Expired Booking**: Booking hết hạn → seats được release tự động
- [ ] **Payment Timeout**: Payment không hoàn thành trong 5 phút → booking expired
- [ ] **Showtime Started**: User cố gắng đặt vé cho showtime đã bắt đầu → error

## Test Data
**Dữ liệu test**

### Test Fixtures và Mocks

```javascript
// test/fixtures/users.js
export const testUsers = {
  admin: {
    email: 'admin@test.com',
    password: 'Admin123!',
    role: 'admin'
  },
  user: {
    email: 'user@test.com',
    password: 'User123!',
    role: 'user'
  }
};

// test/fixtures/movies.js
export const testMovies = {
  movie1: {
    title: 'Test Movie 1',
    description: 'Test description',
    type: '2D',
    duration: 120,
    releaseDate: new Date('2024-01-01')
  }
};

// test/mocks/paymentGateway.js
export const mockVNPAYGateway = {
  initiatePayment: jest.fn(),
  verifyPayment: jest.fn()
};
```

### Seed Data Requirements

- **Roles**: admin, user
- **Users**: 1 admin, 5 users
- **Genres**: 5-10 genres
- **Movies**: 10-20 movies với các status khác nhau
- **Theaters**: 3-5 theaters
- **Screens**: 2-3 screens mỗi theater
- **Seats**: 50-100 seats mỗi screen
- **Showtimes**: 20-30 showtimes
- **TicketPrices**: Pricing rules cho các combinations

### Test Database Setup

```javascript
// test/setup.js
beforeAll(async () => {
  // Connect to test database
  await mongoose.connect(process.env.MONGODB_TEST_URI);
});

afterAll(async () => {
  // Cleanup
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

beforeEach(async () => {
  // Clear collections before each test
  await User.deleteMany({});
  await Movie.deleteMany({});
  // ...
});
```

## Test Reporting & Coverage
**Báo cáo và coverage**

### Coverage Commands

```bash
# Backend unit tests với coverage
npm run test:unit -- --coverage

# Backend integration tests
npm run test:integration

# Frontend tests với coverage
cd frontend && npm run test -- --coverage

# All tests
npm run test:all
```

### Coverage Thresholds

- **Services**: 100% coverage
- **Models**: 100% coverage
- **Utilities**: 100% coverage
- **Controllers**: 80% coverage (chủ yếu test error handling)
- **Middleware**: 90% coverage

### Coverage Gaps và Rationale

- **Error middleware**: Một số edge cases khó test → 80% coverage
- **Payment gateway integration**: Mock tests → 90% coverage (real integration test trong staging)
- **Email service**: Mock tests → 85% coverage (real tests trong staging)

### Test Reports

- **Jest Coverage Report**: `coverage/lcov-report/index.html`
- **CI/CD Reports**: Tích hợp với GitHub Actions hoặc GitLab CI
- **Coverage Badge**: Hiển thị trong README

## Manual Testing
**Testing cần validation thủ công**

### UI/UX Testing Checklist

- [ ] **Homepage**
  - [ ] Danh sách phim hiển thị đúng
  - [ ] Search và filter hoạt động
  - [ ] Pagination hoạt động
  - [ ] Responsive trên mobile/tablet/desktop

- [ ] **Movie Detail Page**
  - [ ] Thông tin phim hiển thị đầy đủ
  - [ ] Trailer play được
  - [ ] Lịch chiếu hiển thị đúng
  - [ ] Button "Đặt vé" hoạt động

- [ ] **Booking Page**
  - [ ] Sơ đồ ghế hiển thị đúng
  - [ ] Ghế có thể chọn được
  - [ ] Trạng thái ghế hiển thị đúng (available/booked/locked)
  - [ ] Total price cập nhật khi chọn ghế
  - [ ] Button "Xác nhận" hoạt động

- [ ] **Payment Page**
  - [ ] Payment methods hiển thị
  - [ ] Redirect đến payment gateway đúng
  - [ ] Callback xử lý đúng

- [ ] **Admin Dashboard**
  - [ ] Dashboard hiển thị đúng
  - [ ] Navigation hoạt động
  - [ ] Forms validation hoạt động
  - [ ] Tables và pagination hoạt động

### Accessibility Testing

- [ ] Keyboard navigation hoạt động
- [ ] Screen reader compatibility (ARIA labels)
- [ ] Color contrast đạt WCAG AA
- [ ] Focus indicators rõ ràng

### Browser/Device Compatibility

- [ ] **Desktop Browsers**
  - [ ] Chrome (latest)
  - [ ] Firefox (latest)
  - [ ] Safari (latest)
  - [ ] Edge (latest)

- [ ] **Mobile Browsers**
  - [ ] Chrome Mobile (Android)
  - [ ] Safari Mobile (iOS)
  - [ ] Samsung Internet

- [ ] **Tablet**
  - [ ] iPad (Safari)
  - [ ] Android Tablet (Chrome)

### Smoke Tests sau Deployment

- [ ] Homepage load được
- [ ] Login hoạt động
- [ ] Xem danh sách phim hoạt động
- [ ] API endpoints trả về đúng
- [ ] Database connection ổn định

## Performance Testing
**Test hiệu năng**

### Load Testing Scenarios

- [ ] **Concurrent Users**: 100 users cùng lúc
  - [ ] Homepage load time < 2s
  - [ ] API response time < 500ms (p95)

- [ ] **Booking Load**: 50 users cùng đặt vé
  - [ ] Seat locking hoạt động đúng
  - [ ] Không có race conditions
  - [ ] Response time < 1s

- [ ] **Payment Load**: 30 payments cùng lúc
  - [ ] Payment processing < 3s
  - [ ] Không có duplicate payments

### Stress Testing

- [ ] **High Load**: 500 concurrent users
  - [ ] System không crash
  - [ ] Graceful degradation
  - [ ] Error handling đúng

- [ ] **Database Load**: 10,000 bookings
  - [ ] Queries vẫn nhanh (< 500ms)
  - [ ] Indexes hoạt động hiệu quả

### Performance Benchmarks

- **API Response Times**:
  - GET /api/movies: < 200ms
  - GET /api/movies/:id: < 100ms
  - POST /api/bookings: < 500ms
  - POST /api/payments: < 1s

- **Frontend Load Times**:
  - First Contentful Paint: < 1.5s
  - Time to Interactive: < 3s
  - Largest Contentful Paint: < 2.5s

- **Database Queries**:
  - Simple queries: < 50ms
  - Complex aggregations: < 500ms

## Bug Tracking
**Quản lý bugs**

### Issue Tracking Process

1. **Bug được report** → Tạo issue trong GitHub/GitLab
2. **Bug được assign** → Developer được assign
3. **Bug được fix** → Code review và test
4. **Bug được verify** → QA verify fix
5. **Bug được closed** → Issue closed

### Bug Severity Levels

- **Critical**: System down, data loss, security breach
  - Fix ngay lập tức
  - Hotfix nếu cần

- **High**: Major feature không hoạt động, payment issues
  - Fix trong 24h

- **Medium**: Minor feature issues, UI problems
  - Fix trong 1 tuần

- **Low**: Cosmetic issues, minor improvements
  - Fix trong next release

### Regression Testing Strategy

- **Sau mỗi bug fix**: Test lại feature đó và related features
- **Trước mỗi release**: Full regression test suite
- **Automated tests**: Chạy trước mỗi merge
- **Manual testing**: Cho critical paths

### Test Cases cho Bug Fixes

- [ ] Bug được reproduce
- [ ] Root cause được identify
- [ ] Fix được implement
- [ ] Unit tests được thêm/update
- [ ] Integration tests pass
- [ ] Manual testing verify fix
- [ ] Không có regression
