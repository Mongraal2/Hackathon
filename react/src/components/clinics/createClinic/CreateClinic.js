import React, { useState, useRef } from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import axios from "axios";
import PlacesAutocomplete from "./PlacesAutocomplete";
import SnackbarComponent from "../../snackBar/SnackbarComponent";
const CreateClinic = () => {
  const [addressData, setAddressData] = useState([]);
  //   const [specialistData, setSpecialistData] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const nums = "+91";

  const [imgData, setImgData] = useState({
    file: [],
  });

  const handleImgChange = (e) => {
    // console.log(e.target.files[0]);
    setImgData({
      ...imgData,
      file: e.target.files[0],
    });
  };

  const name = useRef(null);
  const userName = useRef(null);
  const email = useRef(null);
  const phoneNumber = useRef(null);

  const password = useRef(null);
  const passwordConfirm = useRef(null);
  const resetHandler = () => {
    name.current.value = null;
    userName.current.value = null;
    email.current.value = null;
    phoneNumber.current.value = null;
    password.current.value = null;
    passwordConfirm.current.value = null;
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("/api/v1/admin/create/clinic", {
        name: name.current.value,
        userName: userName.current.value,
        email: email.current.value,
        phoneNumber: nums + phoneNumber.current.value,
        password: password.current.value,
        passwordConfirm: passwordConfirm.current.value,
        address: addressData,
        coordinates: coordinates,
      });

      let formData2 = new FormData();
      formData2.append("clinicImg", imgData.file);
      const res2 = await axios.post(
        `/api/v1/admin/upload/clinic/${res.data.clinic._id}`,
        formData2,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
      name.current.value = null;
      userName.current.value = null;
      email.current.value = null;
      phoneNumber.current.value = null;
      password.current.value = null;
      passwordConfirm.current.value = null;
      setAddressData("");
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
          Create Clinic
        </Typography>
      </Box>
      <section className="vh-100 gradient-custom w-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 d-flex justify-content-center ">
              <div style={{ borderRadius: "15px", width: "" }}>
                <div className="card-body p-4 p-md-5">
                  <form onSubmit={submitHandler}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1">Enter Name</h6>
                          <input
                            type="text"
                            id="fullName"
                            className="form-control form-control-lg  "
                            placeholder="Enter Name"
                            required
                            ref={name}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1">Enter UserName</h6>
                          <input
                            type="text"
                            id="userName"
                            className="form-control form-control-lg  "
                            placeholder="Enter UserName"
                            required
                            ref={userName}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1">Enter E-mail</h6>
                          <input
                            type="text"
                            id="emailAddress"
                            className="form-control form-control-lg  "
                            placeholder="Enter E-mail"
                            ref={email}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1">Phone Number</h6>

                          <div className="col-auto">
                            <label
                              className="visually-hidden"
                              for="autoSizingInputGroup"
                            >
                              +91
                            </label>
                            <div className="input-group">
                              <div className="input-group-text">+91</div>
                              <input
                                type="text"
                            id="phone"
                            className="form-control form-control-lg "
                            placeholder="+91 Phone Number"
                            ref={phoneNumber}
                            minLength={10}
                            required
                              />
                            </div>
                          </div>

                          {/* <input
                            type="text"
                            id="phone"
                            className="form-control form-control-lg "
                            placeholder="+91 Phone Number"
                            ref={phoneNumber}
                            minLength={10}
                            required
                          /> */}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1">Address</h6>

                          <PlacesAutocomplete
                            setCoordinates={setCoordinates}
                            setAddressData={setAddressData}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1">Select Clinic's Image</h6>

                          <input
                            onChange={handleImgChange}
                            type="file"
                            id="file"
                            className="form-control form-control-lg "
                            placeholder="Clinic's image"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1">Password</h6>

                          <input
                            type="password"
                            id="Password"
                            ref={password}
                            className="form-control form-control-lg "
                            placeholder="Password"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1">Confirm Password</h6>

                          <input
                            type="password"
                            id="PasswordConfirm"
                            ref={passwordConfirm}
                            className="form-control form-control-lg "
                            placeholder="PasswordConfirm"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      marginBottom={3}
                    >
                      <Button
                        sx={{
                          width: "90px",
                          height: "33px",
                          background: "#F6F6FF",
                          border: "1px solid #3E4095",
                          borderRadius: "64px",
                          fontFamily: "Montserrat",
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: "16px",
                          lineHeight: "20px",
                          marginRight: "10%",
                        }}
                        variant="filled"
                        onClick={resetHandler}
                      >
                        Reset
                      </Button>

                      <Button
                        type="submit"
                        style={{
                          width: "90px",
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
                          marginLeft: "10%",
                        }}
                        variant="filled"
                      >
                        Submit
                      </Button>
                    </Grid>
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

export default CreateClinic;
