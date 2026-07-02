import { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

const DelegateDialog = ({
  open,
  onClose,
  onSubmit,
}) => {

  const [delegateTo, setDelegateTo] =
    useState("");

  const users = [
    "Procurement Manager",
    "Finance Manager",
    "Compliance Officer",
    "Administrator",
  ];

  const handleSubmit = () => {

    onSubmit(delegateTo);

    setDelegateTo("");

  };

  return (

    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >

      <DialogTitle>
        Delegate Request
      </DialogTitle>

      <DialogContent>

        <TextField
          select
          fullWidth
          margin="normal"
          label="Delegate To"
          value={delegateTo}
          onChange={(e) =>
            setDelegateTo(
              e.target.value
            )
          }
        >

          {users.map((user) => (

            <MenuItem
              key={user}
              value={user}
            >
              {user}
            </MenuItem>

          ))}

        </TextField>

      </DialogContent>

      <DialogActions>

        <Button
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          color="info"
          onClick={handleSubmit}
          disabled={!delegateTo}
        >
          Delegate
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default DelegateDialog;