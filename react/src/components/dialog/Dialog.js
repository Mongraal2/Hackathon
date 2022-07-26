import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";

const CustomDialog = ({
  open,
  handleClose,
  title,
  content,
  noFun,
  yesFun,
  noText,
  yesText,
  isUpdate,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
        {isUpdate && (
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={noFun}>{noText}</Button>
        <Button onClick={yesFun} autoFocus>
          {yesText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
