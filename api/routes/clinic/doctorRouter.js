const express = require("express");
const router = express.Router();
const doctorController = require("../../controllers/clinic/doctorController");
const clinicAuthController = require("../../controllers/clinic/clinicAuthController");

router
  .route("/create/doctor")
  .post(clinicAuthController.protect, doctorController.createDoctor);

router
  .route("/search/doctor/:query")
  .get(clinicAuthController.protect, doctorController.searchDoctor);

module.exports = router;
