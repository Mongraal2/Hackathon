import React, { useState, useEffect } from "react";
import SingleClinic from "./../singleClinic/SingleClinic";
import axios from "axios";
import ClinicSearch from "../ClinicSearch";
import SnackbarComponent from "../../snackBar/SnackbarComponent";

import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";

const BlockedClinic = () => {
  const [clinics, setClinics] = useState([]);
  const [totalClinics, setTotalClinics] = useState(0);
  const [page, setPage] = useState(1);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const limit = 10;

  useEffect(() => {
    getClinicsDate();
  }, []);
  const getClinicsDate = async () => {
    try {
      const res = await axios.get(
        `/api/v1/admin/get/clinic/blocked/${limit}/${page}`
      );
      // console.log("res", res);
      setClinics(res.data.clinic);
      setTotalClinics(res.data.totalClinic);
    } catch (error) {
      // console.log(error);
    }
  };
  const handlePageClick = async (event, pageNo) => {
    try {
      setPage(pageNo);

      getClinicsDate();
    } catch (error) {}
  };

  return (
    <Stack direction="column">
      <div className="m-2">
        <ClinicSearch />
      </div>

      <Box
        alignItems="center"
        justifyContent="center"
        sx={{
          display: "flex",
          width: 180,
          height: 31,
          background: "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
          borderRadius: "64px",
        }}
        margin={{
          lg: "10px 30px",
          md: "5xp 10px",
          sm: "5px 10px",
          xs: "5px 10px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "13px",
            lineHeight: "16px",
            color: "#fff",
          }}
        >
          Blocked Clinic's List
        </Typography>
      </Box>
      <SnackbarComponent
        message={message}
        severity={severity}
        open={openSnackbar}
        setOpen={setOpenSnackbar}
      />
      <div
        className="row d-flex justify-content-evenly p-2 m-2"
        style={{ gap: "50px" }}
      >
        {clinics.map((item) => (
          <SingleClinic
            key={item._id}
            clinic={item}
            getClinicsDate={getClinicsDate}
            setOpenSnackbar={setOpenSnackbar}
            setMessage={setMessage}
            setSeverity={setSeverity}
          />
        ))}
      </div>
      <Grid
        mt={2}
        pr={5}
        display="flex"
        justifyContent="end"
        sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <Pagination
          count={
            Math.trunc(totalClinics / limit) +
            (totalClinics % limit === 0 ? +0 : +1)
          }
          color="secondary"
          onChange={handlePageClick}
        />
      </Grid>
    </Stack>
  );
};

export default BlockedClinic;
