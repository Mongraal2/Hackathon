// import React from "react";

// import {
//   FormControl,
//   InputLabel,
//   Input,
//   InputAdornment,
//   IconButton,
// } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

// const PasswordField = ({ label, fRef }) => {
//   const [values, setValues] = React.useState({
//     password: "",
//     showPassword: false,
//   });
//   const handleClickShowPassword = () => {
//     setValues({
//       ...values,
//       showPassword: !values.showPassword,
//     });
//   };
//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };
//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   return (
//     <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
//       <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
//       <Input
//         inputRef={fRef}
//         id="standard-adornment-password"
//         type={values.showPassword ? "text" : "password"}
//         value={values.password}
//         onChange={handleChange("password")}
//         endAdornment={
//           <InputAdornment position="end">
//             <IconButton
//               aria-label="toggle password visibility"
//               onClick={handleClickShowPassword}
//               onMouseDown={handleMouseDownPassword}
//             >
//               {values.showPassword ? <VisibilityOff /> : <Visibility />}
//             </IconButton>
//           </InputAdornment>
//         }
//       />
//     </FormControl>
//   );
// };

// export default PasswordField;
