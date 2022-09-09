const express = require("express");
const router = express.Router();
const patientController = require("../../controllers/patient/patientController");

router.post("/doctor/rating", patientController.doctorRating);
router.post("/clinic/rating", patientController.clinicRating);
router.post("/favouriteClinic", patientController.addFavouriteClinic);
router.get(
  "/getAllFavouriteClinics/:patientId",
  patientController.getAllFavouriteClinics
);
router.get("/doctor/top/:patientId", patientController.getTopDoctor);
router.get("/clinic/top/:patientId", patientController.getTopClinic);
router.get(
  "/clinic/near/:patientId/:limit/:page",
  patientController.getNearClinic
);

module.exports = router;
