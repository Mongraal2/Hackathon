import React, { useState } from "react";
import axios from "axios";
import "./singleClinic.css";

const SingleClinic = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [data, setData] = useState({
    name: props.clinic.fullName,
    email: props.clinic.email,
    phone: props.clinic.phoneNumber,
  });
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBlock = async (id) => {
    try {
      const res = await axios.get(`/api/v1/admin/block/clinic/${id}`);
      setAnchorEl(null);
      props.getClinicsDate();
      props.setOpenSnackbar(true);
      props.setMessage(res.data.message);
      props.setSeverity("success");
    } catch (error) {
      props.setOpenSnackbar(true);
      props.setMessage(error.response.data.message);
      props.setSeverity("error");
    }
  };

  const handleUnBlock = async (id) => {
    try {
      const res = await axios.get(`/api/v1/admin/unblock/clinic/${id}`);
      setAnchorEl(null);
      props.getClinicsDate();
      props.setOpenSnackbar(true);
      props.setMessage(res.data.message);
      props.setSeverity("success");
    } catch (error) {
      props.setOpenSnackbar(true);
      props.setMessage(error.response.data.message);
      props.setSeverity("error");
    }
  };
  const inputhandle = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <>
      <div
        style={{
          width: "360px",
         
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
           
            objectFit: "fill",
            paddingLeft: "0",
            paddingRight: "0",
          }}
        />
        <div className="row name-number rounded" style={{}}>
          <div
            className="col"
            style={{ backgroundColor: "rgba(9, 6, 6, 0.4)" }}
          >
            <h6 style={{ color: "#F9F3EE", fontSize: "1.2rem" }}>
              {props.clinic.name}
            </h6>
            <p
              className="details"
              style={{ color: "#F9F3EE", fontSize: "1rem" }}
            >
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
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            width: "100%",
          }}
        >
          <p className="details" style={{ color: "white" }}>
            Email: {props.clinic.email}
          </p>
          <p className="details" style={{ color: "white" }}>
            {" "}
            Rating: {Math.trunc(props.clinic.averageRating)} reviewsCount{" "}
            {props.clinic.reviewsCount}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "space-evenly",
            }}
          >
            {/* {console.log("akash")} */}
            {Object.keys(props.clinic.trimming).map((key, index) => (
              <div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {key}
                </div>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "1px solid black",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: props.clinic.trimming[key].close
                      ? "#f44336"
                      : "#4CAF50",
                  }}
                ></div>
              </div>
            ))}
          </div>

          <div className="row mt-4">
            <div
              className="col d-flex justify-content-evenly"
              style={{ color: "white" }}
            >
              {props.clinic.block ? (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleUnBlock(props.clinic._id)}
                >
                  Unblock
                </button>
              ) : (
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => handleBlock(props.clinic._id)}
                >
                  Block
                </button>
              )}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Edit
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title text-dark"
                        id="exampleModalLabel"
                      >
                        {" "}
                        Edit Clinic{" "}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row  d-flex justify-content-center">
                        <div className="col-md-10 d-flex justify-content-center">
                          <img
                            src={
                              props.clinic.profilePhoto
                                ? `/api/v1/admin/get/photo/${props.clinic.profilePhoto}`
                                : "/images/user.jpg"
                            }
                            alt="patient"
                            style={{
                              width: "210px",
                              height: "200px",
                              margin: "auto",
                              borderRadius: "300px",
                            }}
                            className=""
                          />
                        </div>
                        <div className="col-md-10 mt-3">
                          <input
                            className="form-control form-control-sm"
                            id="formFileSm"
                            type="file"
                          />
                        </div>
                      </div>
                      <div className="row justify-content-center mt-2 ">
                        <div className="col-md-10 mt-2">
                          <input
                            className="form-control input-fields shadow-none form-control-sm"
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            value={props.clinic.name}
                            onChange={inputhandle}
                            aria-label=".form-control-sm example"
                          />
                        </div>
                        <div className="col-md-10 mt-2">
                          <input
                            className="form-control input-fields shadow-none form-control-sm"
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            value={props.clinic.email}
                            aria-label=".form-control-sm example"
                          />
                        </div>
                        <div className="col-md-10 mt-2">
                          <input
                            className="form-control input-fields shadow-none form-control-sm"
                            type="text"
                            placeholder="Enter Phone Number"
                            name="phone"
                            value={props.clinic.phoneNumber}
                            aria-label=".form-control-sm example"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-10 d-flex justify-content-evenly modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleClinic;
