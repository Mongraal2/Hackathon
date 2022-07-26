import React from "react";

const SingleAppointment = (props) => {
  // console.log(props);
  return (
    <>
      <tr>
        <th scope="row">{props.index + 1}</th>
        <td>{props.appointment.clinic.name}</td>
        <td>{props.appointment.doctor.fullName}</td>
        <td>{props.appointment.patient.fullName}</td>
        <td>{props.appointment.bookingDate}</td>
        <td>
          {props.appointment.meetHours}:{props.appointment.meetMinutes}
        </td>
        <td>{props.appointment.status}</td>
      </tr>
    </>
  );
};

export default SingleAppointment;
