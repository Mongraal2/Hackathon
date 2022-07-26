import React, { useState } from "react";
import axios from "axios";

import styles from "./PatientSearch.module.css";
import SinglePatient from "./../patient/singlePatient/SinglePatient";
const PatientSearch = () => {
  const [patient, setPatient] = useState([]);
  const [text, setText] = useState("");

  const searchHandler = async (event) => {
    try {
      setText(event.target.value);
      const res = await axios.get(
        `/api/v1/admin/search/Patient/${event.target.value}`
      );
      console.log(res.data.patient);
      if (res.data.patient.length === 0) {
        setPatient([]);
      } else {
        setPatient(res.data.patient);
      }
    } catch (error) {
      setPatient([]);
    }
  };
  return (
    <div
      style={{ position: "relative", }}
      className="row d-flex justify-content-center align-items-center"
    >
      <div>
        <div className={`form ${styles.searchForm}`}>
          <img
            className={styles.searchImg}
            src="/images/search.svg"
            alt="not found"
          />
          <input
            autoComplete="off"
            onChange={searchHandler}
            value={text}
            type="text"
            className="form-control shadow form-input"
            placeholder="Search Patient By Mobile Number"
            style={{ backgroundColor: "rgb(255 255 255) !important" }}
          />
          {patient.length === 0 ? (
            ""
          ) : (
            <p
              onClick={() => {
                setPatient([]);
                setText("");
              }}
              className={`${styles.close}`}
            >
              X
            </p>
          )}
        </div>
      </div>
      {patient.length === 0 ? (
        ""
      ) : (
        <div
          className="rounded"
          style={{
            backgroundColor: "#fff",
            position: "absolute",
            top: "49px",
            zIndex: "12",
            width: "97%",
            paddingBottom: "150vh",
          }}
        >
          {patient.map((item) => {
            return (
              <SinglePatient
                key={item._id}
                image={
                  item.photo
                    ? `/api/v1/admin/get/photo/${item.photo}`
                    : "/images/user.jpg"
                }
                name={item.fullName}
                phone={item.phone}
                address={item.address}
                age={item.age}
                gender={item.gender}
                family={item.family}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PatientSearch;
