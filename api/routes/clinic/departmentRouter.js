const express = require("express");
const router = express.Router();

const {
  getDepartment,
} = require("../../controllers/clinic/departmentController");

router.route("/department").get(getDepartment);

module.exports = router;
