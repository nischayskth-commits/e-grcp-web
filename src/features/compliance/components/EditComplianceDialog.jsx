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

const EditComplianceDialog = ({
  open,
  compliance,
  onClose,
  onSave,
}) => {
  const [form, setForm] = useState(
    compliance || {}
  );

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  const handleSave = () => {
    onSave(form);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        Edit Compliance
      </DialogTitle>

      <DialogContent>

        <Stack spacing={2} mt={1}>

          <TextField
            label="Title"
            name="title"
            value={form.title || ""}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Department"
            name="department"
            value={form.department || ""}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Owner"
            name="owner"
            value={form.owner || ""}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            select
            label="Status"
            name="status"
            value={form.status || ""}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="Compliant">
              Compliant
            </MenuItem>

            <MenuItem value="Violation">
              Violation
            </MenuItem>

            <MenuItem value="Pending">
              Pending
            </MenuItem>

          </TextField>

          <TextField
            select
            label="Severity"
            name="severity"
            value={form.severity || ""}
            onChange={handleChange}
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
            select
            label="Document Status"
            name="documentStatus"
            value={
              form.documentStatus ||
              ""
            }
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="Available">
              Available
            </MenuItem>

            <MenuItem value="Missing">
              Missing
            </MenuItem>
          </TextField>

          <TextField
            type="date"
            label="Certification Expiry"
            name="certificationExpiry"
            value={
              form.certificationExpiry ||
              ""
            }
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />

          <TextField
            type="date"
            label="Last Review"
            name="lastReview"
            value={
              form.lastReview || ""
            }
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />

        </Stack>

      </DialogContent>

      <DialogActions>

        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
        >
          Save
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default EditComplianceDialog;