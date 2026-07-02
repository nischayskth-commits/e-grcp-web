import { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Stack,
} from "@mui/material";

const NewComplianceDialog = ({
  open,
  onClose,
  onSave,
}) => {
  const [form, setForm] = useState({
    title: "",
    department: "",
    owner: "",
    status: "Pending",
    severity: "Low",
    documentStatus: "Available",
    certificationExpiry: "",
    lastReview: new Date()
      .toISOString()
      .split("T")[0],
  });

  const handleChange = (
    e
  ) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSave = () => {
    onSave({
      id: `COMP-${Date.now()}`,
      ...form,
    });

    setForm({
      title: "",
      department: "",
      owner: "",
      status: "Pending",
      severity: "Low",
      documentStatus:
        "Available",
      certificationExpiry:
        "",
      lastReview:
        new Date()
          .toISOString()
          .split("T")[0],
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        New Compliance
      </DialogTitle>

      <DialogContent>

        <Stack
          spacing={2}
          mt={1}
        >

          <TextField
            label="Title"
            name="title"
            value={form.title}
            onChange={
              handleChange
            }
            fullWidth
          />

          <TextField
            label="Department"
            name="department"
            value={
              form.department
            }
            onChange={
              handleChange
            }
            fullWidth
          />

          <TextField
            label="Owner"
            name="owner"
            value={form.owner}
            onChange={
              handleChange
            }
            fullWidth
          />

          <TextField
            select
            label="Severity"
            name="severity"
            value={
              form.severity
            }
            onChange={
              handleChange
            }
            fullWidth
          >
            <MenuItem value="Low">
              Low
            </MenuItem>

            <MenuItem value="Medium">
              Medium
            </MenuItem>

            <MenuItem value="High">
              High
            </MenuItem>

            <MenuItem value="Critical">
              Critical
            </MenuItem>

          </TextField>

          <TextField
            type="date"
            label="Certification Expiry"
            name="certificationExpiry"
            value={
              form.certificationExpiry
            }
            onChange={
              handleChange
            }
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />

        </Stack>

      </DialogContent>

      <DialogActions>

        <Button
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={
            handleSave
          }
        >
          Save
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default NewComplianceDialog;