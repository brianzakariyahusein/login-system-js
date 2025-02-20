const express = require("express");
const router = express.Router();

// Endpoint untuk regiter
router.post("/register", (req, res) => {
  res.send("Register endpoint");
});

// Endpoint untuk login
router.post("/login", (req, res) => {
  res.send("Login endpoint");
});

module.exports = router;
