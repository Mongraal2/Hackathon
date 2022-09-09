const express = require("express");
const router = express.Router();
const adminAuthController = require("../../controllers/admin/adminAuthController");

// const controller = require("../../controllers/Admin/controller");

router
  .route("/")
  .get(adminAuthController.logout)
  .post(adminAuthController.adminLogin);

router.route("/otpLogin").post(adminAuthController.otpLogin);
router
  .route("/getUserData")
  .get(adminAuthController.protect, adminAuthController.getUserData);

router.route("/logout").get(adminAuthController.logout);

router
  .route("/change/admin/password")
  .post(adminAuthController.protect, adminAuthController.changeAdminPasswords);

router
  .route("/create/admin")
  .post(adminAuthController.protect, adminAuthController.adminSignup);
router
  .route("/get/admin")
  .get(adminAuthController.protect, adminAuthController.getAllAdmins);

router
  .route("/delete/admin/:id")
  .delete(adminAuthController.protect, adminAuthController.deleteAdminUser);

router
  .route("/delete/admin/:id")
  .delete(adminAuthController.protect, adminAuthController.deleteAdminUser);

module.exports = router;
