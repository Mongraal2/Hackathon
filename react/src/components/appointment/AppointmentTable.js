import React, { useState, useEffect } from "react";
import SingleAppointment from "./SingleAppointment";
import axios from "axios";
import SnackbarComponent from "../snackBar/SnackbarComponent";

const AppointmentTable = (props) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const cancelAppointmentHandler = async () => {
    try {
      const res = await axios.post("/api/v1/admin/cancel/appointment/date", {
        date: props.date,
        doctorId: props.doctorId,
        clinicId: props.clinicId,
      });
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
      props.getAppointment(props.date);
    } catch (error) {
      setOpenSnackbar(true);
      setMessage(error.response.data.message || "Error");
      setSeverity("error");
    }
  };

  return (
    <div>
      <SnackbarComponent
        message={message}
        severity={severity}
        open={openSnackbar}
        setOpen={setOpenSnackbar}
      />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Clinic</th>
            <th scope="col">Doctor</th>
            <th scope="col">Patient</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {props.appointment.map((item, index) => (
            <SingleAppointment appointment={item} index={index} />
          ))}
        </tbody>
      </table>
      <h6 style={{ cursor: "pointer" }} onClick={cancelAppointmentHandler}>
        Cancel all appointment{" "}
      </h6>
    </div>
  );
};

export default AppointmentTable;
