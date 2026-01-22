# 📚 Hướng Dẫn 4 Folder Chính

## 1️⃣ `migrations/` - Quản Lý Cấu Trúc Database

### Là gì?
**Migrations** = Lịch sử của mọi thay đổi trong database schema.

Mỗi khi bạn muốn:
- Tạo bảng mới (users, movies, bookings)
- Thêm cột mới (phone, status)
- Xóa cột cũ
- Thay đổi kiểu dữ liệu

→ Bạn viết 1 file migration để quản lý thay đổi này.

### Tại sao cần migrations?
```
Tình huống 1: Dev phiên bản 1
→ Tạo bảng users
   (migration_1_create_users.js)

Tình huống 2: 3 tuần sau, cần thêm cột phone
→ Tạo migration mới thêm phone
   (migration_2_add_phone_to_users.js)

Tình huống 3: Deploy lên production
→ Chạy tất cả migrations theo thứ tự
→ Database tự động cập nhật đúng cấu trúc
```

### Ví dụ Migration File
```
migrations/
├── 001-create-users-table.js       ← Tạo bảng users
├── 002-create-movies-table.js      ← Tạo bảng movies
├── 003-create-bookings-table.js    ← Tạo bảng bookings
├── 004-add-phone-to-users.js       ← Thêm cột phone vào users
└── 005-create-payments-table.js    ← Tạo bảng payments
```

### Cách sử dụng (với Sequelize)
```javascript
// File: migrations/001-create-users-table.js
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  }
};
```

**up()** = Khi chạy migration (tạo/thêm)  
**down()** = Khi revert migration (rollback)

---

## 2️⃣ `seeders/` - Dữ Liệu Ban Đầu

### Là gì?
**Seeders** = Những file tự động chèn dữ liệu mẫu vào database.

Dùng để:
- Thêm dữ liệu test khi phát triển
- Thêm dữ liệu khởi tạo (roles, settings)
- Demo dữ liệu cho stakeholders

### Ví dụ Seeder File
```
seeders/
├── 001-seed-roles.js           ← Thêm roles (ADMIN, USER)
├── 002-seed-users.js           ← Thêm users test
├── 003-seed-movies.js          ← Thêm movies
├── 004-seed-theaters.js        ← Thêm rạp chiếu
└── 005-seed-showtimes.js       ← Thêm lịch chiếu
```

### Cách sử dụng
```javascript
// File: seeders/001-seed-roles.js
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('roles', [
      { id: 1, name: 'ADMIN', createdAt: new Date() },
      { id: 2, name: 'USER', createdAt: new Date() }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
```

### Khi nào chạy seeders?
```bash
# Lần đầu setup:
pnpm run migrate    # Chạy migrations tạo tables
pnpm run seed       # Chạy seeders thêm dữ liệu

# Sau đó bạn có database với dữ liệu sẵn để test
```

---

## 3️⃣ `services/` - Business Logic (Quan Trọng!)

### Là gì?
**Services** = Chứa toàn bộ logic kinh doanh của app.

**Quy tắc:**
- Controllers chỉ nhận request & trả response
- Services xử lý tất cả business logic
- Models chỉ giao tiếp với database

### Quy trình yêu cầu
```
Request → Controller (nhận dữ liệu)
       ↓
    Service (xử lý logic: validate, tính toán, gọi DB)
       ↓
    Database (lấy/lưu dữ liệu)
       ↓
Controller (trả về response)
Response → Client
```

### Ví dụ Services
```
services/
├── auth.service.js        ← Đăng ký, đăng nhập, verify OTP
├── movie.service.js       ← Lấy movies, filter, search
├── booking.service.js     ← Đặt vé, kiểm tra ghế
├── payment.service.js     ← Xử lý thanh toán
├── email.service.js       ← Gửi email xác nhận
├── theater.service.js     ← Quản lý rạp chiếu
├── seat.service.js        ← Kiểm tra/khóa ghế
├── showtime.service.js    ← Quản lý lịch chiếu
└── admin.service.js       ← Các hành động admin
```

