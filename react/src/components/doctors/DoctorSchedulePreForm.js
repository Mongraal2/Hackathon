import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AsPerDate from "./doctorScheduleAsPerDate/asPerDate";
import AsPerWeekly from "./doctorScheduleAsPerWeekly/AsPerWeekly";

const DoctorSchedulePreForm = (props) => {
  const availabilityButtonHandel = (event) => {
    try {
      props.setAvailability(event.target.checked);
    } catch (error) { }
  };
  const setAvailabilityBeforeHandel = (event) => {
    try {
      props.setAvailabilityBefore(event.target.value);
    } catch (error) { }
  };
  const setAsPerHandel = (event) => {
    try {
      props.setAsPer(event.target.value);
    } catch (error) { }
  };

  return (
    <>

      <div style={{ display: "flex", justifyContent: "space-around", margin: "5 0px  20px" }}>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <h3>Availability</h3>

          <Switch
            onChange={availabilityButtonHandel}
            checked={props.availability}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <h3>Availability Before</h3>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.availabilityBefore}
            label="Availability Before"
            onChange={setAvailabilityBeforeHandel}
          >
            <MenuItem value={1}>1 Day</MenuItem>
            <MenuItem value={2}>2 Day</MenuItem>
            <MenuItem value={3}>3 Day</MenuItem>
            <MenuItem value={4}>4 Day</MenuItem>
            <MenuItem value={5}>5 Day</MenuItem>
            <MenuItem value={6}>6 Day</MenuItem>
            <MenuItem value={7}>7 Day</MenuItem>
            <MenuItem value={8}>8 Day</MenuItem>
            <MenuItem value={9}>9 Day</MenuItem>
            <MenuItem value={10}>10 Day</MenuItem>
          </Select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <h3>Select as per</h3>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.asPer}
            label="Availability Before"
            onChange={setAsPerHandel}
          >
            <MenuItem value={"weekly"}>weekly</MenuItem>
            <MenuItem value={"date"}>date</MenuItem>
          </Select>
        </div>
      </div>
      {
        props.asPer === "weekly" ? (
          <AsPerWeekly
            asPerWeekly={props.asPerWeekly}
            setAsPerWeekly={props.setAsPerWeekly}
          />
        ) : props.asPer === "date" ? (
          <AsPerDate
            trimming={props.asPerDate}
            setTrimming={props.setAsPerDate}
            newDate={props.newDate}
            setNewDate={props.setNewDate}
          />
        ) : (
          ""
        )
      }
    </ >
  );
};

export default DoctorSchedulePreForm;
