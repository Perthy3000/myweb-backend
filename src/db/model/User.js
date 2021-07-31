const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: String,
    username: String,
    password: String,
    createdAt: { type: Date, default: Date.now },
  },
  { collection: 'User' }
);

module.exports = mongoose.model("user", userSchema);
