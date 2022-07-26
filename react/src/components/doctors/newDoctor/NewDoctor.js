// import React from "react";

// import {
//   Stack,
//   Typography,
//   TextField,
//   Box,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Button,
//   Grid,
// } from "@mui/material";
// import { FileUploader } from "react-drag-drop-files";

// import c from "./NewDoctor.module.css";
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// const fileTypes = ["JPEG", "PNG", "GIF"];

// const NewDoctor = () => {
//   const [file, setFile] = React.useState(null);
//   const [value, setValue] = React.useState(null);
//   const handleChange = (file) => {
//     setFile(file);
//   };
//   return (
//     <>
//       <Stack direction="row">
//         <Box
//           alignItems="center"
//           justifyContent="center"
//           sx={{
//             display: "flex",
//             width: 140,
//             height: 31,
//             background:
//               "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
//             borderRadius: "64px",
//           }}
//           margin={{
//             lg: "10px 30px",
//             md: "5xp 10px",
//             sm: "5px 10px",
//             xs: "5px 10px",
//           }}
//         >
//           <Typography
//             sx={{
//               fontFamily: "Montserrat",
//               fontStyle: "normal",
//               fontWeight: 500,
//               fontSize: "13px",
//               lineHeight: "16px",
//               color: "#fff",
//             }}
//           >
//             Doctor's List
//           </Typography>
//         </Box>
//         <Box
//           alignItems="center"
//           justifyContent="center"
//           sx={{
//             display: "flex",
//             width: 140,
//             height: 31,
//             background:
//               "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
//             borderRadius: "64px",
//           }}
//           margin={{
//             lg: "10px 10px",
//             md: "5xp 10px",
//             sm: "5px 10px",
//             xs: "5px 10px",
//           }}
//         >
//           <Typography
//             sx={{
//               fontFamily: "Montserrat",
//               fontStyle: "normal",
//               fontWeight: 500,
//               fontSize: "13px",
//               lineHeight: "16px",
//               color: "#fff",
//             }}
//           >
//             Add Doctor
//           </Typography>
//         </Box>
//       </Stack>
//       <Stack direction="row" padding="10px" sx={{ flexWrap: "wrap" }}>
//         <TextField
//           id="filled-basic"
//           variant="outlined"
//           size="small"
//           width={{ xs: "100%" }}
//           sx={{
//             border: "1px solid black",
//             borderRadius: "4px",
//             width: "500px",
//             marginBottom: "20px",
//             marginRight: "20px",
//           }}
//           placeholder="Enter First Name"
//           className={c.field}
//         />
//         <TextField
//           id="filled-basic"
//           variant="outlined"
//           size="small"
//           sx={{
//             border: "1px solid black",
//             borderRadius: "4px",
//             width: "500px",
//             marginBottom: "20px",
//             marginRight: "20px",
//           }}
//           width="332px !important"
//           placeholder="Enter Last Name"
//         />

//         <TextField
//           id="filled-basic"
//           variant="outlined"
//           size="small"
//           sx={{
//             border: "1px solid black",
//             borderRadius: "4px",
//             width: "500px",
//             marginBottom: "20px",
//             marginRight: "20px",
//           }}
//           placeholder="Enter Email Address"
//         />
//         <TextField
//           id="filled-basic"
//           variant="outlined"
//           size="small"
//           sx={{
//             border: "1px solid black",
//             borderRadius: "4px",
//             width: "500px",
//             marginBottom: "20px",
//             marginRight: "20px",
//           }}
//           width="332px !important"
//           placeholder="Create Password"
//         />

//         <TextField
//           id="filled-basic"
//           variant="outlined"
//           size="small"
//           sx={{
//             border: "1px solid black",
//             borderRadius: "4px",
//             width: "500px",
//             marginBottom: "20px",
//             marginRight: "20px",
//           }}
//           placeholder="Designation"
//         />
//         <TextField
//           id="filled-basic"
//           variant="outlined"
//           size="small"
//           sx={{
//             border: "1px solid black",
//             borderRadius: "4px",
//             width: "500px",
//             marginBottom: "20px",
//             marginRight: "20px",
//           }}
//           width="332px !important"
//           placeholder="Department"
//         />

//         <TextField
//           id="filled-basic"
//           variant="outlined"
//           size="small"
//           sx={{
//             border: "1px solid black",
//             borderRadius: "4px",
//             width: "500px",
//             marginBottom: "20px",
//             marginRight: "20px",
//           }}
//           placeholder="Speciality"
//         />
//         <TextField
//           id="filled-basic"
//           variant="outlined"
//           size="small"
//           sx={{
//             border: "1px solid black",
//             borderRadius: "4px",
//             width: "500px",
//             marginBottom: "20px",
//             marginRight: "20px",
//           }}
//           width="332px !important"
//           placeholder="Experience"
//         />

