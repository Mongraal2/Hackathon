import { Grid, IconButton, Stack, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const ActionCell = ({ data }) => {
  const handleEdit = () => {
    console.log("Edit", data.name);
  };
  const handleDelete = () => {
    console.log("Delete", data.name);
  };
  return (
    <Stack direction="row">
      <Tooltip title="Edit">
        <IconButton onClick={handleEdit}>
          <EditIcon sx={{ color: "#404C9A" }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton onClick={handleDelete}>
          <DeleteIcon sx={{ color: "#F84545" }} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default ActionCell;
