import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  TextField,
} from "@mui/material";

const EditVendorDialog = ({
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
        Edit Vendor
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
              label="Vendor Name"
              value={form?.name ?? ""}
              onChange={(e) =>
                onChange("name", e.target.value)
              }
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="Category"
              value={form?.category ?? ""}
              onChange={(e) =>
                onChange(
                  "category",
                  e.target.value
                )
              }
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="Contact Person"
              value={form?.contactPerson ?? ""}
              onChange={(e) =>
                onChange(
                  "contactPerson",
                  e.target.value
                )
              }
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="Email"
              value={form?.email ?? ""}
              onChange={(e) =>
                onChange(
                  "email",
                  e.target.value
                )
              }
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="Phone"
              value={form?.phone ?? ""}
              onChange={(e) =>
                onChange(
                  "phone",
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

export default EditVendorDialog;