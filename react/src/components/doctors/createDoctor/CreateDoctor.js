import React, { useState, useEffect, useRef } from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import styles from "../newDoctor/NewDoctor.module.css";
import axios from "axios";
import SnackbarComponent from "../../snackBar/SnackbarComponent";

import PlacesAutocomplete from "./PlacesAutocomplete";
const CreateDoctor = () => {
  const [departmentData, setDepartmentData] = useState([]);
  const [specialistData, setSpecialistData] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const nums = "+91";

  const [imgData, setImgData] = useState({
    file: [],
  });

  const handleImgChange = (e) => {
    setImgData({
      ...imgData,
      file: e.target.files[0],
    });
  };

  const getDepartment = async () => {
    try {
      const res = await axios.get("/api/v1/admin/department");
      setDepartmentData(res.data.data.departments);
    } catch (error) {}
  };
  const getSpecialist = async () => {
    try {
      const res = await axios.get("/api/v1/admin/specialist");
      setSpecialistData(res.data.data.specialists);
    } catch (error) {}
  };

  useEffect(() => {
    getDepartment();
    getSpecialist();
  }, []);

  const fullName = useRef(null);
  const email = useRef(null);
  const department = useRef(null);
  const specialist = useRef(null);
  const experience = useRef(null);
  const phone = useRef(null);
  const sex = useRef(null);
  const male = useRef(false);
  const female = useRef(false);
  const other = useRef(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("/api/v1/admin/create/doctor", {
        fullName: fullName.current.value,
        email: email.current.value,
        department: department.current.value,
        specialist: specialist.current.value,
        experience: experience.current.value,
        phone: nums + phone.current.value,
        sex: male.current.checked
          ? "male"
          : female.current.checked
          ? "female"
          : other.current.checked
          ? "other"
          : undefined,
        coordinates: coordinates,
      });

      console.log(res);

      let formData2 = new FormData();
      formData2.append("docImg", imgData.file);
      const res2 = await axios.post(
        `/api/v1/admin/upload/doctor/${res.data.doctor._id}`,
        formData2,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      fullName.current.value = null;
      email.current.value = null;
      department.current.value = null;
      specialist.current.value = null;
      experience.current.value = null;
      phone.current.value = null;

      male.current.checked = false;
      female.current.checked = false;
      other.current.checked = false;
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
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
          CreateDoctor
        </Typography>
      </Box>

      <section className="vh-100 gradient-custom w-100">
        <div className="container py-0 h-100">
          <div className="row ">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className={styles.mainForm}
                style={{ borderRadius: "15px", width: "170%" }}
              >
                <div className="card-body p-4 p-md-5">
                  <form onSubmit={submitHandler}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1">Enter full Name</h6>
                          <input
                            type="text"
                            id="fullName"
                            className="form-control form-control-lg  "
                            placeholder="Enter full Name"
                            ref={fullName}
                            required
                          />
                        </div>
                      </div>

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
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1">Select Department</h6>

                          <select
                            className="form-select form-select-lg "
                            aria-label="Select Department"
                            ref={department}
                            required
                          >
                            <option>Select Department</option>
                            {departmentData.map((item) => (
                              <option key={item._id} value={item.name}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1">Select Specialist</h6>
                          <select
                            className="form-select form-select-lg "
                            aria-label="Default select example"
                            ref={specialist}
                            required
                          >
                            <option>Select Specialist</option>
                            {specialistData.map((item) => (
                              <option value={item.name}>{item.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1">Experience</h6>

                          <select
                            className="form-select form-select-lg "
                            aria-label="Experience"
                            ref={experience}
                            required
                          >
                            <option>Select Experience</option>

                            <option value="1 Year">1 Year</option>
                            <option value="2 Years">2 Years</option>
                            <option value="3 Years">3 Years</option>
                            <option value="4 Years">4 Years</option>
                            <option value="5 Years">5 Years</option>
                            <option value="6 Years">6 Years</option>
                            <option value="7 Years">7 Years</option>
                            <option value="8 Years">8 Years</option>
                            <option value="9 Years">9 Years</option>
                            <option value="10 Years">10 Years</option>
                            <option value="11 Years">11 Years</option>
                            <option value="12 Years">12 Years</option>
                            <option value="13 Years">13 Years</option>
                            <option value="14 Years">14 Years</option>
                            <option value="15 Years">15 Years</option>
                            <option value="16 Years">16 Years</option>
                            <option value="17 Years">17 Years</option>
                            <option value="18 Years">18 Years</option>
                            <option value="19 Years">19 Years</option>
                            <option value="20 Years">20+ Years</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1">Mobile Number</h6>

                          <div className="col-auto">
                            <label
                              className="visually-hidden"
                              for="autoSizingInputGroup"
                            >
                              +91
                            </label>
                            <div className="input-group">
                              <div className="input-group-text"> +91</div>
                              <input
                                type="text"
                            id="phone"
                            className="form-control form-control-lg "
                            placeholder="+91 Mobile Number"
                            maxLength={15}
                            minLength={10}
                            ref={phone}
                            required
                              />
                            </div>
                          </div>

                          {/* <input
                            type="text"
                            id="phone"
                            className="form-control form-control-lg "
                            placeholder="Mobile Number"
                            maxLength={15}
                            minLength={10}
                            ref={phone}
                            required
                          /> */}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1">Address</h6>

                          <PlacesAutocomplete setCoordinates={setCoordinates} />
                        </div>
                      </div>

                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <h6 className="mb-2 pb-1">Select Doctors Image</h6>

                          <input
                            onChange={handleImgChange}
                            type="file"
                            id="file"
                            className="form-control form-control-lg "
                            placeholder="Doctors image"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="male"
                            ref={male}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="maleGender"
                          >
                            Male
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="female"
                            ref={female}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            female
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            value="other"
                            ref={other}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="otherGender"
                          >
                            Other
                          </label>
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
                      >
                        Reset
                      </Button>
                      <button
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
                          marginLeft: "10%",
                          color: "#fff",
                        }}
                        variant="filled"
                      >
                        Submit
                      </button>
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

export default CreateDoctor;
