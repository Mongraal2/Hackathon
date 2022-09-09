const express = require("express");
const router = express.Router();

const {
  getDepartment,
} = require("../../controllers/patient/departmentController");

router.route("/department").get(getDepartment);

module.exports = router;
