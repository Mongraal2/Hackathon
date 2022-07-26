const express = require("express");
const router = express.Router();
const {
  addFamilyMember,
  removeFamilyMember,
} = require("../../controllers/patient/patientFamilyController");

router.post("/family/addMember", addFamilyMember);
router.post("/family/removeMember", removeFamilyMember);

module.exports = router;
