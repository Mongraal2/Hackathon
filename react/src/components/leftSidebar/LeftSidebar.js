import React from "react";

import { Paper, Tooltip, IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import SidebarItem from "../sidebarItem/SidebarItem";
import data from "./data";

const LeftSidebar = ({ handleSidebar }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [showSidebar, setShowSidebar] = React.useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSidebarVisibility = () => {
    setShowSidebar((prev) => !prev);
    handleSidebar();
  };


  return (
    <Paper elevation={1} sx={{ minHeight: "100vh !important", overFlow: "hidden" }} style={{ overflow: "auto", height: "100vh" }}>
      {data.map((item, index) => (
        <SidebarItem
          expanded={expanded === item.slug}
          handleChange={handleChange(item.slug)}
          text={item.text}
          key={index + 4645}
          Icon={item.icon}
          showSidebar={showSidebar}
          items={item.items}
          slug={item.slug}
        />
      ))}

      <Tooltip
        title={showSidebar ? "Collapse Sidebar" : "Expand Sidebar"}
        sx={{ float: "right", cursor: "pointer" }}
      >
        <IconButton onClick={handleSidebarVisibility}>
          {showSidebar && <ArrowLeftIcon fontSize="large" />}
          {!showSidebar && <ArrowRightIcon fontSize="large" />}
        </IconButton>
      </Tooltip>
    </Paper>
  );
};

export default LeftSidebar;
