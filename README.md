# Aaroh Academy — Official Website & Admissions Platform

> **“Learn Today, Lead Tomorrow”**
> A modern, responsive, production-ready full-stack educational coaching institute platform built for **Aaroh Academy**.

---

## 1. Project Overview

Aaroh Academy's web platform communicates academic excellence, trust, discipline, and student success. The application features an end-to-end demo booking system, dynamic course directories, interactive achievement counters, faculty credentials, a responsive student/parent testimonial carousel, an accessible single-expand FAQ accordion, a categorized campus life gallery with an accessible lightbox modal, and an embedded campus map with quick WhatsApp/phone connectivity.

### Core Brand Design System
- **Primary Color:** Deep Navy Blue (`#0A192F`, `#0F2445`)
- **Accent Color:** Bright Yellow (`#F59E0B`, `#FEF3C7`)
- **Surfaces & Backgrounds:** Pure White (`#FFFFFF`) and Light Gray (`#F8FAFC`, `#F1F5F9`)
- **Supporting Elements:** Blue-gray borders (`#E2E8F0`) and slate typography (`#0F172A`, `#334155`)
- **Typography:** Inter & Poppins

---

## 2. Technology Stack

### Frontend
- **React.js (v18+)** with **Vite**: Ultra-fast build tool and development server.
- **HTML5 & CSS3**: Semantic page landmarks, responsive CSS variables, flexbox and grid layouts, accessible focus visible indicators, and reduced-motion media query support.
- **Lucide React**: Clean, accessible SVG iconography.
- **Intersection Observer API**: Viewport-triggered statistics counter animation running once per page load.

### Backend
- **Node.js (v20+) & Express.js (v4.21+)**: RESTful API architecture.
- **Helmet**: Secure HTTP response headers.
- **CORS**: Domain origin filtering with credentials support.
- **Express Rate Limit**: Anti-spam and abuse rate limiting for the public demo enquiry endpoint.
- **Input Sanitization & Normalization**: Strips HTML injection vectors and standardizes 10-digit Indian mobile formats.
- **Node Test Runner (`node:test` & `node:assert`)**: Automated unit and integration testing.

### Database
- **MongoDB & Mongoose (v8+)**: Schema validation, unique indexing, and automated timestamp tracking for student demo enquiries.

---

## 3. Project Structure

```text
aaroh-academy/
├── client/
│   ├── public/
│   │   ├── favicon.svg
│   │   └── images/
│   │       ├── logo.svg
│   │       ├── hero-illustration.svg
│   │       ├── courses/
│   │       ├── faculty/
│   │       └── gallery/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # Sticky navbar with mobile focus-trapped drawer
│   │   │   ├── Hero.jsx            # Two-column hero with trust chips & illustration
│   │   │   ├── DemoForm.jsx        # Controlled enquiry form with real server feedback
│   │   │   ├── Courses.jsx         # 4 primary learning paths with details modal
│   │   │   ├── Results.jsx         # Viewport counter animation & verified stats
│   │   │   ├── Faculty.jsx         # 4 senior faculty cards & interaction CTA
│   │   │   ├── WhyChooseUs.jsx     # Exactly 4 core academic differentiators
│   │   │   ├── Testimonials.jsx    # Responsive 3-card/1-card carousel with touch swipe
│   │   │   ├── FAQ.jsx             # Exactly 6 questions single-expand accordion
│   │   │   ├── Gallery.jsx         # Categorized media grid with accessible lightbox
│   │   │   ├── Contact.jsx         # Campus address, lazy-loaded Google Map & directions
│   │   │   ├── Footer.jsx          # Complete navy footer with auto copyright year
│   │   │   └── WhatsAppButton.jsx  # Floating click-to-chat with safe-area support
│   │   ├── config/
│   │   │   └── academy.js          # Centralized configuration (contact, address, stats)
│   │   ├── data/
│   │   │   ├── courses.js          # 4 courses data
│   │   │   ├── faculty.js          # 4 faculty profiles
│   │   │   ├── testimonials.js     # Student & parent reviews
│   │   │   ├── faqs.js             # Exactly 6 FAQ items
│   │   │   └── gallery.js          # Media items & categories
│   │   ├── styles/
│   │   │   └── global.css          # Design system, CSS variables & typography
│   │   ├── App.jsx                 # Application root & smooth scroll orchestration
│   │   └── main.jsx
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── config/
│   │   └── database.js             # Mongoose connection & reconnection handling
│   ├── controllers/
│   │   └── enquiryController.js    # Validation, sanitization & enquiry creation
│   ├── middleware/
│   │   ├── errorHandler.js         # Centralized error handler
│   │   └── rateLimiter.js          # IP rate limiters
│   ├── models/
│   │   └── Enquiry.js              # Mongoose enquiry schema
│   ├── routes/
│   │   └── enquiryRoutes.js        # POST /api/enquiries & GET /api/enquiries
│   ├── tests/
│   │   └── enquiry.test.js         # 14 automated unit/controller tests
│   ├── server.js                   # Express application setup
│   ├── .env.example
│   └── package.json
├── .gitignore
└── README.md
```

---

## 4. Prerequisites

- **Node.js**: `v20.0.0` or higher (`v24+` recommended).
- **npm**: `v9.0.0` or higher.
- **MongoDB**: Local MongoDB instance (running via `mongod` on port 27017) OR a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster URI.

