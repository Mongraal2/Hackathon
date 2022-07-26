import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Stack,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect } from "react";
import styles from "./SidebarItem.module.css";
import axios from "axios";
import { UserDataContext } from "../../hooks/useContext/UserContext";
export default function SidebarItem({
  expanded,
  handleChange,
  text,
  items,
  Icon,
  showSidebar,
  slug,
}) {
  useEffect(() => {
    getUserDataApi();
  }, []);
  const getUserDataApi = async () => {
    const res = await axios.get("/api/v1/admin/getUserData");
    if (res.status === 200) {
      updateAdminData(res.data.admin);
    }
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { adminData, updateAdminData } = React.useContext(UserDataContext);
  const regexForTab = new RegExp(`^/${slug}`, "i");
  const result = regexForTab.test(pathname);

  const typographyClass = `${!showSidebar && styles.hide}`;
  const summaryClass = `${styles.item} ${result && styles.expanded} `;
  const subTabClass = (slug) => {
    const regexForSubTab = new RegExp(slug + "$", "i");
    const result = regexForSubTab.test(pathname);
    if (result) {
      return `${styles.item} ${styles.expanded}`;
    } else {
      return `${styles.item}`;
    }
  };

  const handleItemClick = async () => {
    if (slug === "logout") {
      try {
        const res = await axios.get("/api/v1/admin/logout");
        // navigate("/login", { replace: true });
      } catch (error) {
        console.log(error);
      }
      return navigate("/login", { replace: true });
    }
    return navigate(`/${slug}`);
  };

  const handleSubitemClick = (subSlug) => {
    // console.log(slug);
    navigate(`/${slug}/${subSlug}`);
  };
  // console.log(adminData?.permissions)
  if (
    (adminData?.permissions?.dashboard && text === "Dashboard") ||
    (adminData?.permissions?.adminProfile && text === "Admin Profile") ||
    (adminData?.permissions?.clinic && text === "Clinics") ||
    (adminData?.permissions?.clinic && text === "Diagnostic") ||
    (adminData?.permissions?.commission && text === "Commission") ||
    (adminData?.permissions?.department && text === "Department") ||
    (adminData?.permissions?.department && text === "Specialist") ||
    (adminData?.permissions?.patient && text === "Patient") ||
    (adminData?.permissions?.payments && text === "Payments") ||
    (adminData?.permissions?.report && text === "Report") ||
    (adminData?.permissions?.doctor && text === "Doctors") ||
    (adminData?.permissions?.appointment && text === "Appointment") ||
    (adminData?.permissions?.userPermissions && text === "User Permission") ||
    // text == "Appointment",
    text === "Logout"
  ) {
    return (
      <div>
        <Accordion
          expanded={expanded}
          onChange={handleChange}
          disableGutters
          elevation={0}
        >
          <AccordionSummary
            expandIcon={
              items && showSidebar && items.length > 0 && <ExpandMoreIcon />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            style={{ height: "48px !important" }}
            className={summaryClass}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              onClick={handleItemClick}
            >
              <Icon />

              <Typography
                variant="body1"
                fontSize="medium"
                sx={{ width: "100%", flexShrink: 0 }}
                className={typographyClass}
              >
                {text}
              </Typography>
            </Stack>
          </AccordionSummary>
          {showSidebar && items && items.length > 0 && (
            <AccordionDetails>
              <Stack
                direction="column"
                alignItems="left"
                sx={{ paddingLeft: "10px" }}
              >
                {items.map((item, index) => {
                  return (
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      className={subTabClass(item.slug)}
                      padding={1}
                      key={index + 10565}
                      sx={{ cursor: "pointer" }}
                      onClick={handleSubitemClick.bind(null, item.slug)}
                    >
                      <ArrowForwardIcon fontSize="small" />
                      <Typography
                        className={!showSidebar ? styles.hide : ""}
                        variant="body2"
                      >
                        {item.text}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </AccordionDetails>
          )}
        </Accordion>
      </div>
    );
  } else {
    return null;
  }
}
