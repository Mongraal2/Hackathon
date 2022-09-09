const express = require("express");
const router = express.Router();
const clinicAuthController = require("../../controllers/clinic/clinicAuthController");
const multer = require("multer");
const upload = multer({ dest: "temp/" });

router.route("/signup").post(clinicAuthController.signUpAndSendOTP);
router.route("/verify/email").post(clinicAuthController.verifyEmail);
router.route("/resend/Email/Otp").post(clinicAuthController.resendEmailOtp);
router
  .route("/upload/profile/:clinicId")
  .post(upload.single("file"), clinicAuthController.uploadProfilePhoto);
router.get("/photo/:key", clinicAuthController.getImg);

router
  .route("/updateProfile")
  .post(clinicAuthController.protect, clinicAuthController.updateClinicProfile);
router.route("/login").post(clinicAuthController.signIn);

module.exports = router;
