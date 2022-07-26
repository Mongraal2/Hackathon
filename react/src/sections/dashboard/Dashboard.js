import React from "react";

import { Grid } from "@mui/material";

import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import Middle from "../../components/middle/Middle";
import Header from "../header/Header";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = React.useState(true);

  const handleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      <Header />

      <Grid container sx={{ background: "#F6F6FF", flexWrap: "nowrap" }}>
        <Grid
          item
          lg={showSidebar ? 2 : 0.5}
          display={{
            xs: "none",
            sm: "none",
            lg: "inline-block",
            md: "inline-block",
          }}
        >
          <LeftSidebar handleSidebar={handleSidebar} />
        </Grid>
        <Grid
          item
          lg={showSidebar ? 10 : 11.5}
          md={showSidebar ? 10 : 11.5}
          sm={12}
          xs={12}
          style={{ overflow: "auto", height: "100vh" }}
        >
          <Middle />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
