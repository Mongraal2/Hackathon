const express = require("express");
const router = express.Router();
const appointmentController = require("../../controllers/patient/appointmentController");

router.post(
  "/check/appointment/ability",
  appointmentController.checkAppointmentAbility
);
router.post("/create/appointment", appointmentController.createAppointment);
router.get(
  "/get/appointment/:patientId",
  appointmentController.getAppointmentOfPatient
);
router.post("/cancel/appointment", appointmentController.cancelAppointment);

module.exports = router;
