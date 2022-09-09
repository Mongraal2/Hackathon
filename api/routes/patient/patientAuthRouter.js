const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "temp/" });
const {
  signupWithGoogle,
  loginWithGoogle,
  uploadProfilePhoto,
  getImg,
} = require("../../controllers/patient/patientAuthController");

router.post("/signup", signupWithGoogle);
router.post("/login", loginWithGoogle);
router.post("/photo/:patientId", upload.single("file"), uploadProfilePhoto);
router.get("/photo/:key", getImg);

module.exports = router;
