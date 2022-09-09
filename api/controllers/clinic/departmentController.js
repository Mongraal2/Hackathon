const fs = require("fs");
const Admin = require("../../models/admin/adminModel");
const Department = require("../../models/admin/departmentModel");
const Specialist = require("../../models/admin/specialistModel");

exports.getDepartment = async (req, res) => {
  try {
    const departments = await Department.find({ visibility: true });
    res.status(200).json({
      status: "success",
      message: "Department List",
      data: {
        departments,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.getSpecialist = async (req, res) => {
  try {
    const specialists = await Specialist.find({ visibility: true });
    res.status(200).json({
      status: "success",
      message: "Specialist List",
      data: {
        specialists,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};
