---
phase: requirements
title: Requirements & Problem Understanding - Hệ thống Đặt Vé Xem Phim
description: Tài liệu đặc tả yêu cầu cho hệ thống quản lý đặt vé xem phim online
---

# Requirements & Problem Understanding - Hệ thống Đặt Vé Xem Phim

## Problem Statement
**Vấn đề cần giải quyết là gì?**

- **Vấn đề cốt lõi**: Hiện tại, việc đặt vé xem phim thường phải đến trực tiếp tại rạp, gây bất tiện cho người dùng, đặc biệt trong thời đại số hóa. Người dùng cần một hệ thống online để xem thông tin phim, đặt vé, chọn ghế và thanh toán trực tuyến một cách thuận tiện.

- **Đối tượng bị ảnh hưởng**: 
  - Người xem phim (Guest/User): Cần cách thức đặt vé nhanh chóng, tiện lợi
  - Quản trị viên (Admin): Cần công cụ quản lý phim, rạp, lịch chiếu, doanh thu hiệu quả
  - Rạp chiếu phim: Cần hệ thống quản lý tự động, giảm công việc thủ công

- **Tình trạng hiện tại**: Người dùng phải đến rạp để mua vé, không thể xem trước lịch chiếu chi tiết, không thể chọn ghế trước, phải thanh toán bằng tiền mặt tại quầy.

## Goals & Objectives
**Mục tiêu cần đạt được**

### Mục tiêu chính (Primary Goals)
- Cho phép người dùng xem danh sách phim, chi tiết phim, lịch chiếu trực tuyến
- Cho phép người dùng đăng ký tài khoản và đăng nhập vào hệ thống
- Cho phép người dùng đặt vé, chọn ghế và thanh toán online qua nhiều phương thức (VNPAY, VietQR, PayPal)
- Tự động sinh và gửi vé điện tử (E-Ticket) sau khi thanh toán thành công
- Cho phép Admin quản lý toàn bộ phim, rạp, phòng chiếu, ghế, lịch chiếu
- Cho phép Admin quản lý giá vé linh hoạt theo loại ghế, loại phim, thời gian
- Cho phép Admin xem báo cáo doanh thu chi tiết theo nhiều tiêu chí
- Hệ thống tự động gửi email xác thực, thông báo thanh toán

### Mục tiêu phụ (Secondary Goals)
- Cung cấp tính năng tìm kiếm và lọc phim theo nhiều tiêu chí
- Cho phép người dùng lưu phim yêu thích
- Quản lý tin tức và khuyến mãi để thu hút khách hàng
- Hỗ trợ đa ngôn ngữ (tiếng Việt, tiếng Anh)
- Giao diện responsive trên mọi thiết bị

### Ngoài phạm vi (Non-goals)
- Quản lý nhân viên rạp chiếu (chỉ quản lý Admin)
- Tích hợp với hệ thống quản lý kho (inventory)
- Tính năng đánh giá và review phim từ người dùng (có thể thêm sau)
- Tích hợp với mạng xã hội để chia sẻ
- Ứng dụng mobile native (chỉ web app responsive)

## User Stories & Use Cases
**Người dùng sẽ tương tác với hệ thống như thế nào?**

### A. User Stories cho Guest (Người dùng chưa đăng nhập)

1. **Đăng ký & Đăng nhập**
   - Là một Guest, tôi muốn đăng ký tài khoản bằng email hoặc số điện thoại để có thể đặt vé
   - Là một Guest, tôi muốn đăng nhập vào hệ thống để truy cập các chức năng dành cho User
   - Là một User, tôi muốn nhận email xác thực sau khi đăng ký để kích hoạt tài khoản

2. **Xem thông tin phim**
   - Là một Guest, tôi muốn xem danh sách phim đang chiếu và sắp chiếu để quyết định xem phim nào
   - Là một Guest, tôi muốn xem chi tiết phim (trailer, mô tả, diễn viên, đạo diễn) để hiểu rõ nội dung phim
   - Là một Guest, tôi muốn tìm kiếm phim theo tên để nhanh chóng tìm được phim mong muốn
   - Là một Guest, tôi muốn lọc phim theo thể loại, định dạng (2D/3D), ngày chiếu, rạp để tìm phim phù hợp

