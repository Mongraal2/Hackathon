import React, { useState, useEffect } from "react";
import SingleClinic from "./singleClinic/SingleClinic";
import axios from "axios";
import ClinicSearch from "./ClinicSearch";
import SnackbarComponent from "../snackBar/SnackbarComponent";

import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";

const Clinics = () => {
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
      const res = await axios.get(`/api/v1/admin/get/clinic/${limit}/${page}`);
      setClinics(res.data.clinic);
      setTotalClinics(res.data.totalClinic);
    } catch (error) {}
  };
  const handlePageClick = async (event, pageNo) => {
    try {
      setPage(pageNo);

      getClinicsDate();
    } catch (error) {}
  };

  return (
    <Stack direction="column">
      <div className="m-2 mb-3">
        <ClinicSearch />
      </div>
      <SnackbarComponent
        message={message}
        severity={severity}
        open={openSnackbar}
        setOpen={setOpenSnackbar}
      />

      <Box
        alignItems="center"
        justifyContent="center"
        sx={{
          display: "flex",
          width: 140,
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
          Clinic's List
        </Typography>
      </Box>

      <div
        className="row d-flex justify-content-evenly p-2 m-2 mt-3"
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

export default Clinics;
