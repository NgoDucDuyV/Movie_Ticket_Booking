# 📚 Hướng Dẫn Tài Liệu Backend - Hệ Thống Đặt Vé Xem Phim

## 🎯 Quick Navigation

**Mới bắt đầu?** → Đọc [Backend Design Summary](./BACKEND-DESIGN-SUMMARY.md)

**Cần hiểu yêu cầu?** → Đọc [Requirements](./requirements/movie-ticket-booking-srs.md)

**Cần design database?** → Đọc [Architecture](./design/system-architecture.md)

**Cần code?** → Đọc [Backend Structure](./implementation/backend-structure.md)

**Cần API endpoints?** → Đọc [API Documentation](./implementation/api-documentation.md)

**Cần lên kế hoạch?** → Đọc [Implementation Plan](./planning/implementation-plan.md)

---

## 📁 Cấu Trúc Tài Liệu

```
docs/ai/
├── BACKEND-DESIGN-SUMMARY.md          ← START HERE
├── requirements/
│   └── movie-ticket-booking-srs.md    # Detailed SRS
├── design/
│   ├── system-architecture.md         # Database + API structure
│   ├── system-flows-diagrams.md       # Workflows & state machines
│   └── README.md                      # Design overview
├── implementation/
│   ├── backend-structure.md           # Folder layout & templates
│   ├── api-documentation.md           # All endpoints
│   └── README.md                      # Implementation notes
├── planning/
│   ├── implementation-plan.md         # 13-phase roadmap
│   └── README.md                      # Planning overview
├── testing/
│   └── README.md                      # Test strategy (create tests here)
├── deployment/
│   └── README.md                      # Deployment guide
└── monitoring/
    └── README.md                      # Observability setup
```

---

## 📖 Document Descriptions

### 1. **BACKEND-DESIGN-SUMMARY.md** ⭐ START HERE
- **Mục đích:** Quick reference cho toàn bộ project
- **Nội dung:**
  - Project overview (guest, user, admin)
  - Key entities (14 tables)
  - Features by priority
  - 13-phase implementation plan
  - Architecture layers
  - API endpoints structure
  - Best practices
  - Performance targets
- **Khi nào dùng:** Bất cứ lúc nào cần overview nhanh

---

### 2. **requirements/movie-ticket-booking-srs.md**
- **Mục đích:** Đặc tả chi tiết yêu cầu
- **Nội dung:**
  - System overview & scope
  - All guest features (7 chức năng)
  - All user features (8 chức năng)
  - All admin features (12 chức năng)
  - System services (email, payment, ticket)
  - Non-functional requirements
  - Feature priority table
- **Khi nào dùng:** Khi cần hiểu rõ một feature nào đó

---

### 3. **design/system-architecture.md**
- **Mục đích:** Thiết kế hệ thống và database
- **Nội dung:**
  - System architecture diagram
  - ERD (Entity-Relationship Diagram)
  - 14 bảng chi tiết (fields, constraints, descriptions)
  - Price calculation logic
  - Seat locking mechanism
  - Payment flow
  - API structure overview
- **Khi nào dùng:** Khi implement models hoặc hiểu database

---

### 4. **design/system-flows-diagrams.md**
- **Mục đích:** Hiểu các quy trình chính
- **Nội dung:**
  - Architecture layers
  - Booking process (step-by-step)
  - Cancellation flow
  - Conflict detection logic
  - Authentication & authorization
  - Payment processing sequence
  - Background jobs
  - State machines (Booking, Payment, Seat)
- **Khi nào dùng:** Khi implement quy trình phức tạp

---

### 5. **implementation/backend-structure.md**
- **Mục đích:** Cấu trúc folder & file templates
- **Nội dung:**
  - Complete directory tree
  - Model template (user.model.js)
  - Controller template (movie.controller.js)
  - Service template (booking.service.js)
  - Route template (auth.routes.js)
  - Middleware templates (auth, authorize)
  - Utility templates (response, error)
  - server.js setup
  - .env configuration
  - package.json essentials
  - Database connection
  - Routes organization
- **Khi nào dùng:** Khi tạo file mới hoặc structure mới

---

### 6. **implementation/api-documentation.md**
- **Mục đích:** Tất cả API endpoints
- **Nội dung:**
  - Base URL
  - 13 API groups (Auth, Movie, Theater, etc.)
  - Request/response examples
  - Query parameters & filters
  - Admin endpoints
  - Error codes & handling
  - Authentication headers
- **Khi nào dùng:** Khi implement một endpoint hoặc frontend gọi API

---

### 7. **planning/implementation-plan.md**
- **Mục đích:** Lên kế hoạch phát triển
- **Nội dung:**
  - Complete backend directory structure
  - CRUD matrix cho 14 models
  - 13-phase development roadmap
  - Dependencies & packages
  - Timeline (13 weeks = 3 months)
  - Feature priority (Critical, High, Medium, Low)
- **Khi nào dùng:** Khi lên kế hoạch sprint hoặc track progress

---

### 8. **testing/README.md** (Create when ready)
- **Mục đích:** Strategy for testing
- **Content:**
  - Unit tests template
  - Integration tests template
  - Test coverage goals
  - Mock data setup
- **Khi nào dùng:** Phase 13 (Testing & Optimization)

---

### 9. **deployment/README.md** (Create when ready)
- **Mục đích:** Deployment & infrastructure
- **Content:**
  - Database setup (MySQL)
  - Server setup (Node.js)
  - Environment configuration
  - Docker setup (optional)
  - CI/CD pipeline
- **Khi nào dùng:** Khi sẵn sàng deploy

---

### 10. **monitoring/README.md** (Create when ready)
- **Mục đích:** Observability & monitoring
- **Content:**
  - Logging setup
  - Error tracking
  - Performance monitoring
  - Alerting
- **Khi nào dùng:** Post-deployment

---

## 🚀 Getting Started Guide

### Step 1: Read the Overview
```
Đọc: BACKEND-DESIGN-SUMMARY.md
Thời gian: 15 phút
Mục tiêu: Hiểu toàn bộ project
```

### Step 2: Understand Requirements
```
Đọc: requirements/movie-ticket-booking-srs.md
Thời gian: 30 phút
Mục tiêu: Hiểu chi tiết từng feature
```

### Step 3: Study the Architecture
```
Đọc: design/system-architecture.md
       design/system-flows-diagrams.md
Thời gian: 1 hour
Mục tiêu: Hiểu database & quy trình
```

### Step 4: Plan Your Work
```
Đọc: planning/implementation-plan.md
Thời gian: 30 phút
Mục tiêu: Lên kế hoạch phát triển theo phase
```

### Step 5: Start Coding
```
Refer: implementation/backend-structure.md
       implementation/api-documentation.md
Mục tiêu: Tạo file theo templates
```

---

## 🎓 Learning Path by Role

### Backend Developer
1. Overview (5 min)
2. Architecture (30 min)
3. System Flows (30 min)
4. Implementation Plan (30 min)
5. Backend Structure (1 hour)
6. API Documentation (1 hour)
7. Requirements (reference as needed)

**Total: ~4 hours**

### Database Admin
1. Architecture → Database section (20 min)
2. Requirements → Bảng tương tác với DB (15 min)
3. System Flows → Database operations (20 min)

**Total: ~1 hour**

### Frontend Developer
1. Overview (5 min)
2. API Documentation (1 hour)
3. System Flows → Payment & Booking (30 min)

**Total: ~2 hours**

### Project Manager / Tech Lead
1. Summary (15 min)
2. Implementation Plan (30 min)
3. System Flows (30 min)
4. Requirements (30 min)

**Total: ~2 hours**

---

## 📋 Feature Implementation Checklist

Use this to track progress:

### Phase 1: Infrastructure
- [ ] Database schema created
- [ ] Environment setup
- [ ] Project structure created
- [ ] Dependencies installed

### Phase 2: Authentication
- [ ] User model created
- [ ] Registration endpoint
- [ ] OTP verification
- [ ] Login endpoint
- [ ] JWT token generation
- [ ] Auth middleware

### Phase 3: Content Management
- [ ] Movie CRUD
- [ ] Genre CRUD
- [ ] Theater CRUD
- [ ] Screen CRUD
- [ ] Movie search/filter
- [ ] Movie detail with showtimes

### Phase 4: Showtimes & Seats
- [ ] Showtime CRUD
- [ ] Conflict detection logic
- [ ] Seat model & display
- [ ] Seat availability check

### Phase 5: Booking & Pricing
- [ ] Ticket price model
- [ ] Price calculation logic
- [ ] Booking creation
- [ ] Seat locking (5 min)
- [ ] Booking history
- [ ] Seat release job

### Phase 6: Payments
- [ ] Payment model
- [ ] VNPAY integration
- [ ] Payment creation
- [ ] Callback handling
- [ ] Refund logic

### Phase 7: E-Tickets & Email
- [ ] PDF generation
- [ ] QR code generation
- [ ] Email service
- [ ] Email templates
- [ ] Ticket delivery

### Phase 8: Cancellation
- [ ] Cancel endpoint
- [ ] Validation logic
- [ ] Refund processing
- [ ] Seat release
- [ ] Confirmation email

### Phase 9: User Management
- [ ] Profile endpoints
- [ ] Favorites management
- [ ] Admin user list
- [ ] Admin user block/unblock

### Phase 10: Promotions
- [ ] News CRUD
- [ ] News listing
- [ ] Image upload

### Phase 11: Analytics
- [ ] Revenue calculation
- [ ] Occupancy rate
- [ ] CSV export
- [ ] Report endpoints

### Phase 12: Check-in
- [ ] QR verification
- [ ] Ticket validity check
- [ ] Check-in endpoint

### Phase 13: Testing
- [ ] Unit tests
- [ ] Integration tests
- [ ] Load testing
- [ ] Security audit

---

## 🔗 Cross-Reference Guide

**When you need to implement...**

| Task | Read | Also Check |
|------|------|-----------|
| New endpoint | API Doc + Backend Structure | Requirements |
| New model | Backend Structure | Architecture |
| Payment flow | System Flows | API Doc |
| Booking logic | System Flows + Requirements | API Doc |
| Database design | Architecture | Requirements |
| Error handling | Backend Structure | API Doc |
| Authentication | System Flows | API Doc |
| Admin features | Requirements | API Doc |
| Performance | Implementation Plan | Architecture |

---

## 💡 Key Concepts to Remember

1. **14 Tables:** Users, Roles, Movies, Genres, Theaters, Screens, Seats, Showtimes, Bookings, BookingSeats, Payments, TicketPrices, News, Favorites

2. **3 User Roles:** Guest (browsing only), User (booking + payment), Admin (management)

3. **5 Main Features:** Movie listing, Booking, Payment, E-tickets, Management

4. **3 Critical Flows:** Booking → Payment → Ticket, Cancellation, Admin management

5. **5-Minute Seat Lock:** Prevent double-booking via temporary hold

6. **Dynamic Pricing:** Based on seat type, movie type, day type, time slot

7. **Atomic Transactions:** Booking + payment must succeed together

8. **Background Jobs:** Seat expiry, payment status check

9. **State Machines:** Booking and Payment have multiple states

10. **OAuth Integration:** JWT for auth, OTP for verification

---

## 🆘 Troubleshooting

**Q: Where do I find the database schema?**
A: `design/system-architecture.md` → Database Design section

**Q: How many endpoints do I need to implement?**
A: ~50+ endpoints listed in `implementation/api-documentation.md`

**Q: What's the payment flow?**
A: `design/system-flows-diagrams.md` → Section 6

**Q: How long will implementation take?**
A: `planning/implementation-plan.md` → 13 weeks (3 months) estimate

**Q: What's the folder structure?**
A: `implementation/backend-structure.md` → Section 1

**Q: Where are code templates?**
A: `implementation/backend-structure.md` → Section 2

---

## ✅ Completion Checklist

- [ ] Read Summary (15 min)
- [ ] Understand Requirements (30 min)
- [ ] Study Architecture (1 hour)
- [ ] Review System Flows (45 min)
- [ ] Plan Implementation (30 min)
- [ ] Review Backend Structure (1 hour)
- [ ] Review API Documentation (1 hour)
- [ ] Ready to code! 🚀

**Total Reading Time: ~5.5 hours**

---

## 📞 Questions?

Refer to the relevant document above for answers. All major decisions have been documented.

Good luck! 🎬🎫💻

