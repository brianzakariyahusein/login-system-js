const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

// Endpoint Register
router.post("/register", registerUser);

// Endpoint Login
router.post("/login", loginUser);

// Endpoint Profile (Hanya bisa diakses jika login)
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Berhasil mengakses profile", user: req.user });
});

module.exports = router;
