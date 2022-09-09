require("dotenv").config();
const Clinic = require("../../models/clinic/clinicModel");
const ClinicOTP = require("../../models/clinic/clinicOTP");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { uploadImg, getFileStream } = require("./../../.config/s3config");
const fs = require("fs");

exports.signUpAndSendOTP = async (req, res) => {
  try {
    const {
      email,
      name,
      userName,
      password,
      passwordConfirm,
      latitude,
      longitude,
    } = req.body;

    const checkEmail = await Clinic.findOne({ email });
    const checkUserName = await Clinic.findOne({ userName });
    if (!checkEmail && !checkUserName) {
      const clinicId = (await Clinic.find().count()) + 1;
      const newClinic = await Clinic.create({
        clinicId,
        email,
        name,
        userName,
        password,
        passwordConfirm,
        location: { coordinates: [latitude, longitude] },
      });
      const token = createSendToken(newClinic);

      const checkOTP = await ClinicOTP.findOne({ email });

      const otp =
        `${Math.trunc(Math.random() * 9 + 1)}${Math.trunc(
          Math.random() * 9 + 1
        )}${Math.trunc(Math.random() * 9 + 1)}${Math.trunc(
          Math.random() * 9 + 1
        )}` * 1;
      if (checkOTP) {
        checkOTP.otp = otp;
        await checkOTP.save();
      } else {
        await ClinicOTP.create({ email, otp });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.NODEMAILER_MAIL,
          pass: process.env.NODEMAILER_PASS,
        },
      });
      const mailOptions = {
        from: process.env.NODEMAILER_MAIL,
        to: email,
        subject: "OTP Verification Email",
        text: `Your otp is ${otp}`,
      };
      console.log(otp);
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
      });
      console.log(otp);

      res.status(200).json({
        status: "success",
        message:
          "clinic created successfully and Otp is sended to email id, Otp is valid for 10 min only",
        clinic: newClinic,
        token,
      });
    } else {
      res.status(409).json({
        status: "Conflict",
        message: "This email id already exists or UserName",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const otp = req.body.otp * 1;
    const clinic = await Clinic.findOne({ email });
    if (clinic) {
      const clinicOtp = await ClinicOTP.findOne({ email });
      var otpDate = new Date(clinicOtp.updatedAt.getTime() + 10 * 60000);
      if (clinicOtp.otp === otp && otpDate > new Date(Date.now())) {
        clinic.emailVerified = true;
        await clinic.save();
        res.status(200).json({
          status: "success",
          message: "Otp Is verified",
        });
      } else if (otpDate < new Date(Date.now())) {
        res.status(401).json({
          status: "unauthorized ",
          message: "OTP Expired",
        });
      } else {
        res.status(401).json({
          status: "unauthorized ",
          message: "Incorrect OTP",
        });
      }
    } else {
      res.status(404).json({ status: "not found", message: "User Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.updateClinicProfile = async (req, res) => {
  try {
    const { email, phone, name, address } = req.body;
    const clinic = await Clinic.findByIdAndUpdate(req.clinic._id, {
      email,
      phone,
      name,
      address,
    });
    res.status(200).json({
      status: "success",
      message: "Successfully updated ClinicProfile",
      clinic,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.resendEmailOtp = async (req, res) => {
  try {
    const email = req.body.email;

    if (email) {
      const checkOTP = await ClinicOTP.findOne({ email });

      const otp =
        `${Math.trunc(Math.random() * 9 + 1)}${Math.trunc(
          Math.random() * 9 + 1
        )}${Math.trunc(Math.random() * 9 + 1)}${Math.trunc(
          Math.random() * 9 + 1
        )}` * 1;
      if (checkOTP) {
        checkOTP.otp = otp;
        await checkOTP.save();
      } else {
        await ClinicOTP.create({ email, otp });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.NODEMAILER_MAIL,
          pass: process.env.NODEMAILER_PASS,
        },
      });
      const mailOptions = {
        from: process.env.NODEMAILER_MAIL,
        to: email,
        subject: "OTP Verification Email",
        text: `Your otp is ${otp}`,
      };
      console.log(otp);
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
      });
      // console.log(otp);

      res.status(200).json({
        status: "success",
        message: " Otp is sended to email id, Otp is valid for 10 min only",
      });
    } else {
      res.status(404).json({ status: "not found", message: "User Not Found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.uploadProfilePhoto = async (req, res) => {
  try {
    const clinicId = req.params.clinicId;
    const file = req.file;
    // console.log(file);

    const clinic = await Clinic.findById(clinicId);
    const result = await uploadImg(file);
    console.log(result.key);
    clinic.profilePhoto = result.key;
    await clinic.save();
    fs.unlinkSync(file.path);
    res
      .status(200)
      .json({ status: "success", message: "successfully uploaded" });
  } catch (error) {
    console.log(error);
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

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      if (!email || !password) {
        res.status(404).json({
          status: "success",
          message: "enter password or email",
        });
      }
      const clinic = await Clinic.findOne({ email }).select("+password");

      if (
        !clinic ||
        !(await clinic.correctPassword(password, clinic.password))
      ) {
        res.status(403).json({
          data: "Invalid password or Admin name",
        });
      } else {
        clinic.password = undefined;
        const token = signToken(clinic._id);
        res.status(200).json({
          status: "success",
          message: "login Successfully",
          clinic,
          token,
        });
      }
    } else {
      res
        .status(204)
        .json({ status: "contentMissing", message: "contentMissing" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

// exports.signUpWAndVerifyOtp = async (req, res) => {
//   try {
//     const email = req.body.email;
//     const otp = req.body.otp * 1;

//     const checkEmail = await User.findOne({ email });
//     if (!checkEmail) {
//       const userOtp = await ClinicOTP.findOne({ email });
//       var otpDate = new Date(userOtp.updatedAt.getTime() + 10 * 60000);
//       if (userOtp.otp === otp && otpDate > new Date(Date.now())) {
//         res.status(200).json({
//           status: "success",
//           message: "Otp Is verified",
//         });
//       } else if (otpDate < new Date(Date.now())) {
//         res.status(401).json({
//           status: "unauthorized ",
//           message: "OTP Expired",
//         });
//       } else {
//         res.status(401).json({
//           status: "unauthorized ",
//           message: "Incorrect OTP",
//         });
//       }
//     } else {
//       res.status(409).json({
//         status: "Conflict",
//         message: "This email already exists",
//       });
//     }
//   } catch (error) {
//     internalServerError("/api/v1/users/signUp/SendOTP", res);
//   }
// };
// exports.userSignup = async (req, res) => {
//   console.log(req.body);
//   try {
//     const {
//       latitude,
//       longitude,
//       name,
//       myInterests,
//       dob,
//       yourStarSign,
//       iIdentifyAs,
//       lookingFor,
//       readyFor,
//       moreAboutMe,
//       myIdealMatch,
//       phone,
//     } = req.body;
//     // const checkEmail = await User.findOne({ email });
//     const user = await User.findOne({ phone });
//     if (!user && name && phone) {
//       const userId = (await User.find().count()) + 1;
//       const newUser = await User.create({
//         userId,
//         location: { type: "Point", coordinates: [latitude, longitude] },
//         name,
//         myInterests,
//         dob,
//         yourStarSign,
//         iIdentifyAs,
//         lookingFor,
//         readyFor,
//         moreAboutMe,
//         myIdealMatch,
//         phone,
//       });
//       const token = createSendToken(newUser);

//       res.status(201).json({
//         status: "Created",
//         message: "User create successfully",
//         newUser,
//         token,
//       });
//     } else {
//       res.status(409).json({
//         status: "Conflict",
//         message: "This phone already exists",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     internalServerError("/api/v1/users/userSignup", res);
//   }
// };

// exports.signInWithOtp = async (req, res) => {
//   try {
//     const { phone, otp } = req.body;

//     const checkUserPhone = await User.findOne({ phone });

//     if (phone && checkUserPhone) {
//       const userOtp = await UserOTP.findOne({ phone });
//       var otpDate = new Date(userOtp.updatedAt.getTime() + 10 * 60000);
//       if (userOtp.otp === otp && otpDate > new Date(Date.now())) {
//         const user = await User.findOne({ phone });
//         token = signToken(user._id);
//         res.status(200).json({
//           status: "success",
//           message: "Login successfully",
//           user,
//           token,
//         });
//       } else if (otpDate < new Date(Date.now())) {
//         res.status(401).json({
//           status: "unauthorized ",
//           message: "OTP Expired",
//         });
//       } else {
//         res.status(401).json({
//           status: "unauthorized ",
//           message: "Incorrect OTP",
//         });
//       }
//     } else {
//       res.status(404).json({
//         status: "not found",
//         message: "Phone Number not  not found, please signup",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.signInAndSendOTP = async (req, res) => {
//   try {
//     const { email, phone } = req.body;
//     if (email) {
//       const checkEmail = await User.findOne({ email });
//       if (checkEmail) {
//         const checkOTP = await UserOTP.findOne({ email });
//         const otp =
//           `${Math.trunc(Math.random() * 9 + 1)}${Math.trunc(
//             Math.random() * 9 + 1
//           )}${Math.trunc(Math.random() * 9 + 1)}${Math.trunc(
//             Math.random() * 9 + 1
//           )}` * 1;
//         if (checkOTP) {
//           checkOTP.otp = otp;
//           await checkOTP.save();
//         } else {
//           await UserOTP.create({ email, otp });
//         }

//         console.log(otp);

//         res.status(200).json({
//           status: "success",
//           message: "Otp Is sent to Email id and Otp is valid for 10 min",
//         });
//       } else {
//         res.status(404).json({
//           status: "not found",
//           message: "user Not found",
//         });
//       }
//     } else if (phone) {
//       const checkPhone = await User.findOne({ phone });
//       if (checkPhone) {
//         const checkOTP = await UserOTP.findOne({ phone });

//         const otp =
//           `${Math.trunc(Math.random() * 9 + 1)}${Math.trunc(
//             Math.random() * 9 + 1
//           )}${Math.trunc(Math.random() * 9 + 1)}${Math.trunc(
//             Math.random() * 9 + 1
//           )}` * 1;
//         if (checkOTP) {
//           checkOTP.otp = otp;

//           await checkOTP.save();
//         } else {
//           await UserOTP.create({ phone, otp });
//         }
//         console.log(otp);
//         res.status(200).json({
//           status: "success",
//           message: "Otp Is sent to phone id and Otp is valid for 10 min",
//         });
//       } else {
//         res.status(404).json({
//           status: "not found",
//           message: "user Not found",
//         });
//       }
//     }
//   } catch (error) {
//     internalServerError("/api/v1/users//signUp/VerifyOtp", res);
//   }
// };

exports.signInCheckEmailOrPhone = async (req, res) => {
  const { email, phone } = req.body;
  if (email) {
    const checkEmail = await User.find({ email });
    if (checkEmail) {
      res.s;
    }
  } else if (phone) {
  }
};

exports.signInForgetPassword = async (req, res) => {
  const { email, phone, password, passwordConfirm, otp } = req.body;
  const checkUserEmail = await User.findOne({ email });
  const checkUserPhone = await User.findOne({ phone });

  if (checkUserEmail && email) {
    const userOtp = await UserOTP.findOne({ email });
    var otpDate = new Date(userOtp.updatedAt.getTime() + 10 * 60000);
    if (userOtp.otp === otp && otpDate > new Date(Date.now())) {
      const user = await User.findOne({ email }).select("+password");
      user.password = password;
      user.passwordConfirm = passwordConfirm;
      await user.save();

      res.status(200).json({
        status: "success",
        message: "successfully changed password",
      });
    } else if (otpDate < new Date(Date.now())) {
      res.status(401).json({
        status: "unauthorized ",
        message: "OTP Expired",
      });
    } else {
      res.status(401).json({
        status: "unauthorized ",
        message: "Incorrect OTP",
      });
    }
  } else if (phone && checkUserPhone) {
    const userOtp = await UserOTP.findOne({ phone });
    var otpDate = new Date(userOtp.updatedAt.getTime() + 10 * 60000);
    if (userOtp.otp === otp && otpDate > new Date(Date.now())) {
      const user = await User.findOne({ phone }).select("+password");
      user.password = password;
      user.passwordConfirm = passwordConfirm;
      await user.save();
      res.status(200).json({
        status: "success",
        message: "successfully changed password",
      });
    } else if (otpDate < new Date(Date.now())) {
      res.status(401).json({
        status: "unauthorized ",
        message: "OTP Expired",
      });
    } else {
      res.status(401).json({
        status: "unauthorized ",
        message: "Incorrect OTP",
      });
    }
  } else {
    res.status(404).json({
      status: "not found",
      message: "Phone Number not found, please signup",
    });
  }
};

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
const createSendToken = (user) => {
  return (token = signToken(user._id));
};

exports.protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    // console.log(token);
    if (!token) {
      res.status(401).json({
        status: "unauthorized",
        message: "you are not logged in ! please log in to get access",
      });
    } else {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);

      currentUser = await Clinic.findById(decoded.id);
      if (!currentUser) {
        res.status(500).json({
          status: "success",
          message: "Something went wrong",
        });
      } else {
      }

      req.clinic = currentUser;

      next();
    }
    // console.log("hello form auth.protect");
  } catch (error) {
    res.status(401).clearCookie("bearerToken").json({
      status: "unauthorized",
      message: "you are not logged in ! please log in to get error access",
    });
  }
};
