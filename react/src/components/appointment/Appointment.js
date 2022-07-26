import React, { useState } from "react";
import {
  Box,
  Typography,
  Autocomplete,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

import axios from "axios";
import AppointmentTable from "./AppointmentTable";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Appointment = () => {
  const [clinic, setClinic] = useState([]);
  const [showDoctor, setShowDoctor] = useState(false);
  const [singleClinicData, setSingleClinicData] = useState("");
  const [doctorArray, setDoctorArray] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [clinicId, setClinicId] = useState("");
  const [date, setDate] = useState(null);
  const [appointment, setAppointment] = useState([]);

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

  const getAppointment = async (ADate) => {
    try {
      const res = await axios.post("/api/v1/admin/get/appointment/date", {
        date: ADate,
        doctorId: doctorId,
        clinicId: clinicId,
      });
      console.log(res.data);
      setAppointment(res.data.appointment);
    } catch (error) {}
  };

  const handleDoctorSelect = (event) => {
    try {
      setDoctorId(event.target.value);
    } catch (error) {}
  };
  const setClinicData = async (value) => {
    try {
      const res = await axios.post(`/api/v1/admin/get/doctor/of/clinic`, {
        doctorArray: value.doctor,
      });
      setDoctorArray([]);

      if (res.data.doctor.length === 0) {
        setDoctorArray([]);
      } else {
        setDoctorArray(res.data.doctor);
      }
      console.log(res.data);
      setShowDoctor(true);
      setSingleClinicData(value);

      setClinicId(value._id);
    } catch (error) {
      setDoctorArray([]);
    }
  };
  return (
    <div>
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
          Appointment list
        </Typography>
      </Box>

      <div className="row">
        <div className="col-4">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            onInputChange={onInputChangeClinic}
            options={clinic}
            getOptionLabel={(option) => option.name}
            onChange={(event, autocompleteValue) => {
              setClinicData(autocompleteValue);
            }}
            sx={{ width: "auto" }}
            renderInput={(params) => (
              <TextField {...params} label="Search Clinic" />
            )}
          />
        </div>
        <div className="col-4">
          {showDoctor ? (
            <div>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Doctor
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={doctorId}
                    label="Select Doctor"
                    onChange={handleDoctorSelect}
                  >
                    {doctorArray.map((item) => (
                      <MenuItem value={item._id}>{item.fullName}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="col-4">
          {showDoctor && doctorId ? (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Select Date"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                  getAppointment(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="row">
        {showDoctor && doctorId && date ? (
          <AppointmentTable
            clinicId={clinicId}
            doctorId={doctorId}
            date={date}
            appointment={appointment}
            getAppointment={getAppointment}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Appointment;
