import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import axios from "axios";
import SingleClinic from "./../clinics/singleClinic/SingleClinic";
import SingleDoctor from "./singleDoctor/SingleDoctor";
import DoctorSchedulePreForm from "./DoctorSchedulePreForm";
import SnackbarComponent from "../snackBar/SnackbarComponent";

const DoctorSchedule = () => {
  const [clinic, setClinic] = useState([]);
  const [formData, setFormData] = useState({});
  const [clinicData, setClinicData] = useState("");
  const [availability, setAvailability] = useState(false);
  const [availabilityBefore, setAvailabilityBefore] = useState("");
  const [asPer, setAsPer] = useState("");
  const [asPerWeekly, setAsPerWeekly] = useState({});
  const [asPerDate, setAsPerDate] = useState([]);
  const [newDate, setNewDate] = useState({
    date: {
      date: "2022-7-24",
      eveningTime: { slot: 50, from: 14, till: 17, close: false },
      morningTime: { slot: 50, from: 9, till: 13, close: false },
    },
  });
  const [showClinic, setShowClinic] = useState(false);
  const [doctor, setDoctor] = useState([]);
  const [doctorData, setDoctorData] = useState("");
  const [showDoctor, setShowDoctor] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const UpdateByWeeklyButtonHandle = async (e) => {
    try {
      const res = await axios.post(
        "/api/v1/admin/update/doctor/Timing/weekly",
        {
          doctorId: doctorData._id,
          clinicId: clinicData._id,
          availability,
          availabilityBefore,
          asPer,
          ...asPerWeekly,
        }
      );
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
    } catch (error) {
      setOpenSnackbar(true);
      setMessage(error.response.data.message || "Error");
      setSeverity("error");
    }
  };

  const updateDoctorTimingAsPerDate = async (CData) => {
    try {
      const res = await axios.post(`/api/v1/admin/get/asPerDate/time`, {
        doctorId: CData.doctorId,
        clinicId: CData.clinicId,
      });
      console.log(res.data);
      setAsPerDate(res.data.asPerDate);
      console.log(res.data.asPerDate);
      // setDate(res.data.asPerDate);
      // console.log(date);

      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
    } catch (error) {
      setOpenSnackbar(true);
      setMessage(error.response.data.message || "Error");
      setSeverity("error");
    }
  };

  const UpdateByDateButtonHandle = async (e) => {
    try {
      // console.log(doctorData._id);
      const res = await axios.post(
        "/api/v1/admin/update/doctor/Timing/withDate",
        {
          doctorId: doctorData._id,
          clinicId: clinicData._id,
          availability,
          availabilityBefore,
          asPer,
          times: {
            morningTime: newDate.date.morningTime,
            eveningTime: newDate.date.eveningTime,
          },
          date: newDate.date.date,
        }
      );
      console.log(res);
      const CData = {
        clinicId: res.data.clinicId,
        doctorId: res.data.doctorId,
      };
      updateDoctorTimingAsPerDate(CData);
    } catch (error) {}
  };

  const onInputChangeClinic = async (e) => {
    try {
      const res = await axios.get(
        `/api/v1/admin/search/name/Clinic/${e.target.value}`
      );

      setClinic([]);

      if (res.data.clinic.length === 0) {
        setClinic([]);
      } else {
        setClinic(res.data.clinic);
      }
    } catch (error) {
      setClinic([]);
    }
  };

  const getClinicData = (CData) => {
    setShowClinic(true);
    getClinicDoctorsData(CData.doctor);
    // setShowDoctor(true);
  };

  const getClinicDoctorsData = async (doctorArray) => {
    try {
      const res = await axios.post(`/api/v1/admin/get/doctor/of/clinic`, {
        doctorArray: doctorArray,
      });
      setDoctor([]);

      if (res.data.doctor.length === 0) {
        setDoctor([]);
      } else {
        setDoctor(res.data.doctor);
      }
    } catch (error) {
      setDoctor([]);
    }
  };

  const getDoctorTimingByWeekly = async (CData) => {
    try {
      const res = await axios.post(`/api/v1/admin/get/weekly/time`, {
        doctorId: CData._id,
        clinicId: clinicData._id,
      });
      setAsPerWeekly(res.data.asPerWeekly);
      // console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  const getDoctorTimingAsPerDate = async (CData) => {
    try {
      const res = await axios.post(`/api/v1/admin/get/asPerDate/time`, {
        doctorId: CData._id,
        clinicId: clinicData._id,
      });
      // console.log(res.data);
      setAsPerDate(res.data.asPerDate);
      console.log(res.data.asPerDate);
      // setDate(res.data.asPerDate);
      // console.log(date);
    } catch (error) {
      console.log(error);
    }
  };

  const getDoctorData = (CData) => {
    getDoctorTimingByWeekly(CData);
    getDoctorTimingAsPerDate(CData);
    setShowDoctor(true);
  };

  return (
    <div>
      <SnackbarComponent
        message={message}
        severity={severity}
        open={openSnackbar}
        setOpen={setOpenSnackbar}
      />
      <Box
        alignItems="center"
        justifyContent="center"
        sx={{
          display: "flex",
          width: 140,
          height: 31,
          background: "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
          borderRadius: "64px",
        }}
        margin={{
          lg: "10px 30px",
          md: "5xp 10px",
          sm: "5px 10px",
          xs: "5px 10px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "13px",
            lineHeight: "16px",
            color: "#fff",
          }}
        >
          Doctor Schedule
        </Typography>
      </Box>
      <div className="row m-3">
        <div className="col-md-6 ">
          <div className="row m-3">
            <div className="col-md-12">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                onInputChange={onInputChangeClinic}
                options={clinic}
                getOptionLabel={(option) => option.name}
                onChange={(event, autocompleteValue) => {
                  setClinicData(autocompleteValue);
                  getClinicData(autocompleteValue);
                }}
                sx={{ width: "auto" }}
                renderInput={(params) => (
                  <TextField {...params} label="Search Clinic" />
                )}
              />
            </div>
          </div>
          <div className="col-md-6 m-4 ">
            {showClinic ? (
              <SingleClinic key={clinicData._id} clinic={clinicData} />
            ) : (
              ""
            )}
          </div>
        </div>

        {showClinic ? (
          <div className="col-md-6 ">
            <div className="row m-3">
              <div className="col-md-12">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo2"
                  // onInputChange={()=> {getClinicDoctorsData()}}
                  options={doctor}
                  getOptionLabel={(option) => option.fullName}
                  onChange={(event, autocompleteValue) => {
                    setDoctorData(autocompleteValue);
                    getDoctorData(autocompleteValue);
                  }}
                  sx={{ width: "auto" }}
                  renderInput={(params) => (
                    <TextField {...params} label="Search Doctor" />
                  )}
                />
              </div>
            </div>
            <div className="col-md-6 m-4 ">
              {showDoctor ? (
                <SingleDoctor key={doctorData._id} doctor={doctorData} />
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {showClinic ? (
        <div className="row m-3 ">
          <DoctorSchedulePreForm
            setAvailability={setAvailability}
            availability={availability}
            formData={formData}
            setFormData={setFormData}
            setAvailabilityBefore={setAvailabilityBefore}
            availabilityBefore={availabilityBefore}
            asPer={asPer}
            setAsPer={setAsPer}
            asPerWeekly={asPerWeekly}
            setAsPerWeekly={setAsPerWeekly}
            asPerDate={asPerDate}
            setAsPerDate={setAsPerDate}
            newDate={newDate}
            setNewDate={setNewDate}
          />

          {asPer === "weekly" ? (
            <div className="col d-flex justify-content-center">
              <button
                onClick={UpdateByWeeklyButtonHandle}
                style={{
                  width: "auto",
                  height: "33px",
                  background:
                    "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
                  border: "1px solid #3E4095",
                  borderRadius: "64px",
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#fff",
                }}
              >
                Update Doctor Timing
              </button>
            </div>
          ) : asPer === "date" ? (
            <div className="col d-flex justify-content-center">
              <button
                onClick={UpdateByDateButtonHandle}
                style={{
                  width: "auto",
                  height: "33px",
                  background:
                    "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
                  border: "1px solid #3E4095",
                  borderRadius: "64px",
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#fff",
                }}
              >
                Update Doctor Timing
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DoctorSchedule;