### Ví dụ Chi Tiết: Booking Service
```javascript
// File: services/booking.service.js

class BookingService {
  // Khi khách đặt vé
  async createBooking(userId, showtimeId, seatIds) {
    // 1. Validate input
    if (!seatIds || seatIds.length === 0) {
      throw new Error('Chọn ít nhất 1 ghế');
    }

    // 2. Kiểm tra lịch chiếu tồn tại
    const showtime = await Showtime.findByPk(showtimeId);
    if (!showtime) {
      throw new Error('Lịch chiếu không tồn tại');
    }

    // 3. Kiểm tra ghế có sẵn không
    const seats = await Seat.findAll({
      where: { id: seatIds, showtimeId }
    });
    const bookedSeats = seats.filter(s => s.status !== 'AVAILABLE');
    if (bookedSeats.length > 0) {
      throw new Error('Một số ghế đã được đặt');
    }

    // 4. Tạo booking
    const booking = await Booking.create({
      userId,
      showtimeId,
      status: 'PENDING',
      totalPrice: this.calculatePrice(seats)
    });

    // 5. Khóa ghế (reservation)
    await Seat.update(
      { status: 'HELD', bookingId: booking.id },
      { where: { id: seatIds } }
    );

    // 6. Set timer hết hạn (15 phút)
    await this.scheduleBookingExpiration(booking.id);

    return booking;
  }

  calculatePrice(seats) {
    // Logic tính giá dựa trên loại ghế
    let total = 0;
    seats.forEach(seat => {
      if (seat.type === 'VIP') total += 150000;
      else if (seat.type === 'SWEETBOX') total += 200000;
      else total += 100000;
    });
    return total;
  }

  async scheduleBookingExpiration(bookingId) {
    // Sau 15 phút tự động hủy nếu chưa thanh toán
    setTimeout(async () => {
      const booking = await Booking.findByPk(bookingId);
      if (booking.status === 'PENDING') {
        await booking.update({ status: 'EXPIRED' });
        // Giải phóng ghế
        await Seat.update({ status: 'AVAILABLE' }, 
          { where: { bookingId } });
      }
    }, 15 * 60 * 1000);
  }
}

module.exports = new BookingService();
```

### Ví dụ Controller gọi Service
```javascript
// File: controllers/booking.controller.js
const bookingService = require('../services/booking.service');
const { successResponse, errorResponse } = require('../utils/response.util');

class BookingController {
  async createBooking(req, res) {
    try {
      const { showtimeId, seatIds } = req.body;
      const userId = req.user.id;

      // Gọi service để xử lý logic
      const booking = await bookingService.createBooking(
        userId, 
        showtimeId, 
        seatIds
      );

      return successResponse(res, booking, 201, 'Đặt vé thành công');
    } catch (error) {
      return errorResponse(res, error.message, 400);
    }
  }
}

module.exports = new BookingController();
```

---

## 4️⃣ `jobs/` - Tác Vụ Nền (Background Jobs)

### Là gì?
**Jobs** = Những tác vụ chạy tự động theo lịch (không cần user trigger).

### Ví dụ Jobs cần có
```
jobs/
├── scheduler.js                ← Khởi động tất cả jobs
├── expireHeldSeats.job.js      ← Mỗi 1 phút: giải phóng ghế quá hạn
├── refundExpiredBookings.job.js ← Mỗi 5 phút: hoàn tiền booking hết hạn
├── cleanupOtpCodes.job.js      ← Hàng giờ: xóa mã OTP hết hạn
├── sendReminderEmails.job.js   ← Hàng ngày: gửi email nhắc nhở
├── generateTickets.job.js      ← Sau khi thanh toán: tạo vé + QR code
├── updateMovieStatus.job.js    ← Hàng ngày: cập nhật trạng thái phim
└── logAnalytics.job.js         ← Hàng giờ: ghi nhật ký doanh số
```

### Ví dụ Job: Hết Hạn Ghế
```javascript
// File: jobs/expireHeldSeats.job.js
const schedule = require('node-schedule');
const { Seat, Booking } = require('../models');

class ExpireHeldSeatsJob {
  start() {
    // Chạy mỗi 1 phút
    schedule.scheduleJob('*/1 * * * *', async () => {
      console.log('[JOB] Checking for held seats to expire...');

      // Tìm ghế bị khóa quá 15 phút
      const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);

      const expiredHeldSeats = await Seat.findAll({
        where: {
          status: 'HELD',
          updatedAt: { [Op.lt]: fifteenMinutesAgo }
        }
      });

      if (expiredHeldSeats.length > 0) {
        // Giải phóng ghế
        await Seat.update(
          { status: 'AVAILABLE', bookingId: null },
          { where: { id: expiredHeldSeats.map(s => s.id) } }
        );

        console.log(`[JOB] Freed ${expiredHeldSeats.length} expired seats`);
      }
    });
  }

  stop() {
    schedule.gracefulShutdown();
  }
}

module.exports = new ExpireHeldSeatsJob();
```

