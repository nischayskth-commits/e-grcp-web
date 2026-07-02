import {
  Box,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";

import {
  ArrowBack,
  Edit,
  CheckCircle,
  Cancel,
  Reply,
  Forward,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import rolePermissions from "../../../config/rolePermissions";

const ProcurementHeader = ({
  procurement,
  onApprove,
  onReject,
  onEdit,
  onSendBack,
  onDelegate,
}) => {
  const navigate = useNavigate();

  const { user } = useSelector(
    (state) => state.auth
  );

  const actions =
    rolePermissions[user?.role]?.actions || [];

  const canApprove =
    actions.includes("approve");

  const canReject =
    actions.includes("reject");

  const canEdit =
    actions.includes("edit");

  const canSendBack =
    actions.includes("sendBack");

  const canDelegate =
    actions.includes("delegate");

  const statusColor = () => {
    switch (procurement.status) {
      case "Approved":
        return "success";

      case "Rejected":
        return "error";

      case "Delegated":
        return "info";

      case "Sent Back":
        return "secondary";

      default:
        return "warning";
    }
  };

  return (
    <Box
      sx={{
        mb: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Box>
        <Button
          startIcon={<ArrowBack />}
          onClick={() =>
            navigate("/procurement")
          }
          sx={{ mb: 2 }}
        >
          Back
        </Button>

        <Typography
          variant="h4"
          fontWeight="bold"
        >
          {procurement.title}
        </Typography>

        <Typography
          color="text.secondary"
          mb={2}
        >
          {procurement.id}
        </Typography>

        <Chip
          label={procurement.status}
          color={statusColor()}
        />
      </Box>

      <Stack
        direction="row"
        spacing={2}
        flexWrap="wrap"
      >
        {canApprove && (
          <Button
            variant="contained"
            color="success"
            startIcon={<CheckCircle />}
            disabled={
              procurement.status ===
              "Approved"
            }
            onClick={onApprove}
          >
            Approve
          </Button>
        )}

        {canReject && (
          <Button
            variant="contained"
            color="error"
            startIcon={<Cancel />}
            disabled={
              procurement.status ===
              "Rejected"
            }
            onClick={onReject}
          >
            Reject
          </Button>
        )}

        {canSendBack && (
          <Button
            variant="contained"
            color="warning"
            startIcon={<Reply />}
            onClick={onSendBack}
          >
            Send Back
          </Button>
        )}

        {canDelegate && (
          <Button
            variant="contained"
            color="info"
            startIcon={<Forward />}
            onClick={onDelegate}
          >
            Delegate
          </Button>
        )}

        {canEdit && (
          <Button
            variant="outlined"
            startIcon={<Edit />}
            onClick={onEdit}
          >
            Edit
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default ProcurementHeader;