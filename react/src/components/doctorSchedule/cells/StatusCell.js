import { Tooltip } from "@mui/material";
import React from "react";

import styles from "./StatusCell.module.css";

const StatusCell = ({ value }) => {
  return (
    <div className={styles.container}>
      <Tooltip title={value}>
        <div className={value === "active" ? styles.active : styles.inactive}></div>
      </Tooltip>
    </div>
  );
};

export default StatusCell;
