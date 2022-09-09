const DoctorRating = require("../../models/clinic/doctorRatingModel");
const ClinicRating = require("../../models/clinic/clinicRatingModel");
const Doctor = require("../../models/clinic/doctorModel");
const Clinic = require("../../models/clinic/clinicModel");
const Patient = require("../../models/patient/patientModel");
exports.doctorRating = async (req, res) => {
  try {
    const { doctorId, patientId, rating, review } = req.body;
    const doctor = await Doctor.findById(doctorId);
    const patient = await Patient.findById(patientId);
    if (review) {
      const doctorRating = await DoctorRating.create({
        doctor: doctor._id,
        patient: patient._id,
        rating,
        review,
      });
      doctor.rating.push(doctorRating._id);

      let reviewsCount = doctor.rating.length;
      let totalRatingPoint = 0;
      const doctorRatingArr = await DoctorRating.find({
        _id: { $in: doctor.rating },
      });

      for (var i = 0; i < doctorRatingArr.length; i++) {
        const element = doctorRatingArr[i];
        totalRatingPoint = element.rating + totalRatingPoint;
      }
      doctor.reviewsCount = reviewsCount;
      doctor.averageRating = totalRatingPoint / doctor.rating.length;
      await doctor.save();
      res.status(200).json({
        status: "Success",
        message: "Successfully created rating",
        doctorRating,
      });
    } else {
      const doctorRating = await DoctorRating.create({
        doctor: doctorId,
        patient: patientId,
        rating,
      });
      let reviewsCount = doctor.rating.length;
      let totalRatingPoint = 0;
      const doctorRatingArr = await DoctorRating.find({
        _id: { $in: doctor.rating },
      });

      for (var i = 0; i < doctorRatingArr.length; i++) {
        const element = doctorRatingArr[i];
        totalRatingPoint = element.rating + totalRatingPoint;
      }
      doctor.reviewsCount = reviewsCount;
      doctor.averageRating = totalRatingPoint / doctor.rating.length;
      await doctor.save();
      res.status(200).json({
        status: "Success",
        message: "Successfully created rating",
        doctorRating,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.addFavouriteClinic = async (req, res) => {
  try {
    const { patientId, clinicId } = req.body;
    const clinic = await Clinic.findById(clinicId);
    if (clinic) {
      const patient = await Patient.findById(patientId);
      if (patient.favouriteClinic.includes(clinicId)) {
        patient.favouriteClinic.remove(clinicId);
        await patient.save();
        res.status(200).json({
          status: "Success",
          message: "Clinic removed from favourites",
        });
      } else {
        patient.favouriteClinic.push(clinicId);
        await patient.save();
        res
          .status(200)
          .json({ status: "Success", message: "Clinic added to favourites" });
      }
    } else {
      res
        .status(404)
        .json({ status: "Not Found", message: "Clinic not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.getAllFavouriteClinics = async (req, res) => {
  try {
    const { patientId } = req.params;
    const patient = await Patient.findById(patientId);

    const data = await Clinic.find({
      _id: { $in: patient.favouriteClinic },
    });
    res.status(200).json({
      status: "Success",
      message: "Successfully fetched all favorites",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.getTopDoctor = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.patientId);
    const doctors = await Doctor.find({
      location: {
        $near: {
          $maxDistance: 40075000000,
          $geometry: {
            type: "Point",
            coordinates: patient.location.coordinates,
          },
        },
      },

      reviewsCount: { $gt: 0 },
    })
      .sort({ averageRating: -1 })
      .limit(20);

    res
      .status(200)
      .json({ status: "success", message: "successFully ", doctors });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.getTopClinic = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.patientId);
    const clinic = await Clinic.find({
      location: {
        $near: {
          $maxDistance: 40075000000000000,
          $geometry: {
            type: "Point",
            coordinates: patient.location.coordinates,
          },
        },
      },

      reviewsCount: { $gt: 0 },
    })
      .sort({ averageRating: -1 })
      .limit(20);

    res
      .status(200)
      .json({ status: "success", message: "successFully ", clinic });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.getNearClinic = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.patientId);
    const { limit, page } = req.params;
    const skip = page * limit - limit;
    const clinic = await Clinic.find({
      location: {
        $near: {
          $maxDistance: 40075000000000000,
          $geometry: {
            type: "Point",
            coordinates: patient.location.coordinates,
          },
        },
      },
    })

      .limit(limit)
      .skip(skip);

    res
      .status(200)
      .json({ status: "success", message: "successFully ", clinic });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.clinicRating = async (req, res) => {
  try {
    const { clinicId, patientId, rating, review } = req.body;
    const clinic = await Clinic.findById(clinicId);
    const patient = await Patient.findById(patientId);
    if (review) {
      const clinicRating = await ClinicRating.create({
        clinic: clinic._id,
        patient: patient._id,
        rating,
        review,
      });
      clinic.rating.push(clinicRating._id);

      let reviewsCount = clinic.rating.length;
      let totalRatingPoint = 0;
      const clinicRatingArr = await ClinicRating.find({
        _id: { $in: clinic.rating },
      });

      for (var i = 0; i < clinicRatingArr.length; i++) {
        const element = clinicRatingArr[i];
        totalRatingPoint = element.rating + totalRatingPoint;
      }
      clinic.reviewsCount = reviewsCount;
      clinic.averageRating = totalRatingPoint / clinic.rating.length;
      await clinic.save();
      res.status(200).json({
        status: "Success",
        message: "Successfully created rating",
        clinicRating,
      });
    } else {
      const clinicRating = await ClinicRating.create({
        clinic: clinic.Id,
        patient: patientId,
        rating,
      });
      let reviewsCount = clinic.rating.length;
      let totalRatingPoint = 0;
      const clinicRatingArr = await ClinicRating.find({
        _id: { $in: clinic.rating },
      });

      for (var i = 0; i < clinicRatingArr.length; i++) {
        const element = clinicRatingArr[i];
        totalRatingPoint = element.rating + totalRatingPoint;
      }
      clinic.reviewsCount = reviewsCount;
      clinic.averageRating = totalRatingPoint / clinic.rating.length;
      await clinic.save();
      res.status(200).json({
        status: "Success",
        message: "Successfully created rating",
        clinicRating,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};
