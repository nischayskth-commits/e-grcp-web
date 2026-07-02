import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";

const ApproveDialog = ({
  open,
  onClose,
  onApprove,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>
        Approve Procurement
      </DialogTitle>

      <DialogContent>
        <Typography>
          Are you sure you want to approve this
          procurement request?
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={onApprove}
        >
          Approve
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApproveDialog;