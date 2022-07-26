import React, { useContext, useEffect } from "react";

import { Stack, Typography, Badge, Divider } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

import styles from "./HeaderProfile.module.css";
import { UserDataContext } from "../../hooks/useContext/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HeaderProfile = () => {
  useEffect(() => {
    // getUserDataApi();
  }, []);
  const navigate = useNavigate()
  const getUserDataApi = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getUserData");
     
      if (res.status == 200) {
        // navigate("/");
        // console.log("DEV", res.data.admin);
        // setIsLoading(false);
      }
    } catch (error) {
      navigate("/login");
      // setIsLoading(false);
    }
  };

  const { adminData } = useContext(UserDataContext)
 
  // console.log(adminData);
  return (
    <Stack direction="row" justifyContent="end" marginRight="30px">
      <Stack direction="row" alignItems="center" spacing={2}>
        <Divider orientation="vertical" />
        <Badge badgeContent={8} color="primary">
          <CircleNotificationsIcon color="secondary" />
        </Badge>
        <Badge badgeContent={4} color="primary">
          <MessageIcon color="secondary" />
        </Badge>
        <Divider orientation="vertical" />
      </Stack>
      <Stack direction="row">
        <img
          src={adminData.photo || "https://images.unsplash.com/photo-1656075426836-b387b49c0509?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}
          className={styles.profile}
          alt=""
        />
        <Stack direction="column">
          <Typography variant="body1">
            <strong>{adminData.name}</strong>
          </Typography>
          <Typography variant="caption">{adminData.designation}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeaderProfile;
