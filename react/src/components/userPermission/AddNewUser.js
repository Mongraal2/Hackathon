import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import Multiselect from "multiselect-react-dropdown";
import SnackbarComponent from "../snackBar/SnackbarComponent";

import axios from "axios";

const AddNewUser = (props) => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const passwordConfirm = useRef(null);
  const designation = useRef(null);
  const [selectedOption, setSelectedOption] = useState([]);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const select = [
    { option: "Dashboard", id: "1" },
    { option: "Patient", id: "2" },
    { option: "Clinics", id: "3" },
    { option: "Doctors", id: "4" },
    { option: "Department", id: "5" },
    { option: "Appointment", id: "6" },
    { option: "Payments", id: "7" },
    { option: "Report", id: "8" },
    { option: "User Permission", id: "9" },
    { option: "Admin Profile", id: "10" },
  ];

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
        passwordConfirm: passwordConfirm.current.value,
        designation: designation.current.value,
        permissions: {
          dashboard: selectedOption.some((e) => e.option === "Dashboard"),
          patient: selectedOption.some((e) => e.option === "Patient"),
          clinic: selectedOption.some((e) => e.option === "Clinics"),
          doctor: selectedOption.some((e) => e.option === "Doctors"),
          department: selectedOption.some((e) => e.option === "Department"),
          appointment: selectedOption.some((e) => e.option === "Appointment"),
          payments: selectedOption.some((e) => e.option === "Payments"),
          report: selectedOption.some((e) => e.option === "Report"),
          userPermissions: selectedOption.some(
            (e) => e.option === "User Permission"
          ),
          adminProfile: selectedOption.some(
            (e) => e.option === "Admin Profile"
          ),
        },
      };
      const res = await axios.post("/api/v1/admin/create/admin", { ...data });
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
      props.setRunEffect(true);
    } catch (error) {
      setOpenSnackbar(true);
      setMessage(error.response.data.message);
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
          Add New User
        </Typography>
      </Box>
      <section class="vh-100 gradient-custom w-100">
        <div class="container py-0 h-100">
          <div class="row ">
            <div class="col-12 col-lg-9 col-xl-7">
              <div
                class="main-form"
                style={{ borderRadius: "15px", width: "170%" }}
              >
                <div class="card-body p-4 p-md-5">
                  <form onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            class="form-control form-control-lg"
                            placeholder="Name"
                            name="name"
                            ref={name}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="email"
                            class="form-control form-control-lg"
                            placeholder="Email"
                            name="email"
                            ref={email}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2 w-100">
                        <div class="form-outline">
                          <input
                            type="text"
                            id="designation"
                            class="form-control form-control-lg"
                            placeholder="Designation"
                            name="designation"
                            ref={designation}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <input
                            type="password"
                            id="phoneNumber"
                            class="form-control form-control-lg"
                            placeholder="Password"
                            name="password"
                            ref={password}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-outline">
                          <input
                            type="password"
                            id="phoneNumber"
                            class="form-control form-control-lg"
                            placeholder="Confirm Password"
                            name="passwordConfirm"
                            ref={passwordConfirm}
                          />
                        </div>
                      </div>
                    </div>

                    <Multiselect
                      options={select}
                      displayValue="option"
                      onSelect={(list, item) => setSelectedOption(list)}
                      onRemove={(list, item) => setSelectedOption(list)}
                      value={select.option}
                      name="select"
                    />

                    <div className="d-flex justify-content-center">
                      <div class=" mt-4 pt-2 me-3">
                        <button
                          className="btn btn-primary"
                          style={{
                            display: "flex",
                            width: 140,
                            height: 31,
                            background:
                              "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
                            borderRadius: "64px",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {" "}
                          Reset
                        </button>
                      </div>
                      <div class=" mt-4 pt-2">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          style={{
                            display: "flex",
                            width: 140,
                            height: 31,
                            background:
                              "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
                            borderRadius: "64px",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {" "}
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddNewUser;
