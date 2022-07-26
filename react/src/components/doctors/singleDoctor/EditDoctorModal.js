import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  Box,
  Grid,
  Stack,
  Typography,
  MenuItem,
  Menu,
  Fade,
} from "@mui/material";

function EditDoctorModal() {
    const [showModel, setShowModel] = useState(false);
  const handleCloseModal = () => { setShowModel(false)};

  const handleShowModal = () => {setShowModel(true)
    };

  return (
    <>
      <MenuItem onClick={() => handleShowModal()}>Edit</MenuItem>

      <Modal show={showModel} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditDoctorModal;
