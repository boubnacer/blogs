const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name feild"],
    },
    email: {
      type: String,
      required: [true, "Please add email feild"],
    },
    password: {
      type: String,
      required: [true, "Please add password feild"],
    },
  },
  {
    timestamps: true, // automaticly addin createdAt and updatedAt
  }
);

module.exports = mongoose.model("User", userSchema);
