const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // ✅ Fix typo
    },
    email: {
      type: String,
      required: true, // ✅ Fix typo
      unique: true,
    },
    password: {
      type: String,
      required: true, // ✅ Fix typo
    },
  },
  {
    timestamps: true, // ✅ Pindahkan timestamps ke dalam opsi schema
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
