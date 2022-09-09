const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const clinicModelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagnostic: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    approved: {
      type: Boolean,
      default: false,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    phoneNumber: {
      type: String,
    },
    clinicId: {
      type: Number,
      required: true,
      unique: true,
    },

    profilePhoto: {
      type: String,
    },
    approved: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      minlength: 8,
    },
    trimming: {
      sun: {
        morningTime: {
          from: { type: Number, default: 0 },
          till: { type: Number, default: 0 },
          close: { type: Boolean, default: true },
        },
        eveningTime: {
          from: { type: Number, default: 0 },
          till: { type: Number, default: 0 },
          close: { type: Boolean, default: true },
        },
        close: { type: Boolean, default: true },
      },
      mon: {
        morningTime: {
          from: { type: Number, default: 0 },
          till: { type: Number, default: 0 },
          close: { type: Boolean, default: true },
        },
        eveningTime: {
          from: { type: Number, default: 0 },
          till: { type: Number, default: 0 },
          close: { type: Boolean, default: true },
        },
        close: { type: Boolean, default: true },
      },
      tue: {
        morningTime: {
          from: { type: Number, default: 0 },
          till: { type: Number, default: 0 },
          close: { type: Boolean, default: true },
        },
        eveningTime: {
          from: { type: Number, default: 0 },
          till: { type: Number, default: 0 },
          close: { type: Boolean, default: true },
        },
        close: { type: Boolean, default: true },
      },
      wed: {
        morningTime: {
          from: { type: Number, default: 0 },
          till: { type: Number, default: 0 },
          close: { type: Boolean, default: true },
        },
        eveningTime: {
          from: { type: Number, default: 0 },
          till: { type: Number, default: 0 },
          close: { type: Boolean, default: true },
        },
        close: { type: Boolean, default: true },
      },
      thr: {
        morningTime: {
          from: { type: Number, default: 0 },
          till: { type: Number, default: 0 },
          close: { type: Boolean, default: true },
        },
        eveningTime: {
          from: { type: Number, default: 0 },
          till: { type: Number, default: 0 },
          close: { type: Boolean, default: true },
        },
        close: { type: Boolean, default: true },
      },
      fri: {
        morningTime: {
          from: { type: Number, default: 0 },
          till: { type: Number, default: 0 },
          close: { type: Boolean, default: true },
        },
        eveningTime: {
          from: { type: Number, default: 0 },
          till: { type: Number, default: 0 },
          close: { type: Boolean, default: true },
        },
        close: { type: Boolean, default: true },
      },
      sat: {
        morningTime: {
          from: { type: Number, default: 0 },
          till: { type: Number, default: 0 },
          close: { type: Boolean, default: true },
        },
        eveningTime: {
          from: { type: Number, default: 0 },
          till: { type: Number, default: 0 },
          close: { type: Boolean, default: true },
        },
        close: { type: Boolean, default: true },
      },
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
    address: String,
    doctor: {
      type: [{ type: mongoose.Types.ObjectId, ref: "doctor" }],
    },
    diagnosticService: {
      type: [{ type: mongoose.Types.ObjectId, ref: "diagnosticService" }],
    },

    averageRating: { type: Number },
    reviewsCount: { type: Number },
    starTotal: { Number },
    rating: [{ type: mongoose.Types.ObjectId, ref: "clinicRating" }],
  },
  {
    timestamps: true,
  }
);

clinicModelSchema.index({ location: "2dsphere" });

clinicModelSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

clinicModelSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Clinic = mongoose.model("clinic", clinicModelSchema);

module.exports = Clinic;
