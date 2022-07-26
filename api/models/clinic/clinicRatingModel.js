const mongoose = require("mongoose");
const clinicRatingModelSchema = new mongoose.Schema(
  {
    rating: { type: Number },
    review: { type: String },
    patient: { type: mongoose.Types.ObjectId, ref: "patient" },
    clinic: {
      type: mongoose.Types.ObjectId,
      ref: "clinic",
    },
  },
  {
    timestamps: true,
  }
);

const ClinicRating = mongoose.model("clinicRating", clinicRatingModelSchema);

module.exports = ClinicRating;
