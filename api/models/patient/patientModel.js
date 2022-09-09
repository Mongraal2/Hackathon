const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const patientSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      unique: true,
      require: true,
    },
    email: {
      type: String,
    },

    gender: {
      type: String,
    },
    address: {
      type: String,
    },
    patientId: { type: Number },
    notificationsToken: { type: String },
    photo: {
      type: String,
    },
    age: { type: Number },

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    favouriteClinic: [
      {
        type: mongoose.Types.ObjectId,
        ref: "clinic",
      },
    ],
    family: [
      {
        type: mongoose.Types.ObjectId,
        ref: "familyMember",
      },
    ],
  },
  {
    timestamps: true,
  }
);

patientSchema.index({ location: "2dsphere" });

patientSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

patientSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const PatientModel = mongoose.model("patient", patientSchema);

module.exports = PatientModel;
