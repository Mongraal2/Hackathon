import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import axios from "axios";
import SnackbarComponent from "../../snackBar/SnackbarComponent";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import SunMorning from "./morning/SunMorning";
import MonMorning from "./morning/MonMorning";
import TueMorning from "./morning/TueMorning";
import WedMorning from "./morning/WedMorning";
import ThrMorning from "./morning/ThrMorning";
import FriMorning from "./morning/FriMorning";
import SatMorning from "./morning/SatMorning";

import SunEvening from "./evening/SunEvening";
import MonEvening from "./evening/MonEvening";
import TueEvening from "./evening/TueEvening";
import WedEvening from "./evening/WedEvening";
import ThrEvening from "./evening/ThrEvening";
import FriEvening from "./evening/FriEvening";
import SatEvening from "./evening/SatEvening";

const ClinicSchedule = () => {
  const [clinic, setClinic] = useState([]);
  const [clinicData, setClinicData] = useState("");
  const [inputtext, setInputData] = useState("");
  const [trimming, setTrimming] = useState({});

  const [showClinic, setShowClinic] = useState(false);
  const [dayButton, setDayButton] = useState("sun");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const onInputChange = async (e) => {
    setInputData(e.target.value);
    try {
      setInputData(e.target.value);
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

  const updateClinicTiming = async () => {
    try {
      // console.log(trimming.sun.close);

      console.log(clinicData._id);

      const res = await axios.post("/api/v1/admin/update/clinic/Timing", {
        clinicId: clinicData._id,
        ...trimming,
      });
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
    } catch (error) {
      setOpenSnackbar(true);
      setMessage(error.response.data.message);
      setSeverity("error");
    }
  };
  // console.log(trimming);

  const days = {
    sun: "Sunday",
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thr: "Thursday",
    fri: "Friday",
    sat: "Saturday",
  };

  const solveTime = (H) => {
    var h = H % 12 || 12;
    var ampm = H < 12 || H === 24 ? "AM" : "PM";
    H = h + ampm;
    return H;
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
          Clinic Schedule
        </Typography>
      </Box>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        onInputChange={onInputChange}
        options={clinic}
        getOptionLabel={(option) => option.name}
        onChange={(event, autocompleteValue) => {
          setClinicData(autocompleteValue);
          getClinicData(autocompleteValue);
          setTrimming(autocompleteValue.trimming);
        }}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Search Clinic" />
        )}
      />
      <SnackbarComponent
        message={message}
        severity={severity}
        open={openSnackbar}
        setOpen={setOpenSnackbar}
      />
      <div>
        {showClinic ? (
          <table style={{ width: "40%" }}>
            <tr>
              <th style={{ color: "blue", textAlign: "center" }}>Day</th>
              <th style={{ color: "blue", textAlign: "center" }}>Morning</th>
              <th style={{ color: "blue", textAlign: "center" }}>Evening</th>
            </tr>
            {Object.keys(trimming).map((key, index) => (
              <tr>
                <td
                  style={{
                    color: "darkblue",
                    fontWeight: "bolder",
                    textAlign: "center",
                  }}
                >
                  {days[key]}
                </td>
                {trimming[key].close ? (
                  <td colSpan={2} style={{ textAlign: "center" }}>
                    Closed
                  </td>
                ) : (
                  <>
                    {trimming[key].morningTime.close ? (
                      <td style={{ textAlign: "center" }}>Closed</td>
                    ) : (
                      <td style={{ textAlign: "center" }}>
                        {solveTime(trimming[key].morningTime.from)}-
                        {solveTime(trimming[key].morningTime.till)}
                      </td>
                    )}
                    {trimming[key].eveningTime.close ? (
                      <td style={{ textAlign: "center" }}>Closed</td>
                    ) : (
                      <td style={{ textAlign: "center" }}>
                        {solveTime(trimming[key].eveningTime.from)}-
                        {solveTime(trimming[key].eveningTime.till)}
                      </td>
                    )}
                  </>
                )}
              </tr>
            ))}
          </table>
        ) : (
          ""
        )}
      </div>
      {showClinic ? (
        <div className="m-4">
          <Stack direction="row" spacing={3}>
            <span>Days : </span>

            <Button
              className=""
              variant={dayButton === "sun" ? "contained" : "outlined"}
              onClick={() => setDayButton("sun")}
            >
              Sun
            </Button>
            <Button
              className=""
              variant={dayButton === "mon" ? "contained" : "outlined"}
              onClick={() => setDayButton("mon")}
            >
              Mon
            </Button>
            <Button
              className=""
              variant={dayButton === "tue" ? "contained" : "outlined"}
              onClick={() => setDayButton("tue")}
            >
              Tue
            </Button>
            <Button
              className=""
              variant={dayButton === "wed" ? "contained" : "outlined"}
              onClick={() => setDayButton("wed")}
            >
              Wed
            </Button>
            <Button
              className=""
              variant={dayButton === "thr" ? "contained" : "outlined"}
              onClick={() => setDayButton("thr")}
            >
              Thr
            </Button>
            <Button
              className=""
              variant={dayButton === "fri" ? "contained" : "outlined"}
              onClick={() => setDayButton("fri")}
            >
              Fri
            </Button>
            <Button
              className=""
              variant={dayButton === "sat" ? "contained" : "outlined"}
              onClick={() => setDayButton("sat")}
            >
              Sat
            </Button>
          </Stack>
          <div className="row mt-4 ">
            <div className="col-6">
              {dayButton === "sun" ? (
                <SunMorning
                  dayButton={dayButton}
                  setTrimming={setTrimming}
                  trimming={trimming}
                />
              ) : dayButton === "mon" ? (
                <MonMorning
                  dayButton={dayButton}
                  setTrimming={setTrimming}
                  trimming={trimming}
                />
              ) : dayButton === "tue" ? (
                <TueMorning
                  dayButton={dayButton}
                  setTrimming={setTrimming}
                  trimming={trimming}
                />
              ) : dayButton === "wed" ? (
                <WedMorning
                  dayButton={dayButton}
                  setTrimming={setTrimming}
                  trimming={trimming}
                />
              ) : dayButton === "thr" ? (
                <ThrMorning
                  dayButton={dayButton}
                  setTrimming={setTrimming}
                  trimming={trimming}
                />
              ) : dayButton === "fri" ? (
                <FriMorning
                  dayButton={dayButton}
                  setTrimming={setTrimming}
                  trimming={trimming}
                />
              ) : dayButton === "sat" ? (
                <SatMorning
                  dayButton={dayButton}
                  setTrimming={setTrimming}
                  trimming={trimming}
                />
              ) : (
                0
              )}
            </div>
            <div className="col-6">
              {dayButton === "sun" ? (
                <SunEvening
                  dayButton={dayButton}
                  setTrimming={setTrimming}
                  trimming={trimming}
                />
              ) : dayButton === "mon" ? (
                <MonEvening
                  dayButton={dayButton}
                  setTrimming={setTrimming}
                  trimming={trimming}
                />
              ) : dayButton === "tue" ? (
                <TueEvening
                  dayButton={dayButton}
                  setTrimming={setTrimming}
                  trimming={trimming}
                />
              ) : dayButton === "wed" ? (
                <WedEvening
                  dayButton={dayButton}
                  setTrimming={setTrimming}
                  trimming={trimming}
                />
              ) : dayButton === "thr" ? (
                <ThrEvening
                  dayButton={dayButton}
                  setTrimming={setTrimming}
                  trimming={trimming}
                />
              ) : dayButton === "fri" ? (
                <FriEvening
                  dayButton={dayButton}
                  setTrimming={setTrimming}
                  trimming={trimming}
                />
              ) : dayButton === "sat" ? (
                <SatEvening
                  dayButton={dayButton}
                  setTrimming={setTrimming}
                  trimming={trimming}
                />
              ) : (
                0
              )}
            </div>

            <div></div>
          </div>
        </div>
      ) : (
        ""
      )}
      {showClinic ? (
        <button onClick={updateClinicTiming}>UpdateTime</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default ClinicSchedule;
