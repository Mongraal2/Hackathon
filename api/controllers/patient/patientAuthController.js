require("dotenv").config();
const Patient = require("../../models/patient/patientModel");
const PatientOTP = require("../../models/patient/patientOTP");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const middleware = require("../../middleware/index");
const { verifyFirebaseToken } = require("./fireBaseAuth");
const { uploadImg, getFileStream } = require("./../../.config/s3config");
const fs = require("fs");
const path = require("path");

// const { getAuth } = require("firebase/auth");
// const auth = getAuth();
// auth.settings.appVerificationDisabledForTesting = true;

// var phoneNumber = "+16505554567";
// var testVerificationCode = "123456";

// const signToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRES_IN,
//   });
// };

// const createSendToken = (user, statusCode, res, msg) => {
//   const token = signToken(user._id);
//   // const cookieOptions = {
//   //   expires: new Date(
//   //     Date.now() + process.env.JWT_COOKIES_EXPIRES_IN * 24 * 62 * 62 * 1000
//   //   ),
//   //   httpOnly: true,
//   // };

//   if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
//   user.password = undefined;
//   res.cookie("bearerToken", token, cookieOptions);
//   res.status(statusCode).json({
//     status: "success",
//     message: `${msg}`,
//     data: {
//       user,
//       token,
//     },
//   });
// };

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
const createSendToken = (user) => {
  return (token = signToken(user._id));
};

exports.loginWithGoogle = async (req, res) => {
  try {
    const { authToken } = req.body;
    const tokenValue = await verifyFirebaseToken(authToken);
    console.log(tokenValue);
    if (tokenValue.message) {
      res
        .status(401)
        .json({ status: "unauthorized", message: tokenValue.message });
    } else {
      if (tokenValue.firebase.sign_in_provider === "facebook.com") {
        console.log("tokenValue.email");
        const patient = await Patient.findOne({ email: tokenValue.email });
        if (patient) {
          const token = await createSendToken(patient._id);
          patient.password = undefined;
          res.status(200).json({
            status: "success",
            message: "successFully",
            patient,
            token,
          });
        } else {
          res.status(404).json({
            status: "not found",
            message: "patient not found Kindly create patient",
          });
        }
      } else if (tokenValue.firebase.sign_in_provider === "google.com") {
        console.log(tokenValue.email);
        const patient = await Patient.findOne({ email: tokenValue.email });
        if (patient) {
          const token = await createSendToken(patient);

          patient.password = undefined;
          res.status(200).json({
            status: "success",
            message: "successFully",
            patient,
            token,
          });
        } else {
          res.status(404).json({
            status: "not found",
            message: "user not found Kindly create user",
          });
        }
      } else if (tokenValue.firebase.sign_in_provider === "phone") {
        console.log("tokenValue");
        const patient = await Patient.findOne({
          phone: tokenValue.phone_number,
        });
        if (patient) {
          const token = await createSendToken(patient);

          patient.password = undefined;
          res.status(200).json({
            status: "success",
            message: "successFully",
            patient,
            token,
          });
        } else {
          res.status(404).json({
            status: "not found",
            message: "patient not found Kindly create patient",
          });
        }
      } else {
        res.status(500).json({ status: "error", message: "invalid Token " });
      }
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: error.errorInfo });
  }
};

exports.signupWithGoogle = async (req, res) => {
  try {
    const {
      authToken,
      latitude,
      longitude,
      fullName,
      email,
      gender,
      address,
      age,
      notificationsToken,
    } = req.body;
    const tokenValue = await verifyFirebaseToken(authToken);
    if (tokenValue.message) {
      res
        .status(401)
        .json({ status: "unauthorized", message: tokenValue.message });
    } else {
      if (tokenValue.firebase.sign_in_provider === "facebook.com") {
        res.status(401).json({
          status: "unauthorized",
          message: "kindly send Phone token",
        });
      } else if (tokenValue.firebase.sign_in_provider === "google.com") {
        // console.log(tokenValue.email);
        // const patient = await Patient.findOne({ email: tokenValue.email });
        res.status(401).json({
          status: "unauthorized",
          message: "kindly send Phone token",
        });
      } else if (tokenValue.firebase.sign_in_provider === "phone") {
        console.log(tokenValue.phone_number);
        const patient = await Patient.findOne({
          phone: tokenValue.phone_number,
        });
        if (patient) {
          const token = await createSendToken(patient._id);
          patient.password = undefined;
          res.status(200).json({
            status: "success",
            message: "successFully",
            patient,
            token,
          });
        } else {
          const patientId = (await Patient.count()) + 1;
          const newUser = await Patient.create({
            patientId,
            location: { type: "Point", coordinates: [latitude, longitude] },
            fullName,
            email,
            gender,
            address,
            age,
            phone: tokenValue.phone_number,
            notificationsToken,
          });
          const token = createSendToken(newUser);

          res.status(201).json({
            status: "Created",
            message: "User create successfully",
            newUser,
            token,
          });
        }
      } else {
        res.status(500).json({ status: "error", message: "invalid Token " });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.uploadProfilePhoto = async (req, res) => {
  try {
    const patientId = req.params.patientId;
    const file = req.file;

    const patient = await Patient.findById(patientId);
    const result = await uploadImg(file);
    console.log(result.key);
    patient.photo = result.key;
    await patient.save();
    fs.unlinkSync(file.path);
    res
      .status(200)
      .json({ status: "success", message: "successfully uploaded" });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.getImg = async (req, res) => {
  try {
    const key = req.params.key;
    const readStream = getFileStream(key);
    readStream.pipe(res);
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};
