import React, { useState } from "react";
import axios from "axios";
import "../login/Login.css";
import SnackbarComponent from "../../components/snackBar/SnackbarComponent";
const LoginForm = (props) => {
  const [password, setPassword] = useState("");
  const emailHandler = (event) => {
    props.setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("/api/v1/admin", {
        email: props.email,
        password,
      });
      // console.log(res);
      props.setOpenSnackbar(true);
      props.setMessage(res.data.message);
      props.setSeverity("success");
      props.setPage(1);
      
      <SnackbarComponent severity = "succrss" message="Successfully Login" open="true"/>

    } catch (error) {
      console.log(error.response);
      props.setEmail("");
      setPassword("");
      props.setOpenSnackbar(true);
      props.setMessage(error.response.data.message);
      props.setSeverity("error");
      
    }
  };

  return (
    <>
      <div className="col-md-6 col-lg-7 align-items-center  ">
        <div className="row justify-content-center">
          <div className="col d-flex justify-content-center">
            <img
              src="/images/carePlusLogo.svg"
              alt="Logo"
              
            />
          </div>

          <div
            className="card-body mx-4 px-lg-5 text-black loginAlign"
            style={{
              backgroundColor: "#3E4095",
              width: "80%",
              borderRadius: "20px",
            }}
          >
            <form onSubmit={submitHandler} autoComplete='on'>
              {/* <div className="d-flex align-items-center mb-3 pb-1">
              <i
                className="fas fa-cubes fa-2x me-3"
                style={{ color: "#ff6219" }}
              ></i>
              <span className="h1 fw-bold mb-0">
                <img src="/images/carePlusLogo.svg" alt="Logo" />
              </span>
            </div> */}
              <div className="py-4">
                <h5
                  className="fw-normal text-center"
                  style={{
                    letterSpacing: "1px",
                    color: "white",
                    fontSize: "35px",
                  }}
                >
                  Welcome
                </h5>

                <h5
                  className="fw-normal mb-2 pb-2 text-center"
                  style={{
                    letterSpacing: "1px",
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Login to your account
                </h5>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form2Example17"
                  className="form-control form-control-lg border-bottom shadow-none login-input"
                  onChange={emailHandler}
                  value={props.email}
                  placeholder="Enter email" 
                  autoComplete="off"
                 
                />
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example27"
                  className="form-control form-control-lg border-bottom shadow-none login-input"
                  onChange={passwordHandler}
                  value={password}
                  placeholder="Enter password"
                  autoComplete="off"
                  
                />
              </div>
              <div className="d-flex justify-content-end">
                <a
                  href=""
                  style={{
                    backgroundColor: "#3E4095",
                    border: "none",
                    outline: "none",
                    borderRadius: "0",
                    color: "rgba(255, 255, 255, 0.58)",
                  }}
                  className="forgetPassword"
                >
                  Forgot Password ?
                </a>
              </div>
              <div className="py-4 d-flex justify-content-center">
                <button
                  className="btn btn-light btn-md btn-block w-75"
                  type="submit"
                  style={{ borderRadius: "25px" }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* <div className="mb-3 pb-1 d-flex ">
          <img
            src="/images/carePlusLogo.svg"
            alt="Logo"
            style={{ marginLeft: "" }}
          />
        </div> */}
      </div>
    </>
  );
};

export default LoginForm;
