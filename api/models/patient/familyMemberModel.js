const mongoose = require("mongoose");

const familyMemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      require: true,
    },
    relationShip: {
      type: String,
    },
    phone: {
      type: String,
    },
    gender: { type: String },
    parentPatient: {
      type: mongoose.Types.ObjectId,
      ref: "patient",
    },
  },
  {
    timestamps: true,
  }
);

const FamilyMember = mongoose.model("familyMember", familyMemberSchema);

module.exports = FamilyMember;
