import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../hooks/useContext/UserContext";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "../login/Login.css";
const OtpForm = (props) => {
  let navigate = useNavigate();
  const [otp, setOtp] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const inputtext = (e) => {
    // if (e.code === 'key') {
    //   // Focus on the previous field
    //   e.previousElementSibling.focus();
    // }
    // else{
    //   e.target.nextSibling.focus();
    // }

    
  };
  const inputFocus = (e) =>{
    // console.log("value of is "+ e.key)
    if (e.key === 'Backspace' || e.key==="Delete" || e.key==="ArrowLeft") {
      // Focus on the previous field
      e.target.previousSibling.focus();
    }
    else{
      e.target.nextSibling.focus();
    }

  }

  // const otpHandler = (event) => {
  //   setOtp(event.target.value);
  // };

  const otpHandler = (e) => {
    const { name, value } = e.target;
    setOtp({ ...otp, [name]: value });
  
  };
  const submitHandler = async (event) => {
    // console.log((`${otp.first}${otp.second}${otp.third}${otp.fourth}`) * 1)
    event.preventDefault();
    try {
      const otpNum = `${otp.first}${otp.second}${otp.third}${otp.fourth}` * 1;
      const res = await axios.post("/api/v1/admin/otpLogin", {
        email: props.email,
        otp: otpNum,
      });
      // console.log(res.data.data.user);
      props.setOpenSnackbar(true);
      props.setMessage(res.data.message);
      props.setSeverity("success");
      navigate("/");
    } catch (error) {
      // console.log(error.response);
      props.setEmail("");
      setOtp("");
      props.setOpenSnackbar(true);
      props.setMessage(error.response.data.message);
      props.setSeverity("error");
    }
  };
  return (
    <div className="col-md-6 col-lg-7  align-items-center justify-content-center">
    
      <div className="row flex-column d-flex justify-content-center">
        <div className="col d-flex justify-content-center pt-5">
          <img src="/images/carePlusLogo.svg" alt="Logo" />
        </div>
        <div className="col d-flex justify-content-center pt-5">
          <form
            onSubmit={submitHandler}
            className="otpAlign p-5"
            style={{
              width: "80%",
              backgroundColor: "#3E4095",
              borderRadius: "20px",
              color: "white",
            }}
          >
            {/* <div className="d-flex align-items-center mb-3 pb-1">
            <i
              className="fas fa-cubes fa-2x me-3"
              style={{ color: "#ff6219" }}
            ></i>
            <img src="/images/carePlusLogo.svg" alt="Logo" />
            <span className="h1 fw-bold mb-0"></span>
          </div> */}
            <div className="row">
              <div className="col">
                <button className="btn btn-success" onClick={() => props.setPage(0)}>
                  <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
                </button>
              </div>
            </div>
            <h5
              className="fw-normal  text-center mt-4"
              style={{ letterSpacing: "1px" }}
            >
              Otp has been successfully send
            </h5>
            <h5
              className="fw-normal mt-4 text-center"
              style={{ letterSpacing: "1px" }}
            >
              Your code to{" "}
              {props.email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2")}
            </h5>
            <div className="form-outline mb-4">
              {/* <input
              type="password"
              id="form2Example27"
              className="form-control form-control-lg"
              onChange={otpHandler}
              value={otp}
            /> */}
              <div
                id="otp"
                className="inputs d-flex flex-row justify-content-center mt-4"
              >
                <input
                  className="m-2 text-center form-control rounded"
                  type="text"
                  id="first"
                  name="first"
                  maxLength={1}
                  onChange={otpHandler}
                  onInput={inputtext}
                  value={otp.first}
                  onKeyUp={inputFocus}
                />
                <input
                  className="m-2 text-center form-control rounded"
                  type="text"
                  id="second"
                  name="second"
                  maxLength={1}
                  onChange={otpHandler}
                  onInput={inputtext}
                  value={otp.second}
                  onKeyUp={inputFocus}
                />
                <input
                  className="m-2 text-center form-control rounded"
                  type="text"
                  id="third"
                  name="third"
                  maxLength={1}
                  onChange={otpHandler}
                  onInput={inputtext}
                  value={otp.third}
                  onKeyUp={inputFocus}
                />
                <input
                  className="m-2 text-center form-control rounded"
                  type="text"
                  id="fourth"
                  name="fourth"
                  maxLength={1}
                  onChange={otpHandler}
                  onInput={inputtext}
                  value={otp.fourth}
                  onKeyUp={inputFocus}
                />
              </div>
            </div>

            <div className="mt-4 mb-4 d-flex justify-content-center">
              <button
                className="btn btn-light color-success btn-lg btn-block otp-btn"
                type="submit"
                style={{
                  color: "blue",
                  width: "40%",
                  letterSpacing: "3px",
                  borderRadius: "20px",
                }}
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="col d-flex align-items-center justify-content-center mb-3 pb-1"></div>

      <div
        className="card-body col p-4 d-flex justify-content-center text-black "
        style={{ width: "100%", borderRadius: "20px", color: "white" }}
      ></div>
    </div>
  );
};

export default OtpForm;
