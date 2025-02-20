require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(express.json()); // Memungkinkan server membaca data JSON dari request body
app.use(cors()); // Mengizinkan request dari frontend ke backend
app.use(morgan("dev ")); // Menampilkan log request di terminal

// Route dasar untuk mengecek apakah server berjalan
app.get("/", (req, res) => {
  res.send("API berjalan...");
});

// Menentukan Port dari file .env atau default 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
