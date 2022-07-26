import React from "react";

import {
  Box,
  Grid,
  Menu,
  MenuItem,
  Stack,
  Typography,
  Fade,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import styles from "./SingleClinic.module.css";

const SingleDiagnostic = ({ image, name, hospital }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: 118.64,
        background: "#fff",
        position: "relative",
      }}
      margin={{
        lg: "2px 30px",
        md: "2xp 10px",
        sm: "2px 10px",
        xs: "2px 10px",
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="start"
        width="100%"
        height="100%"
        wrap="nowrap"
      >
        <Grid item pr="10.78px" pl="9.8px">
          <img src={image} alt="doctor" className={styles.image} />
        </Grid>
        <Grid item>
          <Stack direction="column">
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 500,
                color: "#5B6889",
                fontSize: "22.92px",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body1"
              paragraph={true}
              sx={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "12.46px",
                color: "#7890A0",
              }}
            >
              {hospital}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <MoreVertIcon fontSize="small" className={styles.more} onClick={handleClick} />
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
        <MenuItem onClick={handleClose}>Block</MenuItem>
      </Menu>
    </Box>
  );
};

export default SingleDiagnostic;
