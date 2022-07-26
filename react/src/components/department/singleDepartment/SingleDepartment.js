import React from "react";

import { Stack } from "@chakra-ui/react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const SingleDepartment = (props) => {
  // console.log(props.dept.name);
  return (
    <Box
      sx={{
        width: "304.55px",
        height: "113.98px",
        borderRadius: "13.3575px",
        background: "white",
      }}
    >
      <Stack
        direction="row"
        height="100%"
        justifyContent="start"
        alignItems="center"
        spacing={20}
        paddingLeft="20px"
      >
        <img
          src={`/api/v1/admin/department/image/${props.dept.image}`}
          alt="Logo"
          style={{ width: "79px", height: "79px", outline: "1px solid black" }}
        />
        <div>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "22px",
              letterSpacing: "0.890501px",
              color: "#5B6889",
            }}
            variant="body1"
          >
            {props.dept.name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "22px",
              letterSpacing: "0.890501px",
              color: "#5B6889",
            }}
            variant="body1"
          >
            {props.dept.visibility ? (
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "22px",
                  letterSpacing: "0.890501px",
                  color: "#5B6889",
                }}
                className="mt-1"
              >
                active
              </div>
            ) : (
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "22px",
                  letterSpacing: "0.890501px",
                  color: "#5B6889",
                }}
                className="mt-1"
              >
                Inactive
              </div>
            )}
          </Typography>
        </div>
      </Stack>
    </Box>
  );
};

export default SingleDepartment;
