import { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const SendBackDialog = ({
  open,
  onClose,
  onSubmit,
}) => {

  const [reason, setReason] =
    useState("");

  const handleSubmit = () => {

    onSubmit(reason);

    setReason("");

  };

  return (

    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >

      <DialogTitle>
        Send Back Request
      </DialogTitle>

      <DialogContent>

        <TextField
          fullWidth
          multiline
          rows={4}
          label="Reason"
          margin="normal"
          value={reason}
          onChange={(e) =>
            setReason(
              e.target.value
            )
          }
        />

      </DialogContent>

      <DialogActions>

        <Button
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          color="warning"
          onClick={handleSubmit}
        >
          Send Back
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default SendBackDialog;