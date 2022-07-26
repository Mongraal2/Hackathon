import React, { useState } from "react";
import axios from "axios";

import styles from "./DoctorSearch.module.css";
import SingleDiagnostic from "./SingleDiagnostic";
const DiagnosticSearch = () => {
  const [doctor, setDoctor] = useState([]);
  const [text, setText] = useState("");

  const searchHandler = async (event) => {
    try {
      setText(event.target.value);
      const res = await axios.get(
        `/api/v1/admin/search/Doctor/${event.target.value}`
      );
      console.log(res.data.doctor);
      if (res.data.doctor.length === 0) {
        setDoctor([]);
      } else {
        setDoctor(res.data.doctor);
      }
    } catch (error) {
      setDoctor([]);
    }
  };
  return (
    <div
      style={{ position: "relative" }}
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
            placeholder="Search doctor By Mobile Number"
            style={{ backgroundColor: "rgb(255 255 255) !important" }}
          />
          {doctor.length === 0 ? (
            ""
          ) : (
            <p
              onClick={() => {
                setDoctor([]);
                setText("");
              }}
              className={`${styles.close}`}
            >
              X
            </p>
          )}
        </div>
      </div>
      {doctor.length === 0 ? (
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
          {doctor.map((item) => {
            return <SingleDiagnostic key={item._id} doctor={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default DiagnosticSearch;
