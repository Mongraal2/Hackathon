const Patient = require("../../models/patient/patientModel");
const appointment = require("../../models/patient/appointmentModel");
const FamilyMember = require("../../models/patient/familyMemberModel");

exports.addFamilyMember = async (req, res) => {
  try {
    const { patientId, name, age, phone, gender, relationShip } = req.body;
    const parentPatient = patientId;
    const newMember = await FamilyMember.create({
      name,
      age,
      phone,
      gender,
      parentPatient,
      relationShip,
    });
    const patientText = await Patient.findById(patientId);
    patientText.family.push(newMember._id);
    console.log(patientText);
    await patientText.save();
    res.status(201).json({
      status: "success",
      message: "Family Member Created",
      data: newMember,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.removeFamilyMember = async (req, res) => {
  try {
    const { patientId, familyMemberId } = req.body;
    const patient = await Patient.findById(patientId);
    const familyMember = await FamilyMember.findById(familyMemberId);
    if (patient.family.length !== 0) {
      const memberIndex = patient.family.indexOf(familyMemberId);
      if (memberIndex < 0) {
        res.status(201).json({
          status: "Success",
          message: "No Family Member Found By Id",
        });
      } else {
        await FamilyMember.findByIdAndRemove(familyMemberId);
        patient.family.splice(memberIndex, 1);
        await patient.save();
        res.status(201).json({
          status: "Success",
          message: "Family Member Removed",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};