//         <TextField
//           id="filled-basic"
//           variant="outlined"
//           size="small"
//           sx={{
//             border: "1px solid black",
//             borderRadius: "4px",
//             width: "500px",
//             marginBottom: "20px",
//             marginRight: "20px",
//           }}
//           placeholder="Address"
//         />
//         <TextField
//           id="filled-basic"
//           variant="outlined"
//           size="small"
//           sx={{
//             border: "1px solid black",
//             borderRadius: "4px",
//             width: "500px",
//             marginBottom: "20px",
//             marginRight: "20px",
//           }}
//           width="332px !important"
//           placeholder="Mobile Number"
//         />
//         <Grid container>
//           <Box
//             sx={{
//               border: "1px solid black",
//               padding: "10px",
//               marginBottom: "20px",
//               marginRight: "20px",
//             }}
//           >
//             <Stack direction="column" spacing={1}>
//               <Typography variant="body1">Upload Profile Picture</Typography>
//               <FileUploader
//                 multiple={false}
//                 handleChange={handleChange}
//                 name="file"
//                 types={fileTypes}
//               />
//               <Typography variant="caption">
//                 {file ? `File name: ${file[0].name}` : "no files uploaded yet"}
//               </Typography>
//             </Stack>
//           </Box>
//         </Grid>
//         <TextField
//           id="outlined-multiline-flexible"
//           variant="outlined"
//           fullWidth
//           size="small"
//           multiline={true}
//           maxRows={4}
//           marginRight={{ sm: "10px" }}
//           sx={{
//             border: "1px solid rgba(0, 0, 0, 0.87)",
//             borderRadius: "4px",

//             marginBottom: "20px",
//             marginRight: "80px",
//           }}
//           width="332px !important"
//           placeholder="Short Bio"
//         />

//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//           <DatePicker
//             value={value}
//             placeholder="Date of Birth"
//             onChange={(newValue) => {
//               setValue(newValue);
//             }}
//             renderInput={(params) => (
//               <TextField
//                 size="small"
//                 sx={{
//                   border: "1px solid black",
//                   borderRadius: "4px",
//                   width: "500px",
//                   marginBottom: "20px",
//                   marginRight: "20px !important",
//                 }}
//                 {...params}
//               />
//             )}
//           />
//         </LocalizationProvider>
//         <br />
//         <TextField
//           id="filled-basic"
//           variant="outlined"
//           size="small"
//           sx={{
//             border: "1px solid black",
//             borderRadius: "4px",
//             width: "500px",
//             marginBottom: "20px",
//             marginRight: "20px",
//           }}
//           width="332px !important"
//           placeholder="Blood Group"
//         />
//         <Grid container>
//           <FormControl
//             sx={{
//               marginBottom: "30px",
//               marginRight: "20px",
//             }}
//           >
//             <FormLabel id="demo-row-radio-buttons-group-label">
//               Gender
//             </FormLabel>
//             <RadioGroup
//               row
//               aria-labelledby="demo-row-radio-buttons-group-label"
//               name="row-radio-buttons-group"
//             >
//               <FormControlLabel
//                 value="female"
//                 control={<Radio />}
//                 label="Female"
//               />
//               <FormControlLabel value="male" control={<Radio />} label="Male" />
//               <FormControlLabel
//                 value="other"
//                 control={<Radio />}
//                 label="Other"
//               />
//             </RadioGroup>
//           </FormControl>
//         </Grid>
//         <br></br>
//         <Grid
//           container
//           direction="row"
//           justifyContent="center"
//           marginBottom={3}
//         >
//           <Button
//             sx={{
//               width: "90px",
//               height: "33px",
//               background: "#F6F6FF",
//               border: "1px solid #3E4095",
//               borderRadius: "64px",
//               fontFamily: "Montserrat",
//               fontStyle: "normal",
//               fontWeight: 500,
//               fontSize: "16px",
//               lineHeight: "20px",
//               marginRight: "10px",
//             }}
//             variant="filled"
//           >
//             Reset
//           </Button>
//           <Button
//             sx={{
//               width: "90px",
//               height: "33px",
//               background:
//                 "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
//               border: "1px solid #3E4095",
//               borderRadius: "64px",
//               fontFamily: "Montserrat",
//               fontStyle: "normal",
//               fontWeight: 500,
//               fontSize: "16px",
//               lineHeight: "20px",
//               color: "#fff",
//             }}
//             variant="filled"
//           >
//             Submit
//           </Button>
//         </Grid>
//       </Stack>
//     </>
//   );
// };

// export default NewDoctor;

