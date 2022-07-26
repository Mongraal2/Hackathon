const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "temp/" });

const {
  getSpecialist,
  addSpecialist,
  removeSpecialist,
  getSpecialistImage,
  addSpecialistImage,
} = require("../../controllers/admin/specialistController");

router
  .route("/specialist")
  .get(getSpecialist)
  .post(addSpecialist)
  .delete(removeSpecialist);

router
  .route("/specialist/image/:id")
  .post(upload.single("speImg"), addSpecialistImage);
router.route("/specialist/image/:key").get(getSpecialistImage);

module.exports = router;
