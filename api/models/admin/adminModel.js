const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  designation: {
    type: String,
  },
  photo: {
    type: String,
  },
  autoApproved: {
    type: Boolean,
    default: true,
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
  permissions: {
    dashboard: {
      type: Boolean,
      default: false,
    },
    patient: {
      type: Boolean,
      default: false,
    },
    clinic: {
      type: Boolean,
      default: false,
    },
    doctor: {
      type: Boolean,
      default: false,
    },
    department: {
      type: Boolean,
      default: false,
    },
    payments: {
      type: Boolean,
      default: false,
    },
    commission: {
      type: Boolean,
      default: false,
    },
    userPermissions: {
      type: Boolean,
      default: false,
    },
    appointment: {
      type: Boolean,
      default: false,
    },
    report: {
      type: Boolean,
      default: false,
    },

    adminProfile: {
      type: Boolean,
      default: false,
    },
  },
});

AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

AdminSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