### Ví dụ Job: Gửi Email Nhắc Nhở
```javascript
// File: jobs/sendReminderEmails.job.js
const schedule = require('node-schedule');
const { Booking } = require('../models');
const emailService = require('../services/email.service');

class SendReminderEmailsJob {
  start() {
    // Chạy mỗi ngày lúc 18:00
    schedule.scheduleJob('0 18 * * *', async () => {
      console.log('[JOB] Sending reminder emails...');

      // Tìm booking trong 24 giờ tới
      const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const today = new Date();

      const upcomingBookings = await Booking.findAll({
        include: [{
          model: Showtime,
          where: {
            startTime: { [Op.between]: [today, tomorrow] }
          }
        }]
      });

      for (const booking of upcomingBookings) {
        await emailService.sendReminderEmail(booking);
      }

      console.log(`[JOB] Sent ${upcomingBookings.length} reminder emails`);
    });
  }

  stop() {
    schedule.gracefulShutdown();
  }
}

module.exports = new SendReminderEmailsJob();
```

### Khởi động Jobs
```javascript
// File: jobs/scheduler.js
const expireHeldSeatsJob = require('./expireHeldSeats.job');
const sendReminderEmailsJob = require('./sendReminderEmails.job');

class JobScheduler {
  start() {
    console.log('[SCHEDULER] Starting all background jobs...');
    
    expireHeldSeatsJob.start();
    sendReminderEmailsJob.start();
    
    console.log('[SCHEDULER] All jobs started');
  }

  stop() {
    console.log('[SCHEDULER] Stopping all background jobs...');
    
    expireHeldSeatsJob.stop();
    sendReminderEmailsJob.stop();
    
    console.log('[SCHEDULER] All jobs stopped');
  }
}

module.exports = new JobScheduler();
```

### Gọi scheduler trong server.js
```javascript
// File: src/server.js
const jobScheduler = require('./jobs/scheduler');

const app = express();

// ... middleware setup ...

// Bắt đầu jobs khi server khởi động
jobScheduler.start();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Background jobs started');
});
```

---

## 📊 Tóm Tắt 4 Folder

| Folder | Dùng để | Khi nào | Ví dụ |
|--------|---------|--------|------|
| **migrations** | Quản lý thay đổi DB schema | Dev & Deploy | Tạo bảng, thêm cột |
| **seeders** | Chèn dữ liệu mẫu | Setup ban đầu | Thêm roles, users test |
| **services** | Business logic | Mỗi endpoint | Booking, payment, email |
| **jobs** | Tác vụ nền tự động | Sau khi server khởi động | Hết hạn ghế, gửi email |

---

## 🚀 Thứ Tự Tạo File

### Tuần 1 (Ngay bây giờ)
```
1. Tạo models (User, Movie, Booking...)  ← Trước migrations
2. Tạo migrations (căn cứ vào models)
3. Tạo seeders (dữ liệu test)
```

### Tuần 2 (Auth)
```
4. Tạo services (auth, email...)
5. Tạo controllers gọi services
6. Tạo routes
```

### Tuần 3+
```
7. Tạo jobs (nếu cần tác vụ nền)
8. Viết tests
```

---

## 💡 Quy Tắc Vàng

✅ **DO:**
- Services xử lý tất cả logic phức tạp
- Controllers chỉ nhận/trả dữ liệu
- Migrations quản lý mọi thay đổi DB
- Jobs chạy tác vụ định kỳ

❌ **DON'T:**
- Viết logic trong controllers
- Thay đổi DB schema mà không migration
- Gọi trực tiếp DB từ routes
- Chạy long-running task trong request handler

---

**Lý do sắp xếp này:**
→ Code dễ test, dễ maintain, dễ scale
→ Khi app phát triển không phải refactor toàn bộ

