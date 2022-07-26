const mongoose = require("mongoose");
const clinicOtpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    phone: { type: Number },
    otp: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const ClinicOTP = mongoose.model("ClinicOTP", clinicOtpSchema);

module.exports = ClinicOTP;
