import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import axios from "axios";
import SingleClinic from "./searchDoctorAndClinicForAdd/SingleClinic";
import SingleDoctor from "./searchDoctorAndClinicForAdd/SingleDoctor";
import AddDataToClinicForm from "./addDoctorToClinic/AddDataToClinicForm";
import SnackbarComponent from "../snackBar/SnackbarComponent";

const AddDoctorToClinic = () => {
  const [clinic, setClinic] = useState([]);
  const [formData, setFormData] = useState({});
  const [clinicData, setClinicData] = useState("");
  const [availability, setAvailability] = useState(false);
  const [availabilityBefore, setAvailabilityBefore] = useState("");
  const [asPer, setAsPer] = useState("");
  const [showClinic, setShowClinic] = useState(false);
  const [doctor, setDoctor] = useState([]);
  const [doctorData, setDoctorData] = useState("");
  const [showDoctor, setShowDoctor] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const handleButtonClick = async (e) => {
    try {
      const res = await axios.post("/api/v1/admin/addDoctor/to/clinic", {
        doctorId: doctorData._id,
        clinicId: clinicData._id,
        availability,
        availabilityBefore,
        asPer,
      });
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
      setShowClinic(false);
      setShowDoctor(false);
    } catch (error) {
      setOpenSnackbar(true);
      setMessage(error.response.data.message);
      setSeverity("error");
    }
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
  };

  const onInputChangeDoctor = async (e) => {
    try {
      const res = await axios.get(
        `/api/v1/admin/search/name/Doctor/${e.target.value}`
      );
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
  const getDoctorData = (CData) => {
    setShowDoctor(true);
  };

  return (
    <div>
      <Box
        alignItems="center"
        justifyContent="center"
        sx={{
          display: "flex",
          width: 180,
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
          Add Doctor To Clinic
        </Typography>
      </Box>
      <SnackbarComponent
        message={message}
        severity={severity}
        open={openSnackbar}
        setOpen={setOpenSnackbar}
      />
      <div className="row m-3">
        <div className="col-md-6 d-flex flex-column align-items-center">
          <div className="row m-3 " style={{ width: "90%" }}>
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
          <div className="col-md-6 m-4">
            {showClinic ? (
              <SingleClinic key={clinicData._id} clinic={clinicData} />
            ) : (
              ""
            )}
          </div>
        </div>

        {showClinic ? (
          <div className="col-md-6 d-flex flex-column align-items-center">
            <div className="row m-3 " style={{ width: "90%" }}>
              <div className="col-md-12">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo2"
                  onInputChange={onInputChangeDoctor}
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
            <div className="col-md-6 m-4">
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
      {showDoctor ? (
        <div className="row m-3 ">
          <AddDataToClinicForm
            setAvailability={setAvailability}
            availability={availability}
            formData={formData}
            setFormData={setFormData}
            setAvailabilityBefore={setAvailabilityBefore}
            availabilityBefore={availabilityBefore}
            asPer={asPer}
            setAsPer={setAsPer}
          />
          <div className="col d-flex justify-content-center">
            <button
              onClick={handleButtonClick}
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
              Add Doctor to Clinic
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddDoctorToClinic;
