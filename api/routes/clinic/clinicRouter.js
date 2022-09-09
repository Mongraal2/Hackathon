const express = require("express");
const router = express.Router();
const clinicAuthController = require("../../controllers/clinic/clinicAuthController");

const clinicController = require("../../controllers/clinic/clinicController");
router
  .route("/updateTime")
  .post(clinicAuthController.protect, clinicController.updateClinicTiming);

router
  .route("/add/doctor")
  .post(clinicAuthController.protect, clinicController.addDoctor);

router
  .route("/edit/doctor/time/for/date")
  .post(clinicAuthController.protect, clinicController.editDoctorTimeWithDate);

router
  .route("/edit/doctor/time/for/weekly")
  .post(
    clinicAuthController.protect,
    clinicController.editDoctorTimeWithWeekly
  );

router
  .route("/cancel/appointment")
  .post(clinicAuthController.protect, clinicController.cancelAppointment);

router.post(
  "/get/appointment/date/doctor",
  clinicAuthController.protect,
  clinicController.getAppointmentOfClinicByDate
);

router.post(
  "/cancel/appointment/date/doctor",
  clinicAuthController.protect,
  clinicController.cancelAppointmentOfClinicByDate
);

router.post(
  "/completed/appointment",
  clinicAuthController.protect,
  clinicController.completedAppointment
);

router.get(
  "/get/all/doctor",
  clinicAuthController.protect,
  clinicController.getAllDoctor
);

router.get(
  "/get/appointments/from",
  // clinicAuthController.protect,
  // clinicController.filterAppointmentForExport
  clinicController.filterAppointmentForExport
);

module.exports = router;
