import React from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Stack,
  Typography,
  MenuItem,
  Menu,
  Fade,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import styles from "../singleClinic/SingleClinic.module.css";

const SingleClinicForApproved = (props) => {
  // console.log(props.clinic);

  const handleApprove = async (id) => {
    try {
      const res = await axios.get(`/api/v1/admin/approved/clinic/${id}`);
      props.getClinicsDate();

      props.setOpenSnackbar(true);
      props.setMessage(res.data.message);
      props.setSeverity("success");
    } catch (error) {
      props.setOpenSnackbar(true);
      props.setMessage(error.response.data.message);
      props.setSeverity("error");
      // console.log(id);
    }
  };

  return (
    <>
      <div
        style={{
          width: "300px",
          boxShadow: "2px 2px 20px 2px rgb(176,176,176)",
          borderRadius: "20px",
          overflow: "hidden",
          color: "white",
          padding: "0",
        }}
      >
        <img
          src={
            props.clinic.profilePhoto
              ? `/api/v1/admin/get/photo/${props.clinic.profilePhoto}`
              : "/images/user.jpg"
          }
          alt="patient"
          style={{
            width: "100%",
            height: "180px",
            objectFit: "fill",
            paddingLeft: "0",
            paddingRight: "0",
          }}
          className="rounded"
        />
        <div className="row name-number rounded">
          <div className="col">
            <h6 style={{ color: "white", fontSize: "1.2rem" }}>
              {props.clinic.name}
            </h6>
            <p className="details" style={{ color: "white", fontSize: "1rem" }}>
              Phone: {props.clinic.phoneNumber}
            </p>
          </div>
        </div>
        <div
          className="card-body"
          style={{
            backgroundImage:
              "linear-gradient(to right,rgb(78,190,200),rgb(65,90,159))",
            color: "white",
            width: "100%",
          }}
        >
          <p className="details" styles={{ color: "white" }}>
            Email: {props.clinic.email}
          </p>
          <p className="details" styles={{ color: "white" }}>
            {" "}
            Rating: {Math.trunc(props.clinic.averageRating)} reviewsCount{" "}
            {props.clinic.reviewsCount}
          </p>
          <div className="row" style={{ marginBottom: "15px" }}>
            <div className="col d-flex justify-content-evenly">
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => handleApprove(props.clinic._id)}
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  // return (
  //     <Box
  //         sx={{
  //             width: "80%",
  //             height: 113,
  //             borderRadius: "13.36px",
  //             border: "2px solid #0089FF",
  //             background: "#fff",
  //         }}
  //         margin={{
  //             lg: "10px 30px",
  //             md: "5xp 10px",
  //             sm: "5px 10px",
  //             xs: "5px 10px",
  //         }}
  //     >
  //         <Grid
  //             container
  //             direction="row"
  //             alignItems="center"
  //             width="100%"
  //             height="100%"
  //             wrap="nowrap"
  //             position="relative"
  //         >
  //             <Grid item pr="20.78px" pl="9.8px">
  //                 <img
  //                     src={
  //                         props.clinic.profilePhoto
  //                             ? `/api/v1/admin/get/photo/${props.clinic.profilePhoto}`
  //                             : "/images/user.jpg"
  //                     }
  //                     alt="patient"
  //                     className={styles.image}
  //                 />
  //             </Grid>
  //             <Grid item>
  //                 <Stack direction="column">
  //                     <Typography
  //                         variant="h6"
  //                         sx={{
  //                             fontFamily: "'Rubik', sans-serif",
  //                             fontWeight: 500,
  //                             color: "#5B6889",
  //                             fontSize: "16.92px",
  //                         }}
  //                     >
  //                         {props.clinic.name}
  //                     </Typography>
  //                     <Typography
  //                         variant="body1"
  //                         sx={{
  //                             fontFamily: "'Rubik', sans-serif",
  //                             fontWeight: 400,
  //                             fontStyle: "italic",
  //                             fontSize: "12.46px",
  //                             color: "#7890A0",
  //                         }}
  //                     >
  //                         Phone: {props.clinic.phoneNumber}
  //                     </Typography>
  //                     <Typography
  //                         variant="body1"
  //                         sx={{
  //                             fontFamily: "'Rubik', sans-serif",
  //                             fontWeight: 400,
  //                             fontStyle: "italic",
  //                             fontSize: "12.46px",
  //                             color: "#7890A0",
  //                         }}
  //                     >
  //                         Email: {props.clinic.email}
  //                     </Typography>
  //                 </Stack>
  //             </Grid>
  //             <Grid item className="mx-3">
  //                 <Stack direction="column">
  //                     <Typography
  //                         variant="body1"
  //                         sx={{
  //                             fontFamily: "'Rubik', sans-serif",
  //                             fontWeight: 400,
  //                             fontStyle: "italic",
  //                             fontSize: "12.46px",
  //                             color: "#7890A0",
  //                         }}
  //                     >
  //                         Rating: {Math.trunc(props.clinic.averageRating)} reviewsCount{" "}
  //                         {props.clinic.reviewsCount}
  //                     </Typography>
  //                 </Stack>
  //             </Grid>
  //             <MoreVertIcon
  //                 fontSize="small"
  //                 className={styles.more}
  //                 onClick={handleClick}
  //             />
  //         </Grid>
  //         <Menu
  //             id="fade-menu"
  //             MenuListProps={{
  //                 "aria-labelledby": "fade-button",
  //             }}
  //             anchorEl={anchorEl}
  //             open={open}
  //             onClose={handleClose}
  //             TransitionComponent={Fade}
  //         >
  //             <MenuItem onClick={handleClose}>Edit</MenuItem>

  //             <MenuItem onClick={() => handleApprove(props.clinic._id)}>
  //                 Approved
  //             </MenuItem>
  //         </Menu>
  //     </Box>
  // );
};

export default SingleClinicForApproved;
