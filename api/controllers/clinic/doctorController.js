const Clinic = require("../../models/clinic/clinicModel");
const Doctor = require("../../models/clinic/doctorModel");
exports.createDoctor = async (req, res) => {
  try {
    const {
      fullName,
      designation,
      email,
      phone,
      specialist,
      department,
      experience,
      sex,
    } = req.body;
    const doctorId = (await Doctor.count()) + 1;
    const clinic = req.clinic;

    const checkEmail = await Doctor.findOne({ email });
    const checkPhone = await Doctor.findOne({ phone });
    if (!checkEmail && !checkPhone) {
      const doctor = await Doctor.create({
        fullName,
        designation,
        doctorId,
        email,
        phone,
        specialist,
        department,
        experience,
        sex,
        location: { coordinates: clinic.location.coordinates },
      });
      res.status(200).json({
        status: "success",
        message: "Doctor added successfully",
        doctor,
      });
    } else {
      res
        .status(401)
        .json({ status: "conflict", message: "Doctor already exists" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.searchDoctor = async (req, res) => {
  try {
    const query = req.params.query;
    if (query.length >= 3) {
      const doctor = await Doctor.find({
        $or: [{ fullName: { $regex: query } }, { email: { $regex: query } }],
      }).limit(20);
      res
        .status(200)
        .json({ status: "success", message: "Search Data", doctor });
    } else {
      res.status(200).json({ status: "success", message: "enter More text" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};
