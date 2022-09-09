// const mongoose = require("mongoose");
const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
const appointmentSchema = new mongoose.Schema(
  {
    doctor: { type: Schema.ObjectId, ref: "doctor" },
    clinic: { type: Schema.ObjectId, ref: "clinic" },
    patient: { type: Schema.ObjectId, ref: "patient" },
    bookingFor: { type: Boolean, default: false },
    familyMember: { type: Schema.ObjectId, ref: "familyMember" },
    transactionId: { type: String },
    bookingDate: { type: String },
    appointmentId: { type: Number },
    bookingSift: { type: String, enum: ["morning", "evening"] },
    status: { type: String, enum: ["booked", "canceled"], default: "booked" },
    canceledBy: { type: String, enum: ["patient", "clinic"] },
    completed: { type: Boolean, default: false },
    meetHours: { type: Number },
    meetMinutes: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
