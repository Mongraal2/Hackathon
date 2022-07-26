import React, { useState } from "react";
// import { Box, Typography } from "@mui/material";
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
// import axios from "axios";

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

const AsPerWeekly = (props) => {
  const [dayButton, setDayButton] = useState("sun");

  return (
    <div>
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
                setTrimming={props.setAsPerWeekly}
                trimming={props.asPerWeekly}
              />
            ) : dayButton === "mon" ? (
              <MonMorning
                dayButton={dayButton}
                setTrimming={props.setAsPerWeekly}
                trimming={props.asPerWeekly}
              />
            ) : dayButton === "tue" ? (
              <TueMorning
                dayButton={dayButton}
                setTrimming={props.setAsPerWeekly}
                trimming={props.asPerWeekly}
              />
            ) : dayButton === "wed" ? (
              <WedMorning
                dayButton={dayButton}
                setTrimming={props.setAsPerWeekly}
                trimming={props.asPerWeekly}
              />
            ) : dayButton === "thr" ? (
              <ThrMorning
                dayButton={dayButton}
                setTrimming={props.setAsPerWeekly}
                trimming={props.asPerWeekly}
              />
            ) : dayButton === "fri" ? (
              <FriMorning
                dayButton={dayButton}
                setTrimming={props.setAsPerWeekly}
                trimming={props.asPerWeekly}
              />
            ) : dayButton === "sat" ? (
              <SatMorning
                dayButton={dayButton}
                setTrimming={props.setAsPerWeekly}
                trimming={props.asPerWeekly}
              />
            ) : (
              0
            )}
          </div>
          <div className="col-6">
            {dayButton === "sun" ? (
              <SunEvening
                dayButton={dayButton}
                setTrimming={props.setAsPerWeekly}
                trimming={props.asPerWeekly}
              />
            ) : dayButton === "mon" ? (
              <MonEvening
                dayButton={dayButton}
                setTrimming={props.setAsPerWeekly}
                trimming={props.asPerWeekly}
              />
            ) : dayButton === "tue" ? (
              <TueEvening
                dayButton={dayButton}
                setTrimming={props.setAsPerWeekly}
                trimming={props.asPerWeekly}
              />
            ) : dayButton === "wed" ? (
              <WedEvening
                dayButton={dayButton}
                setTrimming={props.setAsPerWeekly}
                trimming={props.asPerWeekly}
              />
            ) : dayButton === "thr" ? (
              <ThrEvening
                dayButton={dayButton}
                setTrimming={props.setAsPerWeekly}
                trimming={props.asPerWeekly}
              />
            ) : dayButton === "fri" ? (
              <FriEvening
                dayButton={dayButton}
                setTrimming={props.setAsPerWeekly}
                trimming={props.asPerWeekly}
              />
            ) : dayButton === "sat" ? (
              <SatEvening
                dayButton={dayButton}
                setTrimming={props.setAsPerWeekly}
                trimming={props.asPerWeekly}
              />
            ) : (
              0
            )}
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AsPerWeekly;
