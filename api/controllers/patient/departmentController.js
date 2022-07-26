const fs = require("fs");
const Admin = require("../../models/admin/adminModel");
const Department = require("../../models/admin/departmentModel");

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
