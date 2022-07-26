import React from "react";

import {
  Grid,
  Paper,
  TextField,
  InputAdornment,
  SwipeableDrawer,
} from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import styles from "./Header.module.css";
import HeaderProfile from "../../components/headerProfile/HeaderProfile";
import Drawer from "../../components/drawer/Drawer";

const Header = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    console.log(openDrawer);
    setOpenDrawer((prev) => !prev);
  };

  return (
    <header>
      <Paper elevation={1} 
      sx={{
         padding: "4px", 
       
        
         
          }}>
        <Grid container alignItems="center">
          <Grid
            item
            lg={2}
            md={3}
            alignItems="center"
            display={{
              xs: "none",
              sm: "none",
              lg: "inline-block",
              md: "inline-block",
            }}
            // border="2px solid red"
            textAlign="center"
          >
            <img
              className={styles.image}
              src="/images/carePlusLogo.svg"
              alt="logo"
              style={{ margin: "0", display: "inline-block", }}
            />
          </Grid>
          <Grid
            item
            xs={1}
            sm={2}
            sx={{ paddingLeft: "10px" }}
            display={{
              xs: "inline-block",
              sm: "inline-block",
              lg: "none",
              md: "none",
            }}
          >
            <MenuIcon
              fontSize="large"
              sx={{ cursor: "pointer" }}
              onClick={toggleDrawer}
            />
          </Grid>
          <Grid
            item
            lg={7}
            md={4}
            display={{
              xs: "none",
              sm: "none",
              lg: "inline-block",
              md: "inline-block",
            }}
          >
            {/* <TextField
              id="input-with-icon-textfield"
              label=""
              placeholder="Type to search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="filled"
              size="small"
              color="secondary"
              sx={{
                border: "none",
                height: "30px",
                width: "426px",
                borderRadius: "9px",
              }}
            /> */}
            <InputGroup variant="filled">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
                className={styles.inputLeft}
              />
              <Input
                type="search"
                placeholder="Enter to search"
                size="lg"
                width="426px"
                variant="filled"
                padding="5px"
                borderRadius={5}
                paddingLeft={2}
                className={styles.input}
              />
            </InputGroup>
          </Grid>
          <Grid item lg={3} md={5} sm={10} xs={11}>
            <HeaderProfile />
          </Grid>
        </Grid>
      </Paper>
      <SwipeableDrawer
        anchor={"left"}
        open={openDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <Drawer />
      </SwipeableDrawer>
    </header >
  );
};

export default Header;
