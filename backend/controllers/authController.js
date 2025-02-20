const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Email yang dikirim:", email);
    console.log("Password yang dikirim:", password);

    // Cek apakah email ada di database
    const user = await User.findOne({ email });
    console.log("User ditemukan di database:", user);

    if (!user) {
      return res.status(400).json({ message: "Email tidak ditemukan!" });
    }

    // Cocokkan password dengan hash di database
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Apakah password cocok?", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Password salah!" });
    }

    // Buat token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("Token yang dibuat:", token);
    res.json({ message: "Login berhasil!", token });
  } catch (error) {
    console.error("Error di loginUser:", error);
    res.status(500).json({ message: "Terjadi kesalahan!", error });
  }
};

module.exports = { loginUser };
