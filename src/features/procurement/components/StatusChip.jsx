import { Chip } from "@mui/material";

const colors = {
  Approved: "success",
  Pending: "warning",
  Rejected: "error",
};

const StatusChip = ({ status }) => {
  return (
    <Chip
      label={status}
      color={colors[status] || "default"}
      size="small"
      variant="filled"
    />
  );
};

export default StatusChip;