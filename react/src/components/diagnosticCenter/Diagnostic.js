import React, { useState, useEffect } from "react";
import SingleDiagnostic from "./SingleDiagnostic";
import axios from "axios";
import DiagnosticSearch from "./DiagnosticSearch";

import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";

const Diagnostic = () => {
  const [doctors, setDoctors] = useState([]);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const [page, setPage] = useState(1);

  const limit = 10;

  useEffect(() => {
    getDoctorsDate();
  }, []);
  const getDoctorsDate = async () => {
    try {
      const res = await axios.get(`/api/v1/admin/get/doctor/${limit}/${page}`);
      console.log(res.data.doctor);
      setDoctors(res.data.doctor);
      setTotalDoctors(res.data.totalDoctor);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePageClick = async (event, pageNo) => {
    try {
      setPage(pageNo);

      getDoctorsDate();
    } catch (error) {}
  };

  return (
    <Stack direction="column">
      <div className="m-2">
        <DiagnosticSearch />
      </div>

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
          Doctor's List
        </Typography>
      </Box>
      <Stack direction="row" sx={{ flexWrap: "wrap" }}>
        {doctors.map((item) => (
          <SingleDiagnostic
            key={item._id}
            doctor={item}
            getDoctorsDate={getDoctorsDate}
          />
        ))}
      </Stack>
      <Grid
        mt={2}
        pr={5}
        display="flex"
        justifyContent="end"
        sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <Pagination
          count={
            Math.trunc(totalDoctors / limit) +
            (totalDoctors % limit === 0 ? +0 : +1)
          }
          color="secondary"
          onChange={handlePageClick}
        />
      </Grid>
    </Stack>
  );
};

export default Diagnostic;
