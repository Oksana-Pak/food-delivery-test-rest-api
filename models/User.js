const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
});

const User = model("user", userSchema);

module.exports = User;
