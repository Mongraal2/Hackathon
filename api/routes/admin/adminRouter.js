const express = require("express");
const router = express.Router();
const adminAuthController = require("../../controllers/admin/adminAuthController");
const adminController = require("../../controllers/admin/adminController");
const multer = require("multer");
const upload = multer({ dest: "temp/" });

router
  .route("/get/doctor/:limit/:page")
  .get(adminAuthController.protect)
  .get(adminController.getAllDoctorWithLimit);

router
  .route("/get/doctor/blocked/:limit/:page")
  .get(adminAuthController.protect)
  .get(adminController.getAllBlockedDoctorWithLimit);

router
  .route("/get/clinic/:limit/:page")
  .get(adminAuthController.protect)
  .get(adminController.getAllClinicWithLimit);

router
  .route("/get/clinic/blocked/:limit/:page")
  .get(adminAuthController.protect)
  .get(adminController.getAllBlockedClinicWithLimit);

router
  .route("/get/doctor/:id")
  .get(adminAuthController.protect, adminController.getDoctor);

router
  .route("/get/clinic/:id")
  .get(adminAuthController.protect, adminController.getClinic);

router
  .route("/block/doctor/:id")
  .get(adminAuthController.protect, adminController.blockDoctor);
router
  .route("/unblock/doctor/:id")
  .get(adminAuthController.protect, adminController.unBlockDoctor);

router
  .route("/approved/doctor/:id")
  .get(adminAuthController.protect, adminController.approvedDoctor);

router
  .route("/get/approved/doctor/:limit/:page")
  .get(adminAuthController.protect, adminController.getAllApprovedDoctorList);

router
  .route("/get/unapproved/doctor/:limit/:page")
  .get(adminAuthController.protect, adminController.getAllUnApprovedDoctorList);

router
  .route("/block/clinic/:id")
  .get(adminAuthController.protect, adminController.blockClinic);
router
  .route("/unblock/clinic/:id")
  .get(adminAuthController.protect, adminController.unBlockClinic);

router
  .route("/approved/clinic/:id")
  .get(adminAuthController.protect, adminController.approvedClinic);

router
  .route("/get/approved/clinic/:limit/:page")
  .get(adminAuthController.protect, adminController.getAllApprovedClinicList);

router
  .route("/get/unapproved/clinic/:limit/:page")
  .get(adminAuthController.protect, adminController.getAllUnApprovedClinicList);

router
  .route("/get/patient/:limit/:page")
  .get(adminAuthController.protect, adminController.getAllPatientList);

router
  .route("/get/photo/:key")
  .get(adminAuthController.protect, adminController.getImg);

router.route("/search/phone/Patient/:query").get(adminController.searchPatient);
router
  .route("/search/Phone/Clinic/:query")
  .get(adminController.searchClinicByPhone);
router
  .route("/search/name/Clinic/:query")
  .get(adminController.searchClinicByName);
router
  .route("/search/phone/Doctor/:query")
  .get(adminController.searchDoctorByPhone);
router
  .route("/search/name/Doctor/:query")
  .get(adminController.searchDoctorByName);

router
  .route("/create/doctor")
  .post(adminAuthController.protect, adminController.createDoctor);

router
  .route("/upload/doctor/:doctorId")
  .post(upload.single("docImg"), adminController.uploadDoctorPhoto);

router

  .route("/create/clinic")
  .post(adminAuthController.protect, adminController.createClinic);
router
  .route("/upload/clinic/:clinicId")
  .post(upload.single("clinicImg"), adminController.uploadClinicPhoto);

router
  .route("/update/clinic/Timing")
  .post(adminAuthController.protect, adminController.updateClinicTiming);

router
  .route("/getUserData")
  .get(adminAuthController.protect, adminAuthController.getUserData);

router
  .route("/addDoctor/to/clinic")
  .post(adminAuthController.protect, adminController.addDoctor);

//akash
router
  .route("/getCount/doctor/clinic/patient")
  .get(adminAuthController.protect, adminController.getCount);

router
  .route("/get/doctor/of/clinic")
  .post(adminAuthController.protect, adminController.getDoctorOfClinic);


router.route("/get/weekly/time").post(adminController.getDoctorTimingByWeekly);
router.route("/get/asPerDate/time").post(adminController.getDoctorTimingAsPerDate);


router.route("/get/weekly/time").post(adminController.getDoctorTimingByWeekly);
router.route("/get/asPerDate/time").post(adminController.getDoctorTimingAsPerDate);

router
  .route("/update/doctor/Timing/weekly")
  .post(adminController.editDoctorTimeWithWeekly);

router
  .route("/update/doctor/Timing/withDate")
  .post(adminController.editDoctorTimeWithDate);


router
  .route("/get/weekly/time")
  .post(adminAuthController.protect, adminController.getDoctorTimingByWeekly);


router
  .route("/update/doctor/Timing/weekly")
  .post(adminController.editDoctorTimeWithWeekly);

router
  .route("/update/doctor/Timing/withDate")
  .post(adminController.editDoctorTimeWithDate);



router
  .route("/get/appointment/date")
  .post(
    adminAuthController.protect,
    adminController.getAppointmentOfClinicByDate
  );
router
  .route("/cancel/appointment/date")
  .post(
    adminAuthController.protect,
    adminController.cancelAppointmentOfClinicByDate
  );
module.exports = router;
