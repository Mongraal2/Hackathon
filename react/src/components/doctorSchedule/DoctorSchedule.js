import { Box, Stack, Typography } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import React, { useMemo, useCallback } from "react";
import { columns, rows } from "./doctorScheduleData";

import styles from "./DoctorSchedule.module.css";
import "../../tableStyles.scss";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const DoctorSchedule = () => {
  const gridRef = React.useRef();

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
      headerClass: styles.header,
    }),
    []
  );

  const rowClickedListener = useCallback(({ data }) => {}, []);

  const rowClass = "my-green-class";

  // all even rows assigned 'my-shaded-effect'
  const getRowClass = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return "my-shaded-effect";
    }
  };

  const handleRowDoubleClicked = (row) => {};

  const rowStyle = { boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" };
  return (
    <>
      <Stack direction="row">
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
            Schedule List
          </Typography>
        </Box>
      </Stack>
      <div className="green-theme">
        <div
          className="ag-theme-custom-react"
          style={{ height: "80vh", width: "100%" }}
        >
          <AgGridReact
            ref={gridRef}
            rowData={rows}
            columnDefs={columns}
            defaultColDef={defaultColDef}
            animateRows={true}
            rowSelection="multiple"
            onRowClicked={rowClickedListener}
            rowClass={rowClass}
            getRowClass={getRowClass}
            rowStyle={rowStyle}
            checkboxSelection={true}
            onRowDoubleClicked={handleRowDoubleClicked}
            pagination={true}
            paginationPageSize={10}
          ></AgGridReact>
        </div>
      </div>
    </>
  );
};

export default DoctorSchedule;
