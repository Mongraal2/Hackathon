import React, { useState } from "react";
import axios from "axios";
import "../singleClinic/singleClinic.css";

const SingleClinic = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [data, setData] = useState({
    name: props.clinic.fullName,
    email: props.clinic.email,
    phone: props.clinic.phoneNumber,
  });
  

  const handleBlock = async (id) => {
    try {
      const res = await axios.get(`/api/v1/admin/block/clinic/${id}`);
      setAnchorEl(null);
      props.getClinicsDate();
    } catch (error) {
      // console.log(id);
    }
  };



  return (
    <>
      <div style={{ width: "350px", boxShadow: "2px 2px 20px 2px rgb(176,176,176)", borderRadius: "20px", overflow: "hidden", color: "white", padding: "0" }}>
        <img
          src={
            props.clinic.profilePhoto
              ? `/api/v1/admin/get/photo/${props.clinic.profilePhoto}`
              : "/images/user.jpg"
          }
          alt="patient"
          style={{
            width: "100%", height: "180px", objectFit: "fill", paddingLeft: "0", paddingRight: "0"
          }}
        />
        <div className="row name-number rounded" style={{}}>
          <div className="col" style={{backgroundColor:'rgba(9, 6, 6, 0.4)'}}>
            <h6 style={{ color: '#F9F3EE', fontSize: '1.2rem' }}>{props.clinic.name}</h6>
            <p className="details" style={{ color: '#F9F3EE', fontSize: '1rem' }}>Phone: {props.clinic.phoneNumber}</p>
          </div>
        </div>
        <div className="card-body" style={{ backgroundImage: "linear-gradient(to right,rgb(78,190,200),rgb(65,90,159))", color: "white", width: "100%" }}>

          <p className="details" style={{ color: "white" }}>Email: {props.clinic.email}</p>
          <p className="details" style={{ color: "white" }}>
            {" "}
            Rating: {Math.trunc(props.clinic.averageRating)} reviewsCount{" "}
            {props.clinic.reviewsCount}
          </p>  


          <div style={{ display: "flex", flexWrap: "nowrap", justifyContent: "space-evenly" }}>
              {/* {console.log("akash")} */}
              {Object.keys(props.clinic.trimming).map((key, index) => (
                <div >
                  <div style={{ display: "flex", justifyContent: "center" }}>{key}</div>
                  <div style={{ width: "20px", height: "20px", border: "1px solid black", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: props.clinic.trimming[key].close ? "#f44336" : "#4CAF50" }}></div>
                </div>
              ))}
            </div>










        </div>
      </div>
    </>
  );
};

export default SingleClinic;
