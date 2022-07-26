import React, { useEffect, useState } from "react";
import AppointmentOverview from "./AppointmentOverview";
import PatientOverView from "./PatientOverView";
import PieData from "./PieData";
import styles from "../dashboardMain/DashboardMain.module.css";
import axios from "axios";


const DashboardMain = () => {
  const [count, setCount] = useState({});
  useEffect(() => {
    getCountsApi();
  }, []);
  const getCountsApi = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getCount/doctor/clinic/patient");
      if (res.status == 200) {
        setCount(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };



  let img = [
    {
      img: "./images/DoctorLogo.svg",
      title: "Total Doctors",
      amt: count.doctorCount,
      spn: "12.5%",
      color: "#0089FF",
      background: "#0089FF"
    },
    {
      img: "./images/PatientLogo.svg",
      title: "Total Patient",
      amt: count.clinicCount,
      spn: "12.5%",
      color: "#FF748E",
      background: "#FF748E"
    },
    {
      img: "./images/ClinicLogo.svg",
      title: "Total Clinic",
      amt: count.patientCount,
      spn: "12.5%",
      color: "#40DB50",
      background: "#40DB50"
    },
    {
      img: "./images/RevenueLogo.svg",
      title: "Total Revenue",
      amt: "3,243",
      spn: "12.5%",
      color: "#FFCB0E",
      background: "#FFCB0E"
    },
  ];
  return (
    <div className={styles.mainContent}>
      <div
        className="col-md-10 bg-lg shadow mt-3 m-2 "
        style={{ width: "95%" }}
      >
        <div className="row ">
          {img.map((data, index) => {
            return (
              <div key={index + 45645465} className="col-xl-3 col-lg-6">
                <div className="card l-bg-cherry">
                  <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large">
                      <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="mb-4 d-flex justify-content-between">
                      <h5 className="card-title mb-0" style={{ color: data.color }}>{data.title}</h5>
                      <i>
                        <img src={data.img} className={styles.imgDas} alt="data" />
                      </i>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                      <div className="col-8">
                        <h2 className="d-flex align-items-center mb-0" style={{ color: data.color }}>
                          {data.amt}
                        </h2>
                      </div>
                      <div className="col-4 text-right">
                        <span>{data.spn}</span>
                      </div>
                    </div>
                    <div
                      className="progress mt-1 "
                      data-height="8"
                      style={{ height: "8px" }}
                    >
                      <div
                        className="progress-bar l-bg-cyan"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "25%", background: data.background }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.mainChart}>
        <div
          className=" m-2 col-6 col-md-4 bg-lg shadow"
          style={{ width: "50%" }}
        >
          <div>
            <AppointmentOverview />
          </div>
          <div>
            <PatientOverView />
          </div>
        </div>
        <div className="m-2 bg-lg shadow ps-5" style={{ maxWidth: "44%" }}>
          <div className="m-2 pie pieAlign">
            <PieData />
          </div>
          {/* css */}
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
            }}
          >
            <p>Doctor's Added</p>
            <div
              style={{
                height: "30px",
                width: "50px",
                backgroundColor: "#5A6DE7",
                marginTop: "2px",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
            }}
          >
            <p>Clinics Added</p>
            <div
              style={{
                height: "30px",
                width: "50px",
                backgroundColor: "#F53542",
                marginTop: "2px",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
            }}
          >
            <p>Confirm Booking</p>
            <div
              style={{
                height: "30px",
                width: "50px",
                backgroundColor: "#F8727B",
                marginTop: "2px",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
            }}
          >
            <p>Total Booking</p>
            <div
              style={{
                height: "30px",
                width: "50px",
                backgroundColor: "#FEDEBC",
                marginTop: "2px",
              }}
            ></div>
          </div>
          {/* css over */}
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
