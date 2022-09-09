const fs = require("fs");
const Admin = require("../../models/admin/adminModel");
const Specialist = require("../../models/admin/specialistModel");
const { uploadImg, getFileStream } = require("./../../.config/s3config");

exports.getSpecialist = async (req, res) => {
  try {
    const specialists = await Specialist.find({});
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
exports.addSpecialist = async (req, res) => {
  try {
    const { name, visibility } = req.body;
    const specialist = await Specialist.create({
      name,
      visibility,
      image: "1",
    });
    res.status(201).json({
      status: "success",
      message: "Specialist Created",
      specialist,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

exports.getSpecialistImage = async (req, res) => {
  try {
    const key = req.params.key;
    const readStream = getFileStream(key);
    readStream.pipe(res);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.addSpecialistImage = async (req, res) => {
  try {
    const specialist = await Specialist.findById(req.params.id);
    const file = req.file;
    console.log(file);
    const result = await uploadImg(file);
    console.log(result.key);
    specialist.image = result.key;
    await specialist.save();
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

exports.removeSpecialist = async (req, res) => {
  try {
    const { adminId, specialistId } = req.body;
    const adminText = await Admin.findById(adminId);
    if (adminText) {
      const specialist = await Specialist.findById(specialistId);
      console.log(specialist);
      await Specialist.findOneAndDelete(specialistId);
      fs.unlinkSync(specialist.image);
      res.status(204).json({
        status: "success",
        message: "Specialist Deleted",
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
