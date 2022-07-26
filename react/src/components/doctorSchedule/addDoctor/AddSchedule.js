import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../addDoctor/AddDoctor.module.css";
const AddSchedule = () => {
  return (
    <div>
      <section className="vh-100 gradient-custom w-100">
        <div className="container py-0 h-100">
          <div className="row ">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className={styles.mainForm}
                style={{ borderRadius: "15px", width: "170%" }}
              >
                <div className="card-body p-4 p-md-5">
                  {/* <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Appointments</h3> */}
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            className="form-control form-control-lg"
                            placeholder="Enter First Name"
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
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="phoneNumber"
                            className="form-control form-control-lg"
                            placeholder="Enter Password"
                          />
                        </div>
                      </div>
                    </div>

                    {/* gender */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Status: </h6>

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
                            Active
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
                            Inactive
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* gender */}
                    <div className="d-flex justify-content-center">
                      <div className=" mt-4 pt-2 me-3">
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
                      <div className=" mt-4 pt-2">
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

export default AddSchedule;
