import React, { useState } from "react";
import axios from "axios";

import "./singleDoc.css";

const SingleDoctor = (props) => {
  // console.log(props);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [data, setData] = useState({

    name: props.doctor.fullName,
    email: props.doctor.email,
    phone: props.doctor.phone,
    specialist: props.doctor.specialist,
    department: props.doctor.department,
    experience: props.doctor.experience


  });





  return (
    <>
      <div style={{ width: "350px", boxShadow: "2px 2px 20px 2px rgb(176,176,176)", borderRadius: "20px", overflow: "hidden", color: "white", padding: "0" }}>
        <img
          src={
            props.doctor.photo
              ? `/api/v1/admin/get/photo/${props.doctor.photo}`
              : "/images/user.jpg"
          }
          alt="patient"
          style={{
            width: "100%", height: "180px", objectFit: "fill", paddingLeft: "0", paddingRight: "0"
          }}
          className="rounded"
        />
        <div className="row name-number rounded" style={{ }}>
          <div className="col" style={{backgroundColor:'rgba(9, 6, 6, 0.4)',}}>
            <h6 style={{ color: '#F9F3EE', fontSize: '1.2rem' }}>{props.doctor.fullName}</h6>
            <p className="details" style={{ color: '#F9F3EE', fontSize: '1rem' }}>Phone: {props.doctor.phone}</p>
          </div>
        </div>
        <div className="card-body" style={{ backgroundImage: "linear-gradient(to right,rgb(78,190,200),rgb(65,90,159))", color: "white", width: "100%" }}>

          <p className="details">Email: {props.doctor.email}</p>
          <p className="details">Specialist: {props.doctor.specialist}</p>
          <p className="details">Department: {props.doctor.department}</p>
          <p className="details">Experience: {props.doctor.experience}</p>
          <p className="details">
            {" "}
            Rating: {Math.trunc(props.doctor.averageRating)} reviewsCount{" "}
            {props.doctor.reviewsCount}
          </p>

        </div>
      </div>
    </>

    /*
    <div className="container">
      <div
        className="row m-3 p-1 d-flex justify-content-center align-items-center"
        style={{
          border: "1px solid blue",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <div className="col-md-1 p-4 dropdown btn-more-sm ">
          <label
            className="border-none more"
            type=""
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <MoreVertIcon
              fontSize="small"
              className={styles.more}
              onClick={handleClick}
            />
          </label>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {props.doctor.block ? (
              <li>
                <Link
                  className="dropdown-item"
                  to="/"
                  onClick={() => handleUnBlock(props.doctor._id)}
                >
                  Unblock
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  className="dropdown-item"
                  to="/"
                  onClick={() => handleBlock(props.doctor._id)}
                >
                  Block
                </Link>
              </li>
            )}

            <li>
              <Link className="dropdown-item" to="/">
                Delete
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-3 p-3 bg d-flex justify-content-center">
          <img
            src={
              props.doctor.photo
                ? `/api/v1/admin/get/photo/${props.doctor.photo}`
                : "/images/user.jpg"
            }
            alt="patient"
            className={styles.image}
          />
        </div>

        <div className="col-md-4 p-4">
          <h6>{props.doctor.fullName}</h6>
          <p>Phone: {props.doctor.phone}</p>
          <p>Email: {props.doctor.email}</p>
          <p>Specialist: {props.doctor.specialist}</p>
        </div>

        <div className="col-md-4 p-4 ">
          <p>Department: {props.doctor.department}</p>
          <p>Experience: {props.doctor.experience}</p>
          <p>
            {" "}
            Rating: {Math.trunc(props.doctor.averageRating)} reviewsCount{" "}
            {props.doctor.reviewsCount}
          </p>
        </div>

        <div className="col-md-1 p-4 dropdown btn-more-md">
          <label
            className="border-none more"
            type=""
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <MoreVertIcon
              fontSize="small"
              className={styles.more}
              onClick={handleClick}
            />
          </label>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {props.doctor.block ? (
              <li>
                <Link
                  className="dropdown-item"
                  to="/"
                  onClick={() => handleUnBlock(props.doctor._id)}
                >
                  Unblock
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  className="dropdown-item"
                  to="/"
                  onClick={() => handleBlock(props.doctor._id)}
                >
                  Block
                </Link>
              </li>
            )}

            <li>
              <Link className="dropdown-item" to="/">
                Delete
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
*/

    //shivam

    /* <Box
      sx={{
        width: "80%",
        minHeight: 113,
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
        wrap="wrap"
        position="relative"
      >
        <Grid item pr="20.78px" pl="9.8px" >
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

        ------ new line -----
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
        <EditDoctorModal />

        ----<MenuItem onClick={handleClose}>Delete</MenuItem> ------
        {props.doctor.block ? (
          <MenuItem onClick={() => handleUnBlock(props.doctor._id)}>
            Un Block
          </MenuItem>
        ) : (
          <MenuItem onClick={() => handleBlock(props.doctor._id)}>
            Block
          </MenuItem>
        )}
      </Menu>
    </Box> */
  );
};

export default SingleDoctor;
