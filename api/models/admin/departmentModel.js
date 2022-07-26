const mongoose = require("mongoose");
const admin = require("./adminModel");

const DepartmentSchema = new mongoose.Schema(
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

const Department = mongoose.model("Department", DepartmentSchema);

module.exports = Department;
