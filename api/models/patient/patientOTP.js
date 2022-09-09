const mongoose = require("mongoose");
const patient = require("./patientModel");

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const patientOTP = mongoose.model("otpModel", otpSchema);

module.exports = patientOTP;
