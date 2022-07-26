import React, { useState } from "react";
import { Grid } from "@chakra-ui/react";
import axios from "axios";
import SnackbarComponent from "../../snackBar/SnackbarComponent";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const NewDepartment = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [active, setActive] = useState(false);
  const [imgData, setImgData] = useState({
    file: [],
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  // console.log(active);
  const handleResetClick = () => {
    setDepartmentName("");
  };
  const departmentNameHandle = (event) => {
    setDepartmentName(event.target.value);
  };
  const activeHandle = (event) => {
    // console.log(event.target.value);
    if (event.target.value === "active") {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  const handleImgChange = (e) => {
    // console.log(e.target.files[0]);
    setImgData({
      ...imgData,
      file: e.target.files[0],
    });
  };

  const handleImgSubmit = async () => {
    try {
      const res = await axios.post("/api/v1/admin/department", {
        visibility: active,
        name: departmentName,
      });

      let formData2 = new FormData();
      formData2.append("deptImg", imgData.file);
      console.log(formData2);
      const res2 = await axios.post(
        `/api/v1/admin/department/image/${res.data.department._id}`,
        formData2,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setOpenSnackbar(true);
      setMessage(res.data.message);
      setSeverity("success");
      setDepartmentName("");

      // console.log(res2);
    } catch (error) {
      setOpenSnackbar(true);
      setMessage(error.response.data.message);
      setSeverity("error");
    }
  };

  return (
    <>
      <Stack direction="column" spacing={5}>
        <Stack direction="row">
          <Box
            alignItems="center"
            justifyContent="center"
            sx={{
              display: "flex",
              width: 140,
              height: 31,
              background:
                "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
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
              Add Department
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <SnackbarComponent
        message={message}
        severity={severity}
        open={openSnackbar}
        setOpen={setOpenSnackbar}
      />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 mt-3 ">
            <label for="exampleFormControlInput1" className="form-label">
              Department Name
            </label>
            <input
              type="email"
              className="form-control"
              onChange={departmentNameHandle}
              value={departmentName}
              id="exampleFormControlInput1"
              placeholder="Enter Department Name"
            />
          </div>

          <div class="col-md-8 mt-3">
            <label for="formFile" className="form-label">
              Choose Department Image
            </label>
            <input
              className="form-control"
              onChange={handleImgChange}
              accept="image/*"
              type="file"
              id="formFile"
            />
          </div>

          <div className="col-md-8 mt-3">
            <div className="col-md-6 mb-4">
              <Grid item>
                <FormControl
                  sx={{
                    marginBottom: "30px",
                    marginRight: "20px",
                  }}
                >
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    visibility
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onClick={activeHandle}
                  >
                    <FormControlLabel
                      value="active"
                      control={<Radio />}
                      label="Active"
                    />
                    <FormControlLabel
                      value="inactive"
                      control={<Radio />}
                      label="Inactive"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* <h6 className="mb-2 pb-1"> Visibility: </h6>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="active"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            Active
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="inactive"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="maleGender"
                          >
                            Inactive
                          </label>
                        </div> */}
            </div>
          </div>

          <div class="col-md-8 mt-3 d-flex justify-content-evenly">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleResetClick}
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleImgSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>

    //   <Grid direction="row" padding="10px">
    //     <Grid item>
    //       <TextField
    //         value={departmentName}
    //         onChange={departmentNameHandle}
    //         id="filled-basic"
    //         variant="outlined"
    //         size="small"
    //         width={{ xs: "100%" }}
    //         sx={{
    //           border: "1px solid black",
    //           borderRadius: "4px",
    //           width: "500px",
    //           marginBottom: "20px",
    //           marginRight: "20px",
    //         }}
    //         placeholder="Enter Department Name"
    //       />
    //     </Grid>
    //     <Grid item>
    //       <Input
    //         onChange={handleImgChange}
    //         accept="image/*"
    //         id="contained-button-file"
    //         multiple
    //         type="file"
    //         sx={{
    //           border: "1px solid black",
    //           borderRadius: "4px",
    //           width: "500px",
    //           marginBottom: "20px",
    //           marginRight: "20px",
    //         }}
    //       />
    //     </Grid>

    //     <Grid item>
    //       <FormControl
    //         sx={{
    //           marginBottom: "30px",
    //           marginRight: "20px",
    //         }}
    //       >
    //         <FormLabel id="demo-row-radio-buttons-group-label">
    //           visibility
    //         </FormLabel>
    //         <RadioGroup
    //           row
    //           aria-labelledby="demo-row-radio-buttons-group-label"
    //           name="row-radio-buttons-group"
    //           onClick={activeHandle}
    //         >
    //           <FormControlLabel
    //             value="active"
    //             control={<Radio />}
    //             label="Active"
    //           />
    //           <FormControlLabel
    //             value="inactive"
    //             control={<Radio />}
    //             label="Inactive"
    //           />
    //         </RadioGroup>
    //       </FormControl>
    //     </Grid>
    //   </Grid>
    //   <Grid
    //     display="flex"
    //     container
    //     direction="row"
    //     marginBottom={3}
    //     sx={{ flexDirection: "row" }}
    //   >
    //     <Grid item paddingLeft={10}>
    //       <Button
    //         onClick={handleResetClick}
    //         sx={{
    //           width: "90px",
    //           height: "33px",
    //           background: "#F6F6FF",
    //           border: "1px solid #3E4095",
    //           borderRadius: "64px",
    //           fontFamily: "Montserrat",
    //           fontStyle: "normal",
    //           fontWeight: 500,
    //           fontSize: "16px",
    //           lineHeight: "20px",
    //           marginRight: "10px",
    //         }}
    //         variant="filled"
    //       >
    //         Reset
    //       </Button>
    //     </Grid>
    //     <Grid item>
    //       <Button
    //         onClick={handleImgSubmit}
    //         sx={{
    //           width: "90px",
    //           height: "33px",
    //           background:
    //             "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
    //           border: "1px solid #3E4095",
    //           borderRadius: "64px",
    //           fontFamily: "Montserrat",
    //           fontStyle: "normal",
    //           fontWeight: 500,
    //           fontSize: "16px",
    //           lineHeight: "20px",
    //           color: "#fff",
    //         }}
    //         variant="filled"
    //       >
    //         Submit
    //       </Button>
    //     </Grid>
    //   </Grid>
    // </Stack>
  );
};

export default NewDepartment;
