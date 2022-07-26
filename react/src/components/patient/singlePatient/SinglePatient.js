import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import "../singlePatient/singleDoc.css"



const SinglePatient = ({
  image,
  name,
  phone,
  address,
  age,
  gender,
  family,
}) => {
  return (
<>
<div style={{ width: "350px", boxShadow: "2px 2px 20px 2px rgb(176,176,176)", borderRadius: "20px", overflow: "hidden", color: "white", padding: "0" }}>
        <img
          src={
             image
            
          }
          alt="patient"
          style={{
            width: "100%", height: "180px", objectFit: "fill", paddingLeft: "0", paddingRight: "0"
          }}
          className="rounded"
        />
        <div className="row name-number rounded" style={{ }}>
          <div className="col" style={{backgroundColor:'rgba(9, 6, 6, 0.4)'}}>
            <h6 style={{ color: '#F9F3EE', fontSize: '1.2rem' }}>{name}</h6>
            <p className="details" style={{ color: '#F9F3EE', fontSize: '1rem' }}>Phone: {phone}</p>
          </div>
        </div>
        <div className="card-body" style={{ backgroundImage: "linear-gradient(to right,rgb(78,190,200),rgb(65,90,159))", color: "white", width: "100%" }}>

          <p className="details" style={{color:'white'}} >Age: {age}</p>
          <p className="details">  Gender: {gender}</p>
          <p className="details"> Address: {address}</p>
          <p className="details"> Family: {family.length}</p>
         






          
        </div>
      </div>


</>



    // <Box
    //   sx={{
    //     width: "80%",
    //     height: 113,
    //     borderRadius: "13.36px",
    //     border: "2px solid #0089FF",
    //     background: "#fff",
    //   }}
    //   margin={{
    //     lg: "10px 30px",
    //     md: "5xp 10px",
    //     sm: "5px 10px",
    //     xs: "5px 10px",
    //   }}
    // >
    //   <Grid
    //     container
    //     direction="row"
    //     alignItems="center"
    //     // justifyContent="center"
    //     width="100%"
    //     height="100%"
    //     wrap="nowrap"
    //   >
    //     <Grid item pr="20.78px" pl="9.8px">
    //       <img src={image} alt="patient" className={styles.image} />
    //     </Grid>
    //     <Grid item>
    //       <Stack direction="column">
    //         <Typography
    //           variant="h6"
    //           sx={{
    //             fontFamily: "'Rubik', sans-serif",
    //             fontWeight: 500,
    //             color: "#5B6889",
    //             fontSize: "16.92px",
    //           }}
    //         >
    //           {name}
    //         </Typography>
    //         <Typography
    //           variant="body1"
    //           sx={{
    //             fontFamily: "'Rubik', sans-serif",
    //             fontWeight: 400,
    //             fontStyle: "italic",
    //             fontSize: "12.46px",
    //             color: "#7890A0",
    //           }}
    //         >
    //           Phone: {phone}
    //         </Typography>
    //         <Typography
    //           variant="body1"
    //           sx={{
    //             fontFamily: "'Rubik', sans-serif",
    //             fontWeight: 400,
    //             fontStyle: "italic",
    //             fontSize: "12.46px",
    //             color: "#7890A0",
    //           }}
    //         >
    //            
    //         </Typography>
    //         <Typography
    //           variant="body1"
    //           sx={{
    //             fontFamily: "'Rubik', sans-serif",
    //             fontWeight: 400,
    //             fontStyle: "italic",
    //             fontSize: "12.46px",
    //             color: "#7890A0",
    //           }}
    //         >
    //           Age: {age}
    //         </Typography>
    //       </Stack>
    //     </Grid>
    //     <Grid item pr="20.78px" pl="9.8px">
    //       <Stack direction="column">
    //         <Typography
    //           variant="body1"
    //           sx={{
    //             fontFamily: "'Rubik', sans-serif",
    //             fontWeight: 400,
    //             fontStyle: "italic",
    //             fontSize: "12.46px",
    //             color: "#7890A0",
    //           }}
    //         >
    //           Gender: {gender}
    //         </Typography>
    //         <Typography
    //           variant="body1"
    //           sx={{
    //             fontFamily: "'Rubik', sans-serif",
    //             fontWeight: 400,
    //             fontStyle: "italic",
    //             fontSize: "12.46px",
    //             color: "#7890A0",
    //           }}
    //         >
    //           Family: {family.length}
    //         </Typography>
    //       </Stack>
    //     </Grid>
    //   </Grid>
    // </Box>
  );
};

export default SinglePatient;
// import React from "react";
// import { Box, Grid, Stack, Typography } from "@mui/material";

// import c from "./SinglePatient.module.css";

// const SinglePatient = ({ image, name, diagnostic, bloodGroup }) => {
//   return (
//     <Box
//       sx={{
//         width: 304,
//         height: 113,
//         borderRadius: "13.36px",
//         border: "2px solid #0089FF",
//         background: "#fff",
//       }}
//       margin={{
//         lg: "10px 30px",
//         md: "5xp 10px",
//         sm: "5px 10px",
//         xs: "5px 10px",
//       }}
//     >
//       <Grid
//         container
//         direction="row"
//         alignItems="center"
//         justifyContent="center"
//         width="100%"
//         height="100%"
//         wrap="nowrap"
//       >
//         <Grid item pr="20.78px" pl="9.8px">
//           <img src={image} alt="doctor" className={c.image} />
//         </Grid>
//         <Grid item>
//           <Stack direction="column">
//             <Typography
//               variant="h6"
//               sx={{
//                 fontFamily: "'Rubik', sans-serif",
//                 fontWeight: 500,
//                 color: "#5B6889",
//                 fontSize: "16.92px",
//               }}
//             >
//               {name}
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 fontFamily: "'Rubik', sans-serif",
//                 fontWeight: 400,
//                 fontStyle: "italic",
//                 fontSize: "12.46px",
//                 color: "#7890A0",
//               }}
//             >
//               Diagnostic: {diagnostic}
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 fontFamily: "'Rubik', sans-serif",
//                 fontWeight: 400,
//                 fontStyle: "italic",
//                 fontSize: "12.46px",
//                 color: "#7890A0",
//               }}
//             >
//               Blood Group: {bloodGroup}
//             </Typography>
//           </Stack>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default SinglePatient;