3. **Xem lịch chiếu và rạp**
   - Là một Guest, tôi muốn xem lịch chiếu của phim theo rạp và ngày để lựa chọn suất chiếu phù hợp
   - Là một Guest, tôi muốn xem thông tin các rạp (địa chỉ, số điện thoại) để chọn rạp gần nhất

4. **Xem tin tức & khuyến mãi**
   - Là một Guest, tôi muốn xem các bài viết về sự kiện phim, ưu đãi, giảm giá để biết các chương trình khuyến mãi

### B. User Stories cho User (Người dùng đã đăng nhập)

1. **Quản lý hồ sơ**
   - Là một User, tôi muốn cập nhật thông tin cá nhân (họ tên, email, số điện thoại, địa chỉ, ảnh đại diện) để đảm bảo thông tin chính xác khi thanh toán và nhận vé

2. **Đặt vé xem phim**
   - Là một User, tôi muốn đặt vé bằng cách chọn phim → rạp → ngày → suất chiếu → ghế để mua vé xem phim
   - Là một User, tôi muốn xem sơ đồ phòng chiếu với trạng thái ghế (trống, đã đặt, đang giữ, VIP) để chọn ghế phù hợp
   - Là một User, tôi muốn hệ thống tạm giữ ghế trong 5 phút để tôi có thời gian thanh toán

3. **Thanh toán**
   - Là một User, tôi muốn thanh toán bằng nhiều phương thức (VNPAY, VietQR, PayPal) để linh hoạt trong thanh toán
   - Là một User, tôi muốn nhận thông báo kết quả thanh toán (thành công/thất bại) để biết trạng thái giao dịch

4. **Nhận và quản lý vé**
   - Là một User, tôi muốn nhận vé điện tử (QR Code, PDF) sau khi thanh toán thành công để check-in tại rạp
   - Là một User, tôi muốn xem lịch sử đặt vé (đã xem, chưa xem, đã hủy) để quản lý các vé đã mua
   - Là một User, tôi muốn hủy vé nếu suất chiếu chưa bắt đầu và được hoàn tiền theo quy định

5. **Tính năng bổ sung**
   - Là một User, tôi muốn lưu phim yêu thích để xem sau và nhận đề xuất phim phù hợp

### C. User Stories cho Admin

1. **Quản lý phim**
   - Là một Admin, tôi muốn thêm, sửa, xóa phim để cập nhật danh sách phim trên hệ thống
   - Là một Admin, tôi muốn quản lý thể loại phim để phân loại phim rõ ràng
   - Là một Admin, tôi muốn thiết lập trạng thái phim (Đang chiếu / Sắp chiếu / Ngừng chiếu) để kiểm soát phim hiển thị

2. **Quản lý rạp và phòng chiếu**
   - Là một Admin, tôi muốn quản lý thông tin rạp (thêm, sửa, xóa) để cập nhật danh sách rạp
   - Là một Admin, tôi muốn quản lý phòng chiếu và ghế ngồi để cấu hình sơ đồ phòng chiếu
   - Là một Admin, tôi muốn thiết lập loại ghế (Standard / VIP / Sweetbox) để phân loại giá vé

3. **Quản lý lịch chiếu**
   - Là một Admin, tôi muốn tạo và quản lý lịch chiếu (phim, rạp, phòng, thời gian) để lên lịch chiếu phim
   - Là một Admin, tôi muốn hệ thống kiểm tra xung đột lịch chiếu để đảm bảo không trùng phòng

4. **Quản lý giá vé**
   - Là một Admin, tôi muốn cấu hình giá vé theo loại ghế, loại phim, ngày thường/cuối tuần, khung giờ để tối ưu doanh thu

5. **Quản lý người dùng và đơn đặt vé**
   - Là một Admin, tôi muốn xem danh sách người dùng và quản lý tài khoản (chặn/mở chặn) để duy trì môi trường an toàn
   - Là một Admin, tôi muốn xem danh sách đặt vé và thanh toán để kiểm soát giao dịch

6. **Báo cáo doanh thu**
   - Là một Admin, tôi muốn xem báo cáo doanh thu theo ngày/tuần/tháng, theo phim, theo rạp, theo loại ghế để ra quyết định kinh doanh
   - Là một Admin, tôi muốn xem tỷ lệ lấp đầy phòng chiếu để đánh giá hiệu suất

7. **Quản lý tin tức & khuyến mãi**
   - Là một Admin, tôi muốn tạo và quản lý bài viết tin tức, khuyến mãi để thu hút khách hàng

### D. Use Cases chi tiết

#### UC-1: Quy trình xem phim & đặt vé (Guest → User)
1. Guest xem danh sách phim
2. Guest xem chi tiết phim và lịch chiếu
3. Guest chọn suất chiếu → hệ thống yêu cầu đăng nhập
4. User đăng nhập và chọn ghế
5. User xác nhận đặt vé (hệ thống tính giá, giữ ghế 5 phút)
6. User thanh toán
7. Hệ thống xử lý thanh toán và gửi vé điện tử

#### UC-2: Quy trình hủy vé
1. User mở lịch sử đặt vé
2. User chọn vé và nhấn "Hủy"
3. Hệ thống kiểm tra điều kiện hủy (giờ chiếu chưa bắt đầu, chính sách rạp)
4. Nếu đã thanh toán → thực hiện hoàn tiền
5. Cập nhật trạng thái booking và payment

#### UC-3: Quy trình quản lý phim (Admin)
1. Admin mở trang quản lý phim
2. Admin thêm/sửa phim (tên, mô tả, trailer, poster, thể loại)
3. Hệ thống validate và lưu dữ liệu
4. Phim hiển thị trong danh sách cho người dùng

#### UC-4: Quy trình quản lý lịch chiếu (Admin)
1. Admin chọn phim + phòng chiếu
2. Admin chọn giờ bắt đầu – giờ kết thúc
3. Hệ thống kiểm tra xung đột lịch chiếu
4. Nếu hợp lệ → lưu vào database

#### UC-5: Quy trình check-in vé tại rạp
1. User đưa QR Code
2. Nhân viên quét QR
3. Hệ thống kiểm tra: vé hợp lệ, đúng suất chiếu, chưa check-in
4. Cập nhật trạng thái booking → CHECKED_IN

### Edge Cases cần xử lý
- Nhiều người cùng đặt một ghế đồng thời → cơ chế lock ghế
- Thanh toán timeout → tự động giải phóng ghế sau 5 phút
- Thanh toán thất bại → cho phép thanh toán lại hoặc hủy booking
- Lịch chiếu bị xung đột → Admin không thể tạo lịch trùng
- User hủy vé sau khi suất chiếu đã bắt đầu → không cho phép hủy
- Email xác thực không được gửi → cơ chế retry hoặc gửi lại

## Success Criteria
**Làm sao biết khi nào hoàn thành?**

### Tiêu chí chấp nhận (Acceptance Criteria)

1. **Chức năng Guest/User**
   - ✅ Guest có thể xem danh sách phim, chi tiết phim, lịch chiếu mà không cần đăng nhập
   - ✅ User có thể đăng ký và đăng nhập thành công, nhận email xác thực
   - ✅ User có thể đặt vé, chọn ghế, thanh toán và nhận vé điện tử
   - ✅ Tỷ lệ đặt vé thành công > 95% (không bị lỗi kỹ thuật)
   - ✅ Thời gian xử lý đặt vé < 3 giây

2. **Chức năng Admin**
   - ✅ Admin có thể quản lý đầy đủ phim, rạp, lịch chiếu, giá vé
   - ✅ Admin có thể xem báo cáo doanh thu với đầy đủ các tiêu chí
   - ✅ Hệ thống ngăn chặn xung đột lịch chiếu tự động

3. **Thanh toán**
   - ✅ Tích hợp thành công ít nhất 2 phương thức thanh toán (VNPAY, VietQR)
   - ✅ Tỷ lệ thanh toán thành công > 98%
   - ✅ Xử lý được các trường hợp thanh toán thất bại và timeout

4. **Bảo mật**
   - ✅ Mật khẩu được mã hóa (bcrypt)
   - ✅ JWT token cho authentication
   - ✅ Phân quyền rõ ràng giữa User và Admin
   - ✅ Input validation cho tất cả các form

5. **Hiệu năng**
   - ✅ Trang danh sách phim load < 2 giây
   - ✅ Sơ đồ ghế render < 1 giây
   - ✅ API response time < 500ms (p95)

6. **Giao diện**
   - ✅ Responsive trên mobile, tablet, desktop
   - ✅ Hỗ trợ đa ngôn ngữ (tiếng Việt, tiếng Anh)
   - ✅ Giao diện rõ ràng, dễ sử dụng

### Kết quả đo lường (Measurable Outcomes)
- Số lượng người dùng đăng ký tài khoản
- Số lượng vé được đặt thành công mỗi ngày
- Tỷ lệ chuyển đổi từ Guest → User → Đặt vé thành công
- Doanh thu từ hệ thống
- Tỷ lệ lấp đầy phòng chiếu trung bình

## Constraints & Assumptions
**Những hạn chế và giả định**

### Ràng buộc kỹ thuật (Technical Constraints)
- **Database**: MongoDB (NoSQL) - không sử dụng SQL
- **Backend**: Node.js với Express framework
- **Frontend**: React với TypeScript
- **Authentication**: JWT tokens
- **Payment Gateways**: VNPAY, VietQR, PayPal (API integration)
- **Email Service**: Cần tích hợp service gửi email (SendGrid, Nodemailer, etc.)
- **PDF Generation**: Cần thư viện tạo PDF (PDFKit, Puppeteer, etc.)
- **QR Code**: Cần thư viện sinh QR code

### Ràng buộc nghiệp vụ (Business Constraints)
- Thời gian giữ ghế: 5 phút (có thể cấu hình)
- Chính sách hủy vé: Tùy theo quy định của rạp (có thể cấu hình)
- Giá vé: Phụ thuộc vào loại ghế, loại phim, thời gian, ngày lễ
- Email xác thực: Bắt buộc để kích hoạt tài khoản

### Ràng buộc thời gian/ngân sách (Time/Budget Constraints)
- Phát triển theo từng phase, ưu tiên core features trước
- Cần có môi trường test và staging trước khi production

### Giả định (Assumptions)
- Người dùng có kết nối internet ổn định
- Người dùng có email hoặc số điện thoại hợp lệ
- Payment gateways hoạt động ổn định và có API documentation đầy đủ
- Admin được đào tạo sử dụng hệ thống
- Rạp chiếu có nhân viên để check-in vé tại rạp
- MongoDB có thể scale theo nhu cầu
- Server có đủ tài nguyên để xử lý concurrent bookings

## Questions & Open Items
**Những câu hỏi và vấn đề cần làm rõ**

### Câu hỏi chưa giải quyết
1. **Payment Gateway Integration**
   - Cần API credentials và documentation chi tiết từ VNPAY, VietQR, PayPal
   - Cần xác nhận webhook URLs và cách xử lý callback
   - Cần quy trình test với sandbox environment

2. **Email Service**
   - Chọn email service nào? (SendGrid, AWS SES, Nodemailer với SMTP?)
   - Template email cần thiết kế như thế nào?
   - Cần xử lý email bị bounce như thế nào?

3. **PDF Ticket Generation**
   - Format vé điện tử cần những thông tin gì?
   - Có cần watermark hoặc security features không?
   - Kích thước file PDF tối đa là bao nhiêu?

4. **Seat Locking Mechanism**
   - Có cần real-time updates khi ghế bị người khác đặt không?
   - Có cần WebSocket cho real-time seat status không?
   - Cơ chế cleanup cho ghế bị giữ quá 5 phút?

5. **Check-in tại rạp**
   - Admin có cần app riêng để quét QR không?
   - Hay chỉ cần web interface để nhập mã booking?
   - Có cần offline mode không?

6. **Internationalization**
   - Cần hỗ trợ thêm ngôn ngữ nào ngoài tiếng Việt và tiếng Anh?
   - Format ngày tháng, tiền tệ theo locale nào?

7. **Reporting & Analytics**
   - Cần export báo cáo ra format nào? (CSV, Excel, PDF?)
   - Có cần real-time dashboard không?
   - Có cần tích hợp với BI tools không?

### Vấn đề cần input từ stakeholder
- Chính sách hoàn tiền khi hủy vé (bao nhiêu %, thời gian xử lý)
- Quy trình xử lý khiếu nại của khách hàng
- Yêu cầu về backup và disaster recovery
- SLA (Service Level Agreement) cho hệ thống

### Nghiên cứu cần thiết
- Best practices cho seat locking trong booking systems
- Security best practices cho payment integration
- Performance optimization cho MongoDB với large datasets
- Caching strategies cho movie listings và showtimes
