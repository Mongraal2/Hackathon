const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "temp/" });

const {
  getDepartment,
  addDepartment,
  removeDepartment,
  getDepartmentImage,
  addDepartmentImage,
} = require("../../controllers/admin/departmentController");

router
  .route("/department")
  .get(getDepartment)
  .post(addDepartment)
  .delete(removeDepartment);

router
  .route("/department/image/:id")
  .post(upload.single("deptImg"), addDepartmentImage);
router.route("/department/image/:key").get(getDepartmentImage);

module.exports = router;
