import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";

const NewVendorDialog = ({
  open,
  form,
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
        New Vendor
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
              value={form.name}
              onChange={(e) =>
                onChange("name", e.target.value)
              }
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="Category"
              value={form.category}
              onChange={(e) =>
                onChange("category", e.target.value)
              }
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="Contact Person"
              value={form.contactPerson}
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
              value={form.email}
              onChange={(e) =>
                onChange("email", e.target.value)
              }
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="Phone"
              value={form.phone}
              onChange={(e) =>
                onChange("phone", e.target.value)
              }
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="City"
              value={form.city}
              onChange={(e) =>
                onChange("city", e.target.value)
              }
            />
          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField
              select
              fullWidth
              label="Risk"
              value={form.risk}
              onChange={(e) =>
                onChange("risk", e.target.value)
              }
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
            </TextField>
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
          Create Vendor
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default NewVendorDialog;