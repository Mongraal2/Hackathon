const mongoose = require("mongoose");

const doctorModelSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    block: { type: Boolean, default: false },
    photo: { type: String, default: "" },
    doctorId: {
      type: Number,
      unique: true,
    },

    designation: {
      Types: String,
    },
    approved: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    specialist: {
      type: String,
    },
    department: {
      type: String,
    },
    experience: {
      type: String,
    },
    sex: {
      type: String,
    },
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
    // rating
    averageRating: { type: Number },
    reviewsCount: { type: Number },
    starTotal: { Number },
    rating: [{ type: mongoose.Types.ObjectId, ref: "doctorRating" }],
  },
  {
    timestamps: true,
  }
);
doctorModelSchema.index({ location: "2dsphere" });
const Doctor = mongoose.model("doctor", doctorModelSchema);

module.exports = Doctor;