/*
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField, Typography } from "@mui/material";

const NewDoctor = ({ open, handleClose, data }) => {
  const [error, setError] = React.useState(null);
  const fNameRef = React.useRef();
  const lNameRef = React.useRef();
  const descriptionRef = React.useRef();
  const addressRef = React.useRef();
  const phoneRef = React.useRef();
  const logoRef = React.useRef();
  const clinicRef = React.useRef();

  const onSubmit = () => {
    const fName = fNameRef.current.value;
    const lName = lNameRef.current.value;
    const description = descriptionRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    const clinic = clinicRef.current.value;
    const logo = logoRef.current.value;

    if (!fName && fName === "") {
      return setError("First Name can't be empty");
    } else if (!lName && lName === "") {
      return setError("Last Name can't be empty");
    } else if (!description && description === "") {
      return setError("description can't be empty");
    } else if (!phone && phone === "") {
      return setError("Phone Number can't be empty");
    } else if (phone.length < 10) {
      return setError("Invalid Phone Number");
    } else if (!address && address === "") {
      return setError("Address can't be empty");
    } else if (!clinic && clinic === "") {
      return setError("Clinic can't be empty");
    } else if (!logo && logo === "") {
      return setError("logo can't be empty");
    }

    setError(null);

    const data = { fName, lName, description, phone, address, logo, clinic };

    fNameRef.current.value = "";
    descriptionRef.current.value = "";
    phoneRef.current.value = "";
    addressRef.current.value = "";
    logoRef.current.value = "";
    handleClose();
  };

  const onCancel = () => {
    fNameRef.current.value = "";
    descriptionRef.current.value = "";
    phoneRef.current.value = "";
    addressRef.current.value = "";
    logoRef.current.value = "";
    handleClose();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{data.text}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description"></DialogContentText>

        <TextField
          autoFocus
          margin="dense"
          id="fName"
          label="First Name"
          type="text"
          style={{ marginRight: "10px" }}
          value={data.fName}
          variant="standard"
          inputRef={fNameRef}
        />
        <TextField
          autoFocus
          margin="dense"
          id="lName"
          label="Last Name"
          type="text"
          value={data.lName}
          variant="standard"
          inputRef={lNameRef}
        />

        <TextField
          margin="dense"
          id="description"
          label="Description"
          type="text"
          value={data.description}
          fullWidth
          variant="standard"
          inputRef={descriptionRef}
        />
        <TextField
          fullwidth
          margin="dense"
          id="phone"
          label="Contact Details"
          type="text"
          value={data.contact}
          variant="standard"
          inputRef={phoneRef}
        />
        <TextField
          margin="dense"
          id="addresss"
          label="Addresss"
          type="text"
          value={data.address}
          fullWidth
          variant="standard"
          inputRef={addressRef}
        />
        <TextField
          margin="dense"
          id="clinic"
          label="Clinic"
          type="text"
          value={data.clinic}
          style={{ marginBottom: "10px" }}
          fullWidth
          variant="standard"
          inputRef={clinicRef}
        />

        <TextField
          fullwidth
          margin="dense"
          id="logo"
          label="Profile"
          type="file"
          variant="standard"
          sx={{ outline: "none !important", border: "none !important" }}
          inputRef={logoRef}
        />
        {error && (
          <Typography variant="caption" sx={{ color: "red", display: "block" }}>
            *{error}
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button size="small" variant="standard" onClick={onCancel}>
          Cancel
        </Button>
        <Button size="small" variant="contained" onClick={onSubmit} autofocus>
          {data.btnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewDoctor;

*/

import React from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import styles from "../newDoctor/NewDoctor.module.css";
const NewDoctor = () => {
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
          Add Doctor
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
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            className="form-control form-control-lg"
                            placeholder="Enter First Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="lastName"
                            className="form-control form-control-lg"
                            placeholder="Enter Last Name"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="emailAddress"
                            className="form-control form-control-lg"
                            placeholder="Enter E-mail"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="phoneNumber"
                            className="form-control form-control-lg"
                            placeholder="Create Password"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="text"
                            className="form-control form-control-lg"
                            placeholder="Designation"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="text"
                            className="form-control form-control-lg"
                            placeholder="Department"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="text"
                            className="form-control form-control-lg"
                            placeholder="Speciality"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="text"
                            className="form-control form-control-lg"
                            placeholder="Experience"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="text"
                            className="form-control form-control-lg"
                            placeholder="Address"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="phone"
                            id="phone"
                            className="form-control form-control-lg"
                            placeholder="Mobile Number"
                            maxLength={10}
                            minLength={1}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="file"
                            id="file"
                            className="form-control form-control-lg"
                            placeholder="Doctors image"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <textarea
                        className="form-control"
                        id="form4Example3"
                        rows="4"
                        placeholder="Short Biography"
                        required
                      ></textarea>
                    </div>
                    {/* gender */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            Female
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="option2"
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
                            id="otherGender"
                            value="option3"
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
                    {/* gender */}
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
                          marginRight: "10px",
                        }}
                        variant="filled"
                      >
                        Reset
                      </Button>
                      <Button
                        sx={{
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
                        }}
                        variant="filled"
                      >
                        Submit00
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

export default NewDoctor;
