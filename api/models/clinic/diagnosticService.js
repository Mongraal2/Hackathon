const mongoose = require("mongoose");

const diagnosticServiceModelSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },

    photo: { type: String, default: "" },

    clinic: [
      {
        clinic: {
          type: mongoose.Types.ObjectId,
          ref: "clinic",
        },
        availability: { type: Boolean, default: false },
        availabilityBefore: { type: Number, default: 0 },
        asPer: {
          type: String,
          default: "weekly",
          required: true,
        },
        asPerWeekly: {
          sun: {
            morningTime: {
              slot: { type: Number },
              from: { type: Number },
              till: { type: Number },
              close: { type: Boolean },
            },
            eveningTime: {
              slot: { type: Number },
              from: { type: Number },
              till: { type: Number },
              close: { type: Boolean },
            },
            close: { type: Boolean },
          },
          mon: {
            morningTime: {
              slot: { type: Number },
              from: { type: Number },
              till: { type: Number },
              close: { type: Boolean },
            },
            eveningTime: {
              slot: { type: Number },
              from: { type: Number },
              till: { type: Number },
              close: { type: Boolean },
            },
            close: { type: Boolean },
          },
          tue: {
            morningTime: {
              slot: { type: Number },
              from: { type: Number },
              till: { type: Number },
              close: { type: Boolean },
            },
            eveningTime: {
              slot: { type: Number },
              from: { type: Number },
              till: { type: Number },
              close: { type: Boolean },
            },
            close: { type: Boolean },
          },
          wed: {
            morningTime: {
              slot: { type: Number },
              from: { type: Number },
              till: { type: Number },
              close: { type: Boolean },
            },
            eveningTime: {
              slot: { type: Number },
              from: { type: Number },
              till: { type: Number },
              close: { type: Boolean },
            },
            close: { type: Boolean },
          },
          thr: {
            morningTime: {
              slot: { type: Number },
              from: { type: Number },
              till: { type: Number },
              close: { type: Boolean },
            },
            eveningTime: {
              slot: { type: Number },
              from: { type: Number },
              till: { type: Number },
              close: { type: Boolean },
            },
            close: { type: Boolean },
          },
          fri: {
            morningTime: {
              slot: { type: Number },
              from: { type: Number },
              till: { type: Number },
              close: { type: Boolean },
            },
            eveningTime: {
              slot: { type: Number },
              from: { type: Number },
              till: { type: Number },
              close: { type: Boolean },
            },
            close: { type: Boolean },
          },
          sat: {
            morningTime: {
              slot: { type: Number },
              from: { type: Number },
              till: { type: Number },
              close: { type: Boolean },
            },
            eveningTime: {
              slot: { type: Number },
              from: { type: Number },
              till: { type: Number },
              close: { type: Boolean },
            },
            close: { type: Boolean },
          },
        },
        asPerDate: [
          {
            date: {
              date: { type: String },
              morningTime: {
                slot: { type: Number },
                from: { type: Number },
                till: { type: Number },
                close: { type: Boolean },
              },
              eveningTime: {
                slot: { type: Number },
                from: { type: Number },
                till: { type: Number },
                close: { type: Boolean },
              },
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);
diagnosticServiceModelSchema.index({ location: "2dsphere" });
const DiagnosticService = mongoose.model(
  "diagnosticService",
  diagnosticServiceModelSchema
);

module.exports = DiagnosticService;
