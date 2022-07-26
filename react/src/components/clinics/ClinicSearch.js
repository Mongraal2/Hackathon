import React, { useState } from "react";
import axios from "axios";

import styles from "./ClinicSearch.module.css";
import SingleClinic from "./singleClinic/SingleClinic";
const ClinicSearch = () => {
    const [clinic, setClinic] = useState([]);
    const [text, setText] = useState("");

    const searchHandler = async (event) => {
        try {
            setText(event.target.value);
            const res = await axios.get(
                `/api/v1/admin/search/Clinic/${event.target.value}`
            );
            console.log(res.data.clinic);
            if (res.data.clinic.length === 0) {
                setClinic([]);
            } else {
                setClinic(res.data.doctor);
            }
        } catch (error) {
            setClinic([]);
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
                    {clinic.length === 0 ? (
                        ""
                    ) : (
                        <p
                            onClick={() => {
                                setClinic([]);
                                setText("");
                            }}
                            className={`${styles.close}`}
                        >
                            X
                        </p>
                    )}
                </div>
            </div>
            {clinic.length === 0 ? (
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
                    {clinic.map((item) => {
                        return <SingleClinic key={item._id} clinic={item} />;
                    })}
                </div>
            )}
        </div>
    );
};

export default ClinicSearch;
