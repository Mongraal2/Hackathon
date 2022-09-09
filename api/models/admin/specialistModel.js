const mongoose = require("mongoose");
const admin = require("./adminModel");

const SpecialistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    visibility: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Specialist = mongoose.model("Specialist", SpecialistSchema);

module.exports = Specialist;
