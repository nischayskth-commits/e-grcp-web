import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  TextField,
} from "@mui/material";

const EditProcurementDialog = ({
  open,
  form = {},
  onChange,
  onClose,
  onSave,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
        Edit Procurement
      </DialogTitle>

      <DialogContent>

        <Grid
          container
          spacing={2}
          sx={{ mt: 1 }}
        >

          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Title"
              value={form?.title ?? ""}
              onChange={(e) =>
                onChange("title", e.target.value)
              }
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="Vendor"
              value={form?.vendor ?? ""}
              onChange={(e) =>
                onChange("vendor", e.target.value)
              }
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="Department"
              value={form?.department ?? ""}
              onChange={(e) =>
                onChange(
                  "department",
                  e.target.value
                )
              }
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              type="number"
              label="Amount"
              value={form?.amount ?? ""}
              onChange={(e) =>
                onChange(
                  "amount",
                  Number(e.target.value)
                )
              }
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="Priority"
              value={form?.priority ?? ""}
              onChange={(e) =>
                onChange(
                  "priority",
                  e.target.value
                )
              }
            />
          </Grid>

        </Grid>

      </DialogContent>

      <DialogActions>

        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={onSave}
        >
          Save
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default EditProcurementDialog;