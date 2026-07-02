import { Chip } from "@mui/material";

const VendorStatusChip = ({ status }) => {
  return (
    <Chip
      label={status}
      color={
        status === "Approved"
          ? "success"
          : status === "Pending"
          ? "warning"
          : status === "Rejected"
          ? "error"
          : "default"
      }
      size="small"
      sx={{
        fontWeight: 600,
      }}
    />
  );
};

export default VendorStatusChip;