import React from "react";
import axios from "axios";

// import styles from "./SingleDoctorForApproved.module.css";

const SingleDoctorForApproved = (props) => {
  // console.log(props);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleApprove = async (id) => {
    try {
      const res = await axios.get(`/api/v1/admin/approved/doctor/${id}`);
      setAnchorEl(null);
      props.getDoctorsDate();
      props.setOpenSnackbar(true);
      props.setMessage(res.data.message);
      props.setSeverity("success");
    } catch (error) {
      props.setOpenSnackbar(true);
      props.setMessage(error.response.data.message);
      props.setSeverity("error");
    }
  };

  //shivam

  //shivam

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
            props.doctor.photo
              ? `/api/v1/admin/get/photo/${props.doctor.photo}`
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
              {props.doctor.fullName}
            </h6>
            <p className="details" style={{ color: "white", fontSize: "1rem" }}>
              Phone: {props.doctor.phone}
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
            Email: {props.doctor.email}
          </p>
          <p className="details" styles={{ color: "white" }}>
            Specialist: {props.doctor.specialist}
          </p>
          <p className="details" styles={{ color: "white" }}>
            Department: {props.doctor.department}
          </p>
          <p className="details" styles={{ color: "white" }}>
            Experience: {props.doctor.experience}
          </p>
          <p className="details" styles={{ color: "white" }}>
            {" "}
            Rating: {Math.trunc(props.doctor.averageRating)} reviewsCount{" "}
            {props.doctor.reviewsCount}
          </p>

          <div className="row">
            <div className="col d-flex justify-content-evenly">
              {props.doctor.approved ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleApprove(props.doctor._id)}
                >
                  Unapproved
                </button>
              ) : (
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => handleApprove(props.doctor._id)}
                >
                  Approved
                </button>
              )}

              <button type="button" className="btn btn-secondary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    /* <Box
      sx={{
        width: "80%",
        height: 113,
        borderRadius: "13.36px",
        border: "2px solid #0089FF",
        background: "#fff",
      }}
      margin={{
        lg: "10px 30px",
        md: "5xp 10px",
        sm: "5px 10px",
        xs: "5px 10px",
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        // justifyContent="center"
        width="100%"
        height="100%"
        wrap="nowrap"
        position="relative"
      >
        <Grid item pr="20.78px" pl="9.8px">
          <img
            src={
              props.doctor.photo
                ? `/api/v1/admin/get/photo/${props.doctor.photo}`
                : "/images/user.jpg"
            }
            alt="patient"
            className={styles.image}
          />
        </Grid>
        <Grid item>
          <Stack direction="column">
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 500,
                color: "#5B6889",
                fontSize: "16.92px",
              }}
            >
              {props.doctor.fullName}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "12.46px",
                color: "#7890A0",
              }}
            >
              Phone: {props.doctor.phone}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "12.46px",
                color: "#7890A0",
              }}
            >
              Email: {props.doctor.email}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "12.46px",
                color: "#7890A0",
              }}
            >
              Specialist: {props.doctor.specialist}
            </Typography>
          </Stack>
        </Grid>

  -------- new line -------------
        <Grid item className="mx-3">
          <Stack direction="column">
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "12.46px",
                color: "#7890A0",
              }}
            >
              Department: {props.doctor.department}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "12.46px",
                color: "#7890A0",
              }}
            >
              Experience: {props.doctor.experience}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "12.46px",
                color: "#7890A0",
              }}
            >
              Rating: {Math.trunc(props.doctor.averageRating)} reviewsCount{" "}
              {props.doctor.reviewsCount}
            </Typography>
          </Stack>
        </Grid>
        <MoreVertIcon
          fontSize="small"
          className={styles.more}
          onClick={handleClick}
        />
      </Grid>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
      -------------- <MenuItem onClick={handleClose}>Delete</MenuItem> -----

        <MenuItem onClick={() => handleApprove(props.doctor._id)}>
          Approved
        </MenuItem>
      </Menu>
    </Box> */
  );
};

export default SingleDoctorForApproved;
