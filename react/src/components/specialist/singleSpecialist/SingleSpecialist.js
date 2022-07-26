import React, {useState} from "react";

import { Stack } from "@chakra-ui/react";
import { Box, } from "@mui/system";
import { Typography, Menu, MenuItem, Fade, Button } from "@mui/material";
import styles from "./SingleSpecialist.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SingleSpecialist = (props) => {
  // console.log(props.dept.name);
  // console.log(props.dept.image);
//   const[anchorEl, setAnchorEl] = useState<null | HTMLElement>('null')
// const handleClick = (event:React.MouseEvent<HTMLButtonElement>) =>{
//   setAnchorEl(event.currentTarget)
// }


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
        <div
          style={{ width: "79px", height: "79px", outline: "1px solid black" }}
        >
          {props.dept.image == "1" ? (
            <p
              style={{
                color: "#293462",
                textAlign: "center",
                marginTop: "16%",
              }}
            >
              No Image Available
            </p>
          ) : (
            <img
              src={`/api/v1/admin/specialist/image/${props.dept.image}`}
              alt="Logo"
              style={{
                width: "79px",
                height: "79px",
                outline: "1px solid black",
              }}
            />
          )}
        </div>

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


        <MoreVertIcon
          fontSize="small"
          className={styles.more}
          onClick={handleClick}
        />
      </Stack>

{/* <Button color='inherit' onClick={handleClick } > More</Button>  */}
      
   
   
   
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
       

      
      
          <MenuItem >
            Un Block
          </MenuItem>
      
          <MenuItem >
            Block
          </MenuItem>
      
      </Menu>
   
   
   
   
   
    {/* <Menu id="resourch-menu" anchorEl={anchorEl }>
     <MenuItem>
      Edit
     </MenuItem>
     <MenuItem>
      Delete
     </MenuItem>
    </Menu> */}
     
    </Box>
  );
};

export default SingleSpecialist;
