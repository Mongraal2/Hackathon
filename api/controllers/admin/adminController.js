const Doctor = require("./../../models/clinic/doctorModel");
const Clinic = require("./../../models/clinic/clinicModel");
const Patient = require("../../models/patient/patientModel");
const { uploadImg, getFileStream } = require("./../../.config/s3config");
const fs = require("fs");
const Appointment = require("../../models/patient/appointmentModel");


const addDaysInCurrentDate = (days) => {
  return `${days.getFullYear()}-${days.getMonth() + 1}-${days.getDate()}`
};

exports.getAllDoctorWithLimit = async (req, res) => {
  try {
    const { limit, page } = req.params;
    const skip = page * limit - limit;
    const doctor = await Doctor.find({ block: { $eq: false } })
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);
    const totalDoctor = await Doctor.count({ block: { $eq: false } });
    res.status(200).json({
      status: "success",
      totalDoctor,
      doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.getAllBlockedDoctorWithLimit = async (req, res) => {
  try {
    const { limit, page } = req.params;
    const skip = page * limit - limit;
    const doctor = await Doctor.find({ block: { $eq: true } })
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);
    const totalDoctor = await Doctor.count({ block: { $eq: true } });
    res.status(200).json({
      status: "success",
      totalDoctor,
      doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.getAllClinicWithLimit = async (req, res) => {
  try {
    const { limit, page } = req.params;
    const skip = page * limit - limit;
    const clinic = await Clinic.find({
      block: {

        $eq: false,
      },

    })
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);
    const totalClinic = await Clinic.count({
      block: {
        $eq: false,
      },
    });
    res.status(200).json({
      status: "success",
      totalClinic,
      clinic,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.getAllBlockedClinicWithLimit = async (req, res) => {
  // console.log("akash")
  try {
    const { limit, page } = req.params;
    const skip = page * limit - limit;
    const clinic = await Clinic.find({ block: { $eq: true } })
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);
    const totalClinic = await Clinic.count({ block: { $eq: true } });
    res.status(200).json({
      status: "success",
      totalClinic,
      clinic,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.getDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await Doctor.findById(id);

    res.status(200).json({
      status: "success",

      doctor,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};
exports.getClinic = async (req, res) => {
  try {
    const { id } = req.params;
    const clinic = await Clinic.findById(id);
    res.status(200).json({
      status: "success",
      clinic,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.blockDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await Doctor.findById(id);
    doctor.block = true;
    await doctor.save();
    res.status(200).json({
      status: "success",
      message: "Doctor Block successfully",
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.unBlockDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await Doctor.findById(id);
    doctor.block = false;
    await doctor.save();
    res.status(200).json({
      status: "success",
      message: "Doctor Unblock successfully",

      doctor,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.approvedDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await Doctor.findById(id);
    doctor.approved = true;
    await doctor.save();
    res.status(200).json({
      status: "success",
      doctor,
      message: "Doctor approved successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.getAllApprovedDoctorList = async (req, res) => {
  try {
    const { limit, page } = req.params;
    const skip = page * limit - limit;
    const doctor = await Doctor.find({ approved: true })
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);
    const totalDoctor = await Doctor.count({ approved: true });
    res.status(200).json({
      status: "success",
      totalDoctor,
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.getAllUnApprovedDoctorList = async (req, res) => {
  try {
    const { limit, page } = req.params;
    const skip = page * limit - limit;
    const doctor = await Doctor.find({ approved: { $eq: false } })
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);
    const totalDoctor = await Doctor.count({ approved: false });
    res.status(200).json({
      status: "success",
      totalDoctor,
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

// unbload Clinic

exports.blockClinic = async (req, res) => {
  try {
    const { id } = req.params;

    const clinic = await Clinic.findById(id);
    clinic.block = true;
    await clinic.save();
    res.status(200).json({
      status: "success",
      message: "Clinic Block Successfully",
      clinic,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.unBlockClinic = async (req, res) => {
  try {
    const { id } = req.params;

    const clinic = await Clinic.findById(id);
    clinic.block = false;
    await clinic.save();
    res.status(200).json({
      status: "success",
      message: "Clinic Unblock Successfully",

      clinic,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.approvedClinic = async (req, res) => {
  try {
    const { id } = req.params;

    const clinic = await Clinic.findById(id);
    clinic.approved = true;
    await clinic.save();
    res.status(200).json({
      status: "success",
      message: "Clinic approved Successfully",

      clinic,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.getAllApprovedClinicList = async (req, res) => {
  try {
    const { limit, page } = req.params;
    const skip = page * limit - limit;
    const clinic = await Clinic.find({ approved: true })
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);
    const totalClinic = await Clinic.count({ approved: true });
    res.status(200).json({
      status: "success",
      totalClinic,
      clinic,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.getAllUnApprovedClinicList = async (req, res) => {
  try {
    const { limit, page } = req.params;
    const skip = page * limit - limit;
    const clinic = await Clinic.find({ approved: false })
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);
    const totalClinic = await Clinic.count({ approved: false });
    res.status(200).json({
      status: "success",
      totalClinic,
      clinic,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.getAllPatientList = async (req, res) => {
  try {
    const { limit, page } = req.params;
    const skip = page * limit - limit;
    const patient = await Patient.find()
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);
    const totalPatient = await Patient.count();
    res.status(200).json({
      status: "success",
      totalPatient,
      patient,
      message: "successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.getImg = async (req, res) => {
  try {
    const key = req.params.key;
    const readStream = getFileStream(key);
    readStream.pipe(res);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.searchPatient = async (req, res) => {
  try {
    const query = req.params.query;
    // console.log(query);
    if (query.length >= 3) {
      const patient = await Patient.find({
        $or: [{ phone: { $regex: query } }],
      }).limit(20);
      res
        .status(200)
        .json({ status: "success", message: "Search Data", patient });
    } else {
      res.status(200).json({ status: "success", message: "enter More text" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.searchDoctorByPhone = async (req, res) => {
  try {
    const query = req.params.query;
    // console.log(query);
    if (query.length >= 3) {
      const doctor = await Doctor.find({
        $or: [{ phone: { $regex: query } }],
      }).limit(20);
      res
        .status(200)
        .json({ status: "success", message: "Search Data", doctor });
    } else {
      res.status(200).json({ status: "success", message: "enter More text" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.searchClinicByName = async (req, res) => {
  try {
    const query = req.params.query;
    // console.log(query);
    if (query.length >= 3) {
      const clinic = await Clinic.find({
        $or: [{ name: { $regex: query } }],
      }).limit(20);
      res
        .status(200)
        .json({ status: "success", message: "Search Data", clinic });
    } else {
      res.status(200).json({ status: "success", message: "enter More text" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.searchClinicByPhone = async (req, res) => {
  try {
    const query = req.params.query;
    // console.log(query);
    if (query.length >= 3) {
      const clinic = await Clinic.find({
        $or: [{ phone: { $regex: query } }],
      }).limit(20);
      res
        .status(200)
        .json({ status: "success", message: "Search Data", clinic });
    } else {
      res.status(200).json({ status: "success", message: "enter More text" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.searchDoctorByName = async (req, res) => {
  try {
    const query = req.params.query;
    // console.log(query);
    if (query.length >= 3) {
      const doctor = await Doctor.find({
        $or: [{ name: { $regex: query } }],
      }).limit(20);
      res
        .status(200)
        .json({ status: "success", message: "Search Data", doctor });
    } else {
      res.status(200).json({ status: "success", message: "enter More text" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

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
      coordinates,
      sex,
    } = req.body;
    console.log(req.body.data);
    const doctorId = (await Doctor.count()) + 1;

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
        location: { coordinates },
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

exports.uploadDoctorPhoto = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.doctorId);
    console.log(req.file);
    const file = req.file;
    console.log(file);
    const result = await uploadImg(file);
    console.log(result.key);
    doctor.photo = result.key;
    await doctor.save();
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

exports.createClinic = async (req, res) => {
  try {
    const {
      name,
      userName,
      email,
      phoneNumber,
      address,
      password,
      passwordConfirm,
      coordinates,
    } = req.body;
    console.log(req.body.data);
    // console.log("akash");
    const clinicId = (await Clinic.count()) + 1;

    const checkEmail = await Clinic.findOne({ email });
    const checkPhone = await Clinic.findOne({ phoneNumber });
    if (!checkEmail && !checkPhone) {
      const clinic = await Clinic.create({
        name,
        userName,
        email,
        phoneNumber,
        clinicId,
        address,
        password,
        passwordConfirm,
        location: { coordinates },
      });
      res.status(200).json({
        status: "success",
        message: "Clinic added successfully",
        clinic,
      });
    } else {
      res
        .status(401)
        .json({ status: "conflict", message: "Clinic already exists" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.uploadClinicPhoto = async (req, res) => {
  try {
    const clinic = await Clinic.findById(req.params.clinicId);
    console.log(req.file);
    const file = req.file;
    console.log(file);
    const result = await uploadImg(file);
    console.log(result.key);
    clinic.profilePhoto = result.key;
    await clinic.save();
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

exports.updateClinicTiming = async (req, res) => {
  try {
    const { sun, mon, tue, wed, thr, fri, sat, clinicId } = req.body;
    const clinic = await Clinic.findById(clinicId);

    if (sun) {
      clinic.trimming.sun.morningTime.from = sun.morningTime.from;
      clinic.trimming.sun.morningTime.till = sun.morningTime.till;
      clinic.trimming.sun.morningTime.close = sun.morningTime.close;
      clinic.trimming.sun.eveningTime.from = sun.eveningTime.from;
      clinic.trimming.sun.eveningTime.till = sun.eveningTime.till;
      clinic.trimming.sun.eveningTime.close = sun.eveningTime.close;
      clinic.trimming.sun.close = sun.close;
    } else {
      clinic.trimming.sun.close = true;
    }
    if (mon) {
      clinic.trimming.mon.morningTime.from = mon.morningTime.from;
      clinic.trimming.mon.morningTime.till = mon.morningTime.till;
      clinic.trimming.mon.morningTime.close = mon.morningTime.close;
      clinic.trimming.mon.eveningTime.from = mon.eveningTime.from;
      clinic.trimming.mon.eveningTime.till = mon.eveningTime.till;
      clinic.trimming.mon.eveningTime.close = mon.eveningTime.close;
      clinic.trimming.mon.close = mon.close;
    } else {
      clinic.trimming.mon.close = true;
    }
    if (tue) {
      clinic.trimming.tue.morningTime.from = tue.morningTime.from;
      clinic.trimming.tue.morningTime.till = tue.morningTime.till;
      clinic.trimming.tue.morningTime.close = tue.morningTime.close;
      clinic.trimming.tue.eveningTime.from = tue.eveningTime.from;
      clinic.trimming.tue.eveningTime.till = tue.eveningTime.till;
      clinic.trimming.tue.eveningTime.close = tue.eveningTime.close;
      clinic.trimming.tue.close = tue.close;
    } else {
      clinic.trimming.tue.close = true;
    }
    if (wed) {
      clinic.trimming.wed.morningTime.from = wed.morningTime.from;
      clinic.trimming.wed.morningTime.till = wed.morningTime.till;
      clinic.trimming.wed.morningTime.close = wed.morningTime.close;
      clinic.trimming.wed.eveningTime.from = wed.eveningTime.from;
      clinic.trimming.wed.eveningTime.till = wed.eveningTime.till;
      clinic.trimming.wed.eveningTime.close = wed.eveningTime.close;
      clinic.trimming.wed.close = wed.close;
    } else {
      clinic.trimming.wed.close = true;
    }
    if (thr) {
      clinic.trimming.thr.morningTime.from = thr.morningTime.from;
      clinic.trimming.thr.morningTime.till = thr.morningTime.till;
      clinic.trimming.thr.morningTime.close = thr.morningTime.close;
      clinic.trimming.thr.eveningTime.from = thr.eveningTime.from;
      clinic.trimming.thr.eveningTime.till = thr.eveningTime.till;
      clinic.trimming.thr.eveningTime.close = thr.eveningTime.close;
      clinic.trimming.thr.close = thr.close;
    } else {
      clinic.trimming.thr.close = true;
    }
    if (fri) {
      clinic.trimming.fri.morningTime.from = fri.morningTime.from;
      clinic.trimming.fri.morningTime.till = fri.morningTime.till;
      clinic.trimming.fri.morningTime.close = fri.morningTime.close;
      clinic.trimming.fri.eveningTime.from = fri.eveningTime.from;
      clinic.trimming.fri.eveningTime.till = fri.eveningTime.till;
      clinic.trimming.fri.eveningTime.close = fri.eveningTime.close;
      clinic.trimming.fri.close = fri.close;
    } else {
      clinic.trimming.fri.close = true;
    }
    if (sat) {
      clinic.trimming.sat.morningTime.from = sat.morningTime.from;
      clinic.trimming.sat.morningTime.till = sat.morningTime.till;
      clinic.trimming.sat.morningTime.close = sat.morningTime.close;
      clinic.trimming.sat.eveningTime.from = sat.eveningTime.from;
      clinic.trimming.sat.eveningTime.till = sat.eveningTime.till;
      clinic.trimming.sat.eveningTime.close = sat.eveningTime.close;
      clinic.trimming.sat.close = sat.close;
    } else {
      clinic.trimming.sat.close = true;
    }
    await clinic.save();
    res
      .status(200)
      .json({ status: "success", message: "successfully updated", clinic });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.addDoctor = async (req, res) => {
  try {
    const { availability, availabilityBefore, asPer, doctorId, clinicId } =
      req.body;
    if (asPer === "weekly") {
      const { sun, mon, tue, wed, thr, fri, sat } = req.body;
      const doctor = await Doctor.findById(doctorId);
      if (doctor.approved) {
        const clinic = await Clinic.findById(clinicId);

        clinic.doctor.push(doctor._id);
        await clinic.save();
        let sunday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let monday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let tuesday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let wednesday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let thursday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let friday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let saturday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        if (sun) {
          sunday.morningTime.from = sun.morningTime.from;
          sunday.morningTime.till = sun.morningTime.till;
          sunday.morningTime.close = sun.morningTime.close;
          sunday.eveningTime.from = sun.eveningTime.from;
          sunday.eveningTime.till = sun.eveningTime.till;
          sunday.eveningTime.close = sun.eveningTime.close;
          sunday.close = sun.close;
        } else {
          sunday.close = true;
        }
        if (mon) {
          monday.morningTime.from = mon.morningTime.from;
          monday.morningTime.till = mon.morningTime.till;
          monday.morningTime.close = mon.morningTime.close;
          monday.eveningTime.from = mon.eveningTime.from;
          monday.eveningTime.till = mon.eveningTime.till;
          monday.eveningTime.close = mon.eveningTime.close;
          monday.close = mon.close;
        } else {
          monday.close = true;
        }
        if (tue) {
          tuesday.morningTime.from = tue.morningTime.from;
          tuesday.morningTime.till = tue.morningTime.till;
          tuesday.morningTime.close = tue.morningTime.close;
          tuesday.eveningTime.from = tue.eveningTime.from;
          tuesday.eveningTime.till = tue.eveningTime.till;
          tuesday.eveningTime.close = tue.eveningTime.close;
          tuesday.close = tue.close;
        } else {
          tuesday.close = true;
        }
        if (wed) {
          wednesday.morningTime.from = wed.morningTime.from;
          wednesday.morningTime.till = wed.morningTime.till;
          wednesday.morningTime.close = wed.morningTime.close;
          wednesday.eveningTime.from = wed.eveningTime.from;
          wednesday.eveningTime.till = wed.eveningTime.till;
          wednesday.eveningTime.close = wed.eveningTime.close;
          wednesday.close = wed.close;
        } else {
          wednesday.close = true;
        }
        if (thr) {
          thursday.morningTime.from = thr.morningTime.from;
          thursday.morningTime.till = thr.morningTime.till;
          thursday.morningTime.close = thr.morningTime.close;
          thursday.eveningTime.from = thr.eveningTime.from;
          thursday.eveningTime.till = thr.eveningTime.till;
          thursday.eveningTime.close = thr.eveningTime.close;
          thursday.close = thr.close;
        } else {
          thursday.close = true;
        }
        if (fri) {
          friday.morningTime.from = fri.morningTime.from;
          friday.morningTime.till = fri.morningTime.till;
          friday.morningTime.close = fri.morningTime.close;
          friday.eveningTime.from = fri.eveningTime.from;
          friday.eveningTime.till = fri.eveningTime.till;
          friday.eveningTime.close = fri.eveningTime.close;
          friday.close = fri.close;
        } else {
          friday.close = true;
        }

        if (sat) {
          saturday.morningTime.from = sat.morningTime.from;
          saturday.morningTime.till = sat.morningTime.till;
          saturday.morningTime.close = sat.morningTime.close;
          saturday.eveningTime.from = sat.eveningTime.from;
          saturday.eveningTime.till = sat.eveningTime.till;
          saturday.eveningTime.close = sat.eveningTime.close;
          saturday.close = sat.close;
        } else {
          saturday.close = true;
        }

        doctor.clinic.push({
          clinic: clinicId,
          availability,
          availabilityBefore,
          asPer: "weekly",

          asPerWeekly: {
            sun: sunday,
            mon: monday,
            tue: tuesday,
            wed: wednesday,
            thr: thursday,
            fri: friday,
            sat: saturday,
          },
        });
        await doctor.save();

        res
          .status(200)
          .json({ status: "success", message: "Doctor added successfully" });
      } else {
        res.status(401).json({
          status: "unauthorized",
          message: "Doctor is not verified By admin",
        });
      }
    } else if (asPer === "date") {
      const { date, times } = req.body;
      const doctor = await Doctor.findById(doctorId);
      if (doctor.approved) {
        const clinic = await Clinic.findById(clinicId);
        clinic.doctor.push(doctor._id);
        await clinic.save();
        let asDate = {
          date: date,
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: false,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: false,
          },
        };
        if (times) {
          asDate.morningTime.slot = times.morningTime.slot;
          asDate.morningTime.from = times.morningTime.from;
          asDate.morningTime.till = times.morningTime.till;
          asDate.morningTime.close = times.morningTime.close;
          asDate.eveningTime.from = times.eveningTime.from;
          asDate.eveningTime.slot = times.eveningTime.slot;
          asDate.eveningTime.till = times.eveningTime.till;
          asDate.eveningTime.close = times.eveningTime.close;
        } else {
        }
        doctor.clinic.push({
          clinic: clinicId,
          availability,
          availabilityBefore,
          asPer: "date",
          asPerDate: [{ date: asDate }],
        });
        await doctor.save();

        res
          .status(200)
          .json({ status: "success", message: "Doctor added successfully" });
      } else {
        res.status(401).json({
          status: "unauthorized",
          message: "Doctor is not verified By admin",
        });
      }
    } else {
      res.status(400).json({ status: "invalid", message: "invalid body data" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.editDoctorTimeWithDate = async (req, res) => {
  try {
    let updated = false;
    const { doctorId, clinicId, availability, availabilityBefore, asPer, times } =
      req.body;
    const date = addDaysInCurrentDate(new Date(req.body.date));
    // console.log(date);
    const doctor = await Doctor.findById(doctorId);
    // console.log(req.body);
    const clinic = await Clinic.findById(clinicId)
    for (let i = 0; i < doctor.clinic.length; i++) {
      // console.log("first");
      // change with some
      const doctorElement = doctor.clinic[i];

      if (clinic._id.equals(doctorElement.clinic) && asPer === "date") {
        doctorElement.availability = availability;
        doctorElement.availabilityBefore = availabilityBefore;
        doctorElement.asPer = asPer;
        // console.log("second");
        if (doctorElement.asPerDate.some((e) => e.date.date === date)) {
          updated = true;
        }
        if (!(doctorElement.asPerDate.length === 0)) {
          doctorElement.asPerDate.some((el) => {
            if (el.date.date === date) {
              el.date.morningTime = times.morningTime;
              el.date.eveningTime = times.eveningTime;
              // console.log("date matched");
              updated = true;
            } else {
            }

            if (!updated) {
              let asDate = {
                date: {
                  date: date,
                  morningTime: times.morningTime,
                  eveningTime: times.eveningTime,
                },
              };
              // console.log("third");
              doctorElement.asPerDate.push(asDate);
              updated = true;
            } else {
            }
          });
        } else {
          // console.log("firstName");
          let asDate = {
            date: {
              date: date,
              morningTime: times.morningTime,
              eveningTime: times.eveningTime,
            },
          };
          doctorElement.asPerDate.push(asDate);
        }
      } else {
      }
      doctorElement.asPerDate.forEach((element) => {
        // console.log(element);
      });
    }
    await doctor.save();
    res
      .status(200)
      .json({ status: "success", message: "successfully updated", doctor, doctorId, clinicId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.editDoctorTimeWithWeekly = async (req, res) => {
  try {
    const {
      doctorId,
      clinicId,
      availability,
      availabilityBefore,
      asPer,
      sun,
      mon,
      tue,
      wed,
      thr,
      fri,
      sat,
    } = req.body;

    const doctor = await Doctor.findById(doctorId);

    const clinic = await Clinic.findById(clinicId);
    // console.log(clinic);
    for (let i = 0; i < doctor.clinic.length; i++) {
      const doctorElement = doctor.clinic[i];
      if (clinic._id.equals(doctorElement.clinic) && asPer === "weekly") {
        doctorElement.availability = availability;
        doctorElement.availabilityBefore = availabilityBefore;
        doctorElement.asPer = asPer;

        let sunday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let monday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let tuesday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let wednesday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let thursday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let friday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        let saturday = {
          morningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          eveningTime: {
            slot: 0,
            from: 0,
            till: 0,
            close: true,
          },
          close: true,
        };
        if (sun) {
          sunday.morningTime.slot = sun.morningTime.slot;
          sunday.morningTime.from = sun.morningTime.from;
          sunday.morningTime.till = sun.morningTime.till;
          sunday.morningTime.close = sun.morningTime.close;
          sunday.eveningTime.slot = sun.eveningTime.slot;
          sunday.eveningTime.from = sun.eveningTime.from;
          sunday.eveningTime.till = sun.eveningTime.till;
          sunday.eveningTime.close = sun.eveningTime.close;
          sunday.close = sun.close;
        } else {
          sunday.close = true;
        }
        if (mon) {
          monday.morningTime.from = mon.morningTime.from;
          monday.morningTime.slot = mon.morningTime.slot;
          monday.morningTime.till = mon.morningTime.till;
          monday.morningTime.close = mon.morningTime.close;
          monday.eveningTime.from = mon.eveningTime.from;
          monday.eveningTime.till = mon.eveningTime.till;
          monday.eveningTime.slot = mon.eveningTime.slot;
          monday.eveningTime.close = mon.eveningTime.close;
          monday.close = mon.close;
        } else {
          monday.close = true;
        }
        if (tue) {
          tuesday.morningTime.from = tue.morningTime.from;
          tuesday.morningTime.slot = tue.morningTime.slot;
          tuesday.morningTime.till = tue.morningTime.till;
          tuesday.morningTime.close = tue.morningTime.close;
          tuesday.eveningTime.from = tue.eveningTime.from;
          tuesday.eveningTime.slot = tue.eveningTime.slot;
          tuesday.eveningTime.till = tue.eveningTime.till;
          tuesday.eveningTime.close = tue.eveningTime.close;
          tuesday.close = tue.close;
        } else {
          tuesday.close = true;
        }
        if (wed) {
          wednesday.morningTime.from = wed.morningTime.from;
          wednesday.morningTime.till = wed.morningTime.till;
          wednesday.morningTime.slot = wed.morningTime.slot;
          wednesday.morningTime.close = wed.morningTime.close;
          wednesday.eveningTime.from = wed.eveningTime.from;
          wednesday.eveningTime.till = wed.eveningTime.till;
          wednesday.eveningTime.slot = wed.eveningTime.slot;
          wednesday.eveningTime.close = wed.eveningTime.close;
          wednesday.close = wed.close;
        } else {
          wednesday.close = true;
        }
        if (thr) {
          thursday.morningTime.from = thr.morningTime.from;
          thursday.morningTime.till = thr.morningTime.till;
          thursday.morningTime.slot = thr.morningTime.slot;
          thursday.morningTime.close = thr.morningTime.close;
          thursday.eveningTime.from = thr.eveningTime.from;

          thursday.eveningTime.till = thr.eveningTime.till;
          thursday.eveningTime.slot = thr.eveningTime.slot;
          thursday.eveningTime.close = thr.eveningTime.close;
          thursday.close = thr.close;
        } else {
          thursday.close = true;
        }
        if (fri) {
          friday.morningTime.from = fri.morningTime.from;
          friday.morningTime.till = fri.morningTime.till;
          friday.morningTime.slot = fri.morningTime.slot;
          friday.morningTime.close = fri.morningTime.close;
          friday.eveningTime.from = fri.eveningTime.from;
          friday.eveningTime.till = fri.eveningTime.till;
          friday.eveningTime.slot = fri.eveningTime.slot;
          friday.eveningTime.close = fri.eveningTime.close;
          friday.close = fri.close;
        } else {
          friday.close = true;
        }

        if (sat) {
          saturday.morningTime.from = sat.morningTime.from;
          saturday.morningTime.till = sat.morningTime.till;
          saturday.morningTime.slot = sat.morningTime.slot;
          saturday.morningTime.close = sat.morningTime.close;
          saturday.eveningTime.from = sat.eveningTime.from;
          saturday.eveningTime.till = sat.eveningTime.till;
          saturday.eveningTime.slot = sat.eveningTime.slot;
          saturday.eveningTime.close = sat.eveningTime.close;
          saturday.close = sat.close;
        } else {
          saturday.close = true;
        }

        doctorElement.asPerWeekly = {
          sun: sunday,
          mon: monday,
          tue: tuesday,
          wed: wednesday,
          thr: thursday,
          fri: friday,
          sat: saturday,
        };
      } else {
      }
      doctorElement.asPerDate.forEach((element) => {
        // console.log(element);
      });
    }
    await doctor.save();
    res
      .status(200)
      .json({ status: "success", message: "successfully updated", doctor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

//akash
exports.getCount = async (req, res) => {
  try {
    const clinicCount = await Clinic.count();
    const doctorCount = await Doctor.count();
    const patientCount = await Patient.count();

    res.status(200).json({ clinicCount, doctorCount, patientCount });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.getDoctorOfClinic = async (req, res) => {
  try {
    const { doctorArray } = req.body;

    const doctor = await Doctor.find({
      _id: { $in: doctorArray },
    });

    res
      .status(200)
      .json({ status: "success", message: "successfully", doctor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "error" });
  }
};

exports.getDoctorTimingByWeekly = async (req, res) => {
  try {
    const { doctorId, clinicId } = req.body;
    console.log(req.body);
    const doctor = await Doctor.findById(doctorId);
    let asPerWeekly;
    const clinic = await Clinic.findById(clinicId);
    for (let i = 0; i < doctor.clinic.length; i++) {
      const doctorElement = doctor.clinic[i];
      if (clinic._id.equals(doctorElement.clinic)) {
        asPerWeekly = doctorElement.asPerWeekly;
      }
    }

    if (!(asPerWeekly === "")) {
      res
        .status(200)
        .json({ status: "success", message: "Successfully", asPerWeekly });
    } else {
      res.status(404).json({
        status: "not found",
        message: "Doctor is not added to clinic ",
      });
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};


exports.getDoctorTimingAsPerDate = async (req, res) => {
  try {
    const { doctorId, clinicId } = req.body;
    console.log(req.body);
    const doctor = await Doctor.findById(doctorId);
    let asPerDate;
    const clinic = await Clinic.findById(clinicId);
    for (let i = 0; i < doctor.clinic.length; i++) {
      const doctorElement = doctor.clinic[i];
      if (clinic._id.equals(doctorElement.clinic)) {
        asPerDate = doctorElement.asPerDate;
      }
    }

    if (!(asPerDate === "")) {
      res
        .status(200)
        .json({ status: "success", message: "Successfully", asPerDate });
    } else {
      res.status(404).json({
        status: "not found",
        message: "Doctor is not added to clinic ",
      });
    }
  } catch (error) {

    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};


exports.getAppointmentOfClinicByDate = async (req, res) => {
  try {
    const { doctorId, clinicId } = req.body;
    const fullDate = new Date(req.body.date);
    const date = `${fullDate.getFullYear()}-${fullDate.getMonth() + 1
      }-${fullDate.getDate()}`;
    const doctor = await Doctor.findById(doctorId);
    const clinic = await Clinic.findById(clinicId);
    const appointment = await Appointment.find({
      client: clinic._id,
      bookingDate: { $eq: date },
      doctor: doctor._id,
    })
      .populate({ path: "doctor", select: "fullName" })
      .populate({ path: "patient", select: "fullName" })
      .populate({ path: "clinic", select: "name" });

    res
      .status(200)
      .json({ status: "success", message: "SuccessFull", appointment });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.cancelAppointmentOfClinicByDate = async (req, res) => {
  try {
    const { doctorId, clinicId } = req.body;
    const fullDate = new Date(req.body.date);
    const date = `${fullDate.getFullYear()}-${fullDate.getMonth() + 1
      }-${fullDate.getDate()}`;
    const doctor = await Doctor.findById(doctorId);
    const clinic = await Clinic.findById(clinicId);

    const newAppointment = await Appointment.updateMany(
      {
        client: clinic._id,
        date: date,
        doctor: doctor._id,
        completed: false,
      },
      { status: "canceled" }
    );
    res
      .status(200)
      .json({ status: "success", message: "SuccessFull", newAppointment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

