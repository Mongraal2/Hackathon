const fs = require("fs");
const Admin = require("../../models/admin/adminModel");
const Department = require("../../models/admin/departmentModel");
const { uploadImg, getFileStream } = require("./../../.config/s3config");

exports.getDepartment = async (req, res) => {
  try {
    const departments = await Department.find({});
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
exports.addDepartment = async (req, res) => {
  try {
    const { name, visibility } = req.body;
    const department = await Department.create({
      name,
      visibility,
      image: "1",
    });
    res.status(201).json({
      status: "success",
      message: "Department Created",
      department,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};
exports.getDepartmentImage = async (req, res) => {
  try {
    const key = req.params.key;
    const readStream = getFileStream(key);
    readStream.pipe(res);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.addDepartmentImage = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    const file = req.file;
    console.log(file);
    const result = await uploadImg(file);
    console.log(result.key);
    department.image = result.key;
    await department.save();
    fs.unlinkSync(file.path);
    res.status(200).json({
      status: "status",
      message: "Image uploaded successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.removeDepartment = async (req, res) => {
  try {
    const { adminId, deptId } = req.body;
    const adminText = await Admin.findById(adminId);
    if (adminText) {
      const dept = await Department.findById(deptId);
      console.log(dept);
      await Department.findOneAndDelete(deptId);
      fs.unlinkSync(dept.image);
      res.status(204).json({
        status: "success",
        message: "Department Deleted",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "Admin ID Required",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};
