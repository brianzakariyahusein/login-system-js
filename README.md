# Dokumentasi Sistem Login dengan JavaScript
## 1. Struktur Folder
📂 sistem-login  
├── 📂 backend (Folder backend)  
│ ├── 📂 config (Konfigurasi, seperti koneksi database)  
│ │ ├── db.js  
│ ├── 📂 controllers (Fungsi-fungsi untuk menangani request)  
│ │ ├── authController.js  
│ ├── 📂 node_modules <!-- Otomatis dibuat -->  
│ ├── 📂 middlewares (Middleware untuk autentikasi)  
│ │ ├── authMiddleware.js  
│ ├── 📂 models (Model database)  
│ │ ├── User.js  
│ ├── 📂 routes (Endpoint API)  
│ │ ├── authRoutes.js  
│ ├── 📂 utils (Helper functions seperti hashing password)  
│ │ ├── hashPassword.js  
│ ├── .env (Konfigurasi environment seperti JWT secret)  
│ ├── .gitignore  
│ ├── package.json (File konfigurasi npm) <!-- Otomatis dibuat -->  
│ ├── package-lock.json (File konfigurasi npm) <!-- Otomatis dibuat -->  
│ ├── server.js (Entry point utama untuk menjalankan server)  
│  
├── 📂 frontend (Jika nanti menambahkan React untuk UI)  
│ ├── 📂 src  
│ │ ├── 📂 components  
│ │ ├── 📂 pages  
│ │ ├── App.js  
│ │ ├── index.js  
│ ├── package.json  
│  
└── README.md (Dokumentasi proyek)  

## 2. Instalasi Backend
Jalankan perintah berikut di terminal untuk mengatur backend:
```sh
# Inisialisasi proyek
npm init -y
# Install dependencies utama
npm install express mongoose dotenv bcrypt jsonwebtoken cors morgan
# Install dependencies untuk development
npm install --save-dev nodemon
```
### Penjelasan Library:
- **express** → Framework backend untuk Node.js.
- **mongoose** → Koneksi ke database MongoDB.
- **dotenv** → Mengelola konfigurasi environment.
- **bcrypt** → Hashing password untuk keamanan.
- **jsonwebtoken** → Membuat dan memverifikasi token JWT.
- **cors** → Mengizinkan komunikasi antara frontend dan backend.
- **morgan** → Logging request ke terminal.
- **nodemon** → Menjalankan server dan otomatis restart jika ada perubahan kode.

## 3. Cara Menjalankan Server
```sh
# Masuk ke folder backend
cd backend
# Jalankan server dengan nodemon
npm run dev
# Jika tidak menggunakan nodemon, jalankan dengan:
node server.js
```
Jika berhasil, server akan berjalan di `http://localhost:5000`.
Untuk menjalankan MongoDB secara lokal:
```sh
mongod
```
Jika menggunakan MongoDB Atlas, pastikan `.env` diisi dengan benar.

## 4. Uji Coba API dengan Postman
### 🔹 **Register User**
- **Endpoint:** `POST /api/auth/register`
- **URL:** `http://localhost:5000/api/auth/register`
- **Body (JSON):**
  ```json
  {
    "name": "Fulan",
    "email": "Fulan@gmail.com",
    "password": "fulan123"
  }
  ```
- **Respons yang diharapkan:**
  ```json
  {
    "message": "User registered successfully"
  }
  ```
### 🔹 **Login User**
- **Endpoint:** `POST /api/auth/login`
- **URL:** `http://localhost:5000/api/auth/login`
- **Body (JSON):**
  ```json
  {
    "email": "Fulan@gmail.com",
    "password": "fulan123"
  }
  ```
- **Respons yang diharapkan:**
  ```json
  {
    "message": "Login successfully",
    "token": "jwt_token_here"
  }
  ```
### 🔹 **Cek Database (MongoDB)**
Jika menggunakan MongoDB lokal, cek dengan membuka URL berikut di browser:
```
mongodb://localhost:27017
```

## 5. Tahapan Selanjutnya
Setelah login dan register berjalan, berikut tahapan pengembangan selanjutnya:
1. **Middleware Auth** → Melindungi endpoint dengan JWT.
2. **Refaktor Code** → Memisahkan fungsi agar lebih rapi.
3. **Tambah Endpoint** → Misalnya, update profil user atau logout.
4. **Integrasi Frontend** → Jika ingin membuat tampilan UI.