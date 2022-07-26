import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

import SingleSpecialist from "./singleSpecialist/SingleSpecialist";

const Specialist = () => {
  const [specialist, setSpecialist] = useState([]);
  useEffect(() => {
    getSpecialist();
  }, []);
  const getSpecialist = async () => {
    try {
      const res = await axios.get("/api/v1/admin/specialist");
      // console.log(res.data.data.specialists);
      setSpecialist(res.data.data.specialists);
    } catch (error) {}
  };
  return (
    <>
      <Stack direction="row"
           sx={{
        marginBottom:'20px',
        marginTop: '20px'
      
      
      }}
      >
        <Box
          alignItems="center"
          justifyContent="center"
          sx={{
            display: "flex",
            width: 140,
            height: 31,
            background:
              "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
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
            Specialist List
          </Typography>
        </Box>
      </Stack>
      <Grid
        container
        padding={{
          lg: "10px 20px",
          md: "5xp 10px",
          sm: "5px 10px",
          xs: "5px 10px",
        }}
        spacing={6}
        justifyContent='center'
      >
        {specialist.map((dept) => (
          <Grid item key={dept._id}>
            <SingleSpecialist dept={dept} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Specialist;
