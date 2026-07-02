import { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  MenuItem,
  Alert,
} from "@mui/material";

const initialForm = {
  title: "",
  department: "",
  requester: "",
  amount: "",
  priority: "Medium",
};

const NewProcurementDialog = ({
  open,
  onClose,
  onSave,
}) => {

  const [form, setForm] =
    useState(initialForm);

  const [error, setError] =
    useState("");

  const handleChange = (
    field,
    value
  ) => {

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setError("");

  };

  const handleClose = () => {

    setForm(initialForm);

    setError("");

    onClose();

  };

  const handleSave = () => {

    if (
      !form.title.trim() ||
      !form.department.trim() ||
      !form.requester.trim() ||
      !form.amount
    ) {

      setError(
        "Please fill all required fields."
      );

      return;

    }

    onSave({

      id: `PR-${Date.now()}`,

      ...form,

      amount: Number(form.amount),

      status: "Pending",

      createdDate:
        new Date().toLocaleDateString(),

      attachments: [],

      comments: [],

      approvalHistory: [],

    });

    setForm(initialForm);

    setError("");

    onClose();

  };

  return (

    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
    >

      <DialogTitle>
        New Procurement Request
      </DialogTitle>

      <DialogContent>

        {error && (

          <Alert
            severity="error"
            sx={{ mb: 2 }}
          >
            {error}
          </Alert>

        )}

        <Grid
          container
          spacing={2}
          sx={{ mt: 1 }}
        >

          <Grid item xs={12}>

            <TextField
              fullWidth
              label="Request Title"
              placeholder="Purchase Laptops"
              value={form.title}
              onChange={(e) =>
                handleChange(
                  "title",
                  e.target.value
                )
              }
            />

          </Grid>

          <Grid item xs={12} md={6}>

            <TextField
              fullWidth
              label="Department"
              placeholder="IT"
              value={form.department}
              onChange={(e) =>
                handleChange(
                  "department",
                  e.target.value
                )
              }
            />

          </Grid>

          <Grid item xs={12} md={6}>

            <TextField
              fullWidth
              label="Requester"
              placeholder="John Doe"
              value={form.requester}
              onChange={(e) =>
                handleChange(
                  "requester",
                  e.target.value
                )
              }
            />

          </Grid>

          <Grid item xs={12} md={6}>

            <TextField
              fullWidth
              type="number"
              label="Amount"
              placeholder="50000"
              value={form.amount}
              onChange={(e) =>
                handleChange(
                  "amount",
                  e.target.value
                )
              }
            />

          </Grid>

          <Grid item xs={12} md={6}>

            <TextField
              select
              fullWidth
              label="Priority"
              value={form.priority}
              onChange={(e) =>
                handleChange(
                  "priority",
                  e.target.value
                )
              }
            >

              <MenuItem value="High">
                High
              </MenuItem>

              <MenuItem value="Medium">
                Medium
              </MenuItem>

              <MenuItem value="Low">
                Low
              </MenuItem>

            </TextField>

          </Grid>

        </Grid>

      </DialogContent>

      <DialogActions>

        <Button
          onClick={handleClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
          disabled={
            !form.title ||
            !form.department ||
            !form.requester ||
            !form.amount
          }
        >
          Create Request
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default NewProcurementDialog;