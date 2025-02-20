**Sistem Login dengan JavaScript (Node.js & MongoDB)**
Sistem login ini menggunakan **Node.js**, **Express.js**, dan **MongoDB** sebagai backend. Proyek ini mencakup fitur **registrasi**, **login**, serta penggunaan **JWT** untuk autentikasi.

## 🚀 **Struktur Proyek**
📂 sistem-login
├── 📂 backend (Folder backend)
│   ├── 📂 config (Konfigurasi, seperti koneksi database)
│   │   ├── db.js
│   ├── 📂 controllers (Fungsi-fungsi untuk menangani request)
│   │   ├── authController.js
│   ├── 📂 middlewares (Middleware untuk autentikasi)
│   │   ├── authMiddleware.js
│   ├── 📂 models (Model database)
│   │   ├── userModel.js
│   ├── 📂 routes (Endpoint API)
│   │   ├── authRoutes.js
│   ├── 📂 utils (Helper functions seperti hashing password)
│   │   ├── hashPassword.js
│   ├── .env (Konfigurasi environment seperti JWT secret)
│   ├── .gitignore
│   ├── package.json (File konfigurasi npm)
│   ├── server.js (Entry point utama)
│
├── 📂 frontend (Jika nanti menambahkan React untuk UI)
│   ├── 📂 src
│   │   ├── 📂 components
│   │   ├── 📂 pages
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│
└── README.md (Dokumentasi proyek ini)

## 📦 **Instalasi & Setup**
1. **Clone repository ini:**  
   git clone https://github.com/username/sistem-login.git
   cd sistem-login/backend

2. **Install dependencies:**  
   npm install

3. **Buat file `.env` dengan isi seperti berikut:**  
   MONGO_URI=mongodb://localhost:27017/sistem-login
   JWT_SECRET=your_jwt_secret
   PORT=5000

4. **Jalankan server:**  
   npm run dev

5. **Cek apakah server berjalan:**  
   Jika berhasil, akan muncul pesan:  
     Server berjalan di port 5000
     MongoDB Connected: localhost

## 🔧 **Endpoint API**
### 1️⃣ **Register User**  
- **URL:** `POST /api/auth/register`  
- **Body (JSON):**  
  {
    "name": "Fulan",
    "email": "fulan@gmail.com",
    "password": "fulan123"
  }
- **Response (Jika sukses):**  
  {
    "message": "User registered successfully"
  }

### 2️⃣ **Login User**  
- **URL:** `POST /api/auth/login`  
- **Body (JSON):**  
  {
    "email": "fulan@gmail.com",
    "password": "fulan123"
  }
- **Response (Jika sukses):**  
  {
    "message": "Login successful",
    "token": "jwt_token_here"
  }

## 📝 **Catatan Tambahan**  
- Gunakan **Postman** atau **Insomnia** untuk menguji API.  
- Pastikan MongoDB sudah berjalan sebelum menjalankan backend.  
- Jika terjadi error **"Unexpected string in JSON"**, pastikan header request sudah berformat **JSON** dan gunakan `Content-Type: application/json`.

