import { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const RejectDialog = ({
  open,
  onClose,
  onReject,
}) => {
  const [reason, setReason] =
    useState("");

  const handleReject = () => {
    onReject(reason);
    setReason("");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        Reject Procurement
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
            setReason(e.target.value)
          }
        />

      </DialogContent>

      <DialogActions>

        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={handleReject}
        >
          Reject
        </Button>

      </DialogActions>
    </Dialog>
  );
};

export default RejectDialog;