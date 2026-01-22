# Yêu Cầu Phần Mềm: Hệ Thống Đặt Vé Xem Phim

## 1. Tổng Quan Hệ Thống

### Mục Đích
Xây dựng hệ thống quản lý đặt vé xem phim online cho phép:
- **Khách (Guest)**: Xem thông tin phim, rạp, lịch chiếu
- **Người dùng (User)**: Đặt vé, chọn ghế, thanh toán, quản lý vé của mình
- **Quản trị viên (Admin)**: Quản lý phim, rạp, lịch chiếu, giá vé, người dùng, doanh thu

### Phạm Vi

#### A. Chức Năng Guest (Chưa Đăng Nhập)
1. **Xem danh sách phim** - Phim đang chiếu/sắp chiếu
2. **Xem chi tiết phim** - Mô tả, trailer, diễn viên, lịch chiếu
3. **Tìm kiếm & lọc phim** - Theo tên, thể loại, định dạng (2D/3D), ngày, rạp
4. **Xem lịch chiếu** - Theo rạp, ngày, giờ chiếu, phòng
5. **Xem thông tin rạp** - Địa chỉ, hotline, phòng chiếu
6. **Xem tin tức & khuyến mãi** - Bài viết sự kiện, ưu đãi
7. **Đăng ký/Đăng nhập** - Bằng email hoặc số điện thoại + OTP

#### B. Chức Năng User (Đã Đăng Nhập)
1. **Đặt vé** - Chọn phim → rạp → ngày → suất chiếu → số lượng ghế
2. **Chọn ghế** - Xem sơ đồ phòng, phân biệt ghế trống/đã đặt/đang giữ/VIP
3. **Thanh toán** - VNPAY, VietQR, PayPal, Momo
4. **Nhận vé điện tử** - PDF + QR Code gửi email
5. **Xem lịch sử đặt vé** - Vé đã xem/chưa xem/đã hủy + giao dịch
6. **Hủy vé** - Nếu suất chiếu chưa bắt đầu + hoàn tiền theo quy định
7. **Cập nhật hồ sơ cá nhân** - Họ tên, email, phone, ảnh đại diện, địa chỉ
8. **Lưu phim yêu thích** - Bookmark để xem sau

#### C. Chức Năng Admin
1. **Quản lý phim** - Thêm/sửa/xóa, cập nhật poster/trailer/thể loại/trạng thái
2. **Quản lý thể loại** - Tạo/chỉnh sửa/xóa thể loại
3. **Quản lý rạp** - Thêm/cập nhật/xóa rạp, quản lý địa chỉ & hotline
4. **Quản lý phòng chiếu** - Thêm/chỉnh sửa/xóa phòng, cấu hình loại (2D/3D)
5. **Quản lý ghế** - Tạo danh sách ghế, loại (Standard/VIP/Sweetbox), ẩn/hiển thị
6. **Quản lý lịch chiếu** - Tạo/chỉnh sửa/xóa, kiểm tra xung đột
7. **Quản lý giá vé** - Giá theo loại ghế, loại phim, ngày thường/cuối tuần, khung giờ, ngày lễ
8. **Quản lý tin tức & khuyến mãi** - Tạo/sửa/xóa bài viết, quản lý banner
9. **Quản lý người dùng** - Xem danh sách, chỉnh sửa, chặn/mở chặn, kiểm tra lịch sử
10. **Xem danh sách đặt vé** - Lọc theo phim/rạp/suất/trạng thái
11. **Quản lý thanh toán** - Theo dõi giao dịch (thành công/thất bại/đang xử lý)
12. **Báo cáo doanh thu** - Doanh thu theo ngày/tuần/tháng/phim/rạp/loại ghế

#### D. Chức Năng Hệ Thống
1. **Gửi email OTP** - Xác thực tài khoản
2. **Xử lý thanh toán** - Tích hợp VNPAY, VietQR, PayPal
3. **Sinh vé điện tử** - Tạo file PDF + QR Code
4. **Gửi thông báo** - Email sau thanh toán, hủy vé, khuyến mãi

---

## 2. Yêu Cầu Phi Chức Năng

### 2.1 Bảo Mật
- Phân quyền dựa trên vai trò (RBAC)
- Mã hóa mật khẩu
- JWT tokens cho xác thực
- Bảo vệ dữ liệu thanh toán
- Xác thực 2FA (OTP) cho đăng ký

### 2.2 Hiệu Năng
- Xử lý được nhiều yêu cầu đặt vé cùng lúc
- Giữ ghế trong 5 phút
- Caching dữ liệu phim & lịch chiếu
- API response time < 200ms

### 2.3 Giao Diện
- Responsive (mobile, tablet, desktop)
- Hiển thị sơ đồ ghế trực quan
- Giao diện thanh toán đơn giản, rõ ràng

### 2.4 Tính Sẵn Sàng
- Uptime ≥ 99%
- Backup dữ liệu hàng ngày
- Cơ chế rollback giao dịch

---

## 3. Quy Trình Nghiệp Vụ Chính

### 3.1 Quy Trình Đặt Vé (Guest → User)
```
Guest xem danh sách phim
  ↓
Guest chọn phim xem chi tiết
  ↓
Guest chọn suất chiếu → yêu cầu đăng nhập
  ↓
User xem sơ đồ ghế
  ↓
User chọn ghế (hệ thống giữ 5 phút)
  ↓
Xác nhận đơn hàng (tính tổng tiền)
  ↓
User chọn phương thức thanh toán
  ↓
Payment gateway xử lý
  ↓
Nếu SUCCESS: Tạo vé PDF, gửi email, cập nhật booking
Nếu FAILED: Cho phép thanh toán lại
```

### 3.2 Quy Trình Hủy Vé
```
User mở lịch sử đặt vé
  ↓
Chọn vé → nhấn "Hủy"
  ↓
Hệ thống kiểm tra:
  - Giờ chiếu chưa bắt đầu?
  - Chính sách rạp cho phép hủy?
  ↓
Nếu đã thanh toán → Refund (hoàn tiền)
Nếu chưa thanh toán → chỉ xóa booking
  ↓
Cập nhật status: booking → CANCELED
                 payment → REFUNDED
```

### 3.3 Quy Trình Kiểm Tra Xung Đột Lịch Chiếu
```
Admin tạo lịch chiếu mới (phim, rạp, phòng, thời gian)
  ↓
Hệ thống chạy kiểm tra:
  Có lịch chiếu khác cùng phòng trong cùng khoảng thời gian?
  ↓
Nếu hợp lệ → lưu vào bảng showtimes
Nếu trùng → hiển thị lỗi
```

---

## 4. Định Nghĩa Yêu Cầu Chi Tiết

| Chức Năng | Yêu Cầu | Ưu Tiên | Ghi Chú |
|-----------|---------|--------|---------|
| Xem danh sách phim | GET /api/movies | HIGH | Phân trang, lọc |
| Chi tiết phim | GET /api/movies/:id | HIGH | Bao gồm lịch chiếu |
| Tìm kiếm phim | GET /api/movies/search | MEDIUM | Fulltext search |
| Đặt vé | POST /api/bookings | HIGH | Atomic transaction |
| Chọn ghế | GET /api/bookings/:id/seats | HIGH | Realtime availability |
| Thanh toán | POST /api/payments | HIGH | Tích hợp gateway |
| Lịch sử đặt vé | GET /api/users/:id/bookings | MEDIUM | Lọc theo trạng thái |
| Hủy vé | PUT /api/bookings/:id/cancel | MEDIUM | Kiểm tra quy tắc hủy |
| Quản lý phim (Admin) | CRUD /api/admin/movies | HIGH | Validate dữ liệu |
| Quản lý lịch chiếu (Admin) | CRUD /api/admin/showtimes | HIGH | Kiểm tra xung đột |
| Báo cáo doanh thu | GET /api/admin/reports/revenue | MEDIUM | Hỗ trợ filter & export |

