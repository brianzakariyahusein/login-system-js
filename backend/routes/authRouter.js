const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const router = express.Router();
const { loginUser } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

// Endpoint untuk regiter
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Cek user sudah ada atau belum
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email sudah digunakan" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Buat user baru
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Simpan user ke database
    await user.save();

    res.status(201).json({ message: "User berhasil didaftarkan" });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server..." });
  }
});

router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Berhasil mengakses profile", user: req.user });
});

// Endpoint untuk login
router.post("/login", loginUser);
module.exports = router;
