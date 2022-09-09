const mongoose = require("mongoose");
const doctorRatingModelSchema = new mongoose.Schema(
  {
    rating: { type: Number },
    review: { type: String },
    patient: { type: mongoose.Types.ObjectId, ref: "patient" },
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "doctor",
    },
  },
  {
    timestamps: true,
  }
);

const DoctorRating = mongoose.model("doctorRating", doctorRatingModelSchema);

module.exports = DoctorRating;