---

## 5. Installation & Setup

### Clone Repository
```bash
git clone <repository-url>
cd aaroh-academy
```

### Backend Setup
1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the sample environment file:
   ```bash
   cp .env.example .env
   ```
4. Verify or update variables in `server/.env`:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://127.0.0.1:27017/aaroh_academy
   CLIENT_ORIGIN=http://localhost:5173
   NODE_ENV=development
   ```

### Frontend Setup
1. Navigate to the client folder:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the sample environment file:
   ```bash
   cp .env.example .env
   ```
4. Ensure `client/.env` points to the backend server:
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   ```

---

## 6. Running the Development Servers

### Terminal 1: Start Backend API
```bash
cd server
npm run dev
```
*The server starts on `http://localhost:5000` with native hot-reload (`node --watch`).*

### Terminal 2: Start Frontend Application
```bash
cd client
npm run dev
```
*The Vite development server will open at `http://localhost:5173`.*

---

## 7. Running Backend Automated Tests

Run the built-in test runner:
```bash
cd server
npm test
```
The test suite validates:
- Phone number normalization (stripping `+91`, country codes, formatting characters, and validating Indian mobile patterns).
- Input sanitization against script tag injections.
- Controller HTTP 400 responses for missing required fields and short student names.
- Mongoose model schema constraints.

---

## 8. MongoDB Configuration Guide

### Option A: Local MongoDB
1. Ensure the MongoDB community service is running:
   ```powershell
   # Windows PowerShell
   net start MongoDB
   # Or run directly if installed as binary
   mongod --dbpath "C:\data\db"
   ```
2. Keep `MONGODB_URI=mongodb://127.0.0.1:27017/aaroh_academy` in `server/.env`.

### Option B: Cloud Database (MongoDB Atlas)
1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Under **Database Access**, create a database user and password.
3. Under **Network Access**, add your server's IP address (or `0.0.0.0/0` during development).
4. Copy the connection string and paste it into `server/.env`:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/aaroh_academy?retryWrites=true&w=majority
   ```

*Note: If MongoDB is offline, the backend gracefully catches connection errors, keeps running, and returns descriptive error notices without crashing.*

---

## 9. API Documentation

### 1. Health Check
- **Endpoint:** `GET /api/health`
- **Response:**
  ```json
  {
    "status": "ok",
    "service": "Aaroh Academy API",
    "database": "connected",
    "timestamp": "2026-10-25T04:30:00.000Z"
  }
  ```

### 2. Submit Demo Class Enquiry
- **Endpoint:** `POST /api/enquiries`
- **Rate Limit:** 6 requests per 15 minutes per IP.
- **Request Headers:** `Content-Type: application/json`
- **Request Body:**
  ```json
  {
    "studentName": "Aarav Singhal",
    "studentClass": "Class 10",
    "parentMobile": "9876543210",
    "course": "Class 9–10 Board Mastery"
  }
  ```
- **Success Response (HTTP 201 Created):**
  ```json
  {
    "success": true,
    "message": "Your demo class enquiry has been submitted successfully."
  }
  ```
- **Validation Failure Response (HTTP 400 Bad Request):**
  ```json
  {
    "success": false,
    "message": "Please correct the highlighted fields.",
    "errors": {
      "parentMobile": "Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9."
    }
  }
  ```
- **Duplicate Prevention Response (HTTP 400 Bad Request):**
  ```json
  {
    "success": false,
    "message": "An enquiry for this course and mobile number was already received recently. Our academic counsellor will get in touch with you shortly."
  }
  ```
- **Rate Limited Response (HTTP 429 Too Many Requests):**
  ```json
  {
    "success": false,
    "message": "Too many enquiry requests from this IP. Please try again after 15 minutes or call us directly."
  }
  ```

### 3. List Recent Enquiries (Administrative)
- **Endpoint:** `GET /api/enquiries?page=1&limit=10`
- **Response:** Returns paginated enquiries with masked phone numbers (`98****3210`) for student privacy.

---

## 10. Production Build & Deployment

### Build Frontend
```bash
cd client
npm run build
```
Creates an optimized, minified production bundle in `client/dist/`.

### Run Production Server
You can serve the static frontend assets via Nginx/Caddy or configure Express to serve `client/dist`:
```bash
cd server
NODE_ENV=production npm start
```

---

## 11. Academy Details Checklist Before Launch

Update the central configuration file at `client/src/config/academy.js` with verified academy information before public deployment:
1. **Contact Phone & WhatsApp:** Replace `+91 98765 43210` with the official Aaroh Academy SIM number.
2. **Campus Address:** Update `Plot 42, Institutional Area, Sector 62, Noida` with your verified campus premise address.
3. **Google Maps Embed:** Replace the placeholder map iframe URL with the official Google Maps embed URL generated for your verified business location.
4. **Social Channels:** Connect active YouTube, Instagram, and Facebook profile handles.
5. **Faculty Portraits & Credentials:** Replace development placeholder illustrations in `client/public/images/faculty/` and `client/src/data/faculty.js` with photographs and confirmed academic degrees of current teachers.
6. **Academic Statistics:** Audit the verified statistics (students guided, board percentages, and entrance selections) before publishing annual prospectus figures.
