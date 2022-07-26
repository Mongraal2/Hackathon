import React, { useState } from "react";
import LoginForm from "./LoginForm";
import OtpForm from "./OtpForm";
import SnackbarComponent from "../../components/snackBar/SnackbarComponent";

const Login = () => {
  const [email, setEmail] = useState("");
  const [page, setPage] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  return (
    <div>
      <SnackbarComponent
        message={message}
        severity={severity}
        open={openSnackbar}
        setOpen={setOpenSnackbar}
      />
      <section className="vh-50" style={{ backgroundColor: "9A616D" }}>
        <div className="container py-2 h-50">
          <div className="row d-flex justify-content-end align-items-center h-100">
            <div className="col col-xl-10">
              <div className="" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="./images/loginImage.png"
                      alt="login form"
                      className="img-fluid"
                      style={{
                        borderRadius: "1rem 0 0 1rem",
                        marginLeft: "-105px",
                        marginTop: "40px",
                      }}
                    />
                  </div>
                  {page === 0 ? (
                    <LoginForm
                      email={email}
                      setEmail={setEmail}
                      setPage={setPage}
                      setOpenSnackbar={setOpenSnackbar}
                      setMessage={setMessage}
                      setSeverity={setSeverity}
                    />
                  ) : page === 1 ? (
                    <OtpForm
                      email={email}
                      setPage={setPage}
                      setOpenSnackbar={setOpenSnackbar}
                      setMessage={setMessage}
                      setSeverity={setSeverity}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
