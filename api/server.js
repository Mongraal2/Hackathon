require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const adminAuthRouter = require("./routes/admin/adminAuthRouter");
const adminDepartmentRouter = require("./routes/admin/departmentRouter");
const patientRouter = require("./routes/patient/patientRouter");
const patientAuthRouter = require("./routes/patient/patientAuthRouter");
const clinicAuthRouter = require("./routes/clinic/clinicAuthRouter");
const clinicRouter = require("./routes/clinic/clinicRouter");
const clinicDepartmentRouter = require("./routes/clinic/departmentRouter");
const addDoctor = require("./routes/clinic/doctorRouter");
const appointmentRouter = require("./routes/patient/appointmentRouter");
const patientDepartmentRouter = require("./routes/patient/departmentRouter");
const adminRouter = require("./routes/admin/adminRouter");
const patientFamilyRouter = require("./routes/patient/familyMemberRouter");
const specialistRouter = require("./routes/admin/specialistRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful!"))
  .catch((e) => {
    console.log(`SomeThing went wrong with DataBase. and the error is =  ${e}`);
  });

app.get("/", (req, res) => res.send("<h1>Server is running</h1>"));

// admin routers
app.use("/api/v1/admin", adminAuthRouter);
app.use("/api/v1/admin", adminDepartmentRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/admin", specialistRouter);

// clinic routers
app.use("/api/v1/clinic", clinicAuthRouter);
app.use("/api/v1/clinic", clinicRouter);
app.use("/api/v1/clinic", addDoctor);
app.use("/api/v1/clinic", clinicDepartmentRouter);

// patient routers
app.use("/api/v1/patient", patientRouter);
app.use("/api/v1/patient", patientAuthRouter);
app.use("/api/v1/patient", appointmentRouter);
app.use("/api/v1/patient", patientFamilyRouter);
app.use("/api/v1/patient", patientDepartmentRouter);

app.get("*", (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Url not found",
  });
});
app.post("*", (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Url not found",
  });
});

app.delete("*", (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Url not found",
  });
});

app.patch("*", (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Url not found",
  });
});
app.put("*", (req, res) => {
  res.status(500).json({
    status: "success",
    message: "Url not found",
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is running on port ${port}!`));
