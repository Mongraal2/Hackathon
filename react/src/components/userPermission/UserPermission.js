import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddNewUser from "./AddNewUser";
import axios from "axios";
const UserPermission = () => {
  const [api, setApi] = useState([]);
  const [runEffect, setRunEffect] = useState(true);
  const getData = async () => {
    try {
      const res = await axios.get("api/v1/admin/get/admin");
      // console.log(res.data.admin)
      setApi(res.data.admin);
      // console.log(api)
    } catch (error) {
      // console.log(error)
    }
  };
  useEffect(() => {
    if (runEffect) {
      getData();
      setRunEffect(false);
    }
  }, [runEffect]);

  const handleDelete = (del_id) => {
    // Code for delete the users

    axios.delete(`api/v1/admin/delete/admin/${del_id}`).then(() => {
      setRunEffect(true);
    });
  };

  return (
    <div>
      <Box
        alignItems="center"
        justifyContent="center"
        sx={{
          display: "flex",
          width: 200,
          height: 31,
          background: "linear-gradient(94.43deg, #54E6D8 -14.68%, #3E4095 87%)",
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
          User Admin Permission
        </Typography>
      </Box>
      <div className="tablr-responsive m-3 mb-5">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {api.map((elem) => {
              const { name, email, designation, _id } = elem;
              return (
                <>
                  <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{designation}</td>
                    <td onClick={() => handleDelete(_id)}>
                      <DeleteIcon />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <AddNewUser setRunEffect={setRunEffect} />
    </div>
  );
};

export default UserPermission;
