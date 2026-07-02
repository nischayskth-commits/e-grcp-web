import {
  Card,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";

const logs = [
  "01 Jun 2026 - Request Created",
  "02 Jun 2026 - Manager Approval",
  "03 Jun 2026 - Procurement Approval",
  "04 Jun 2026 - Finance Approval",
];

const AuditTimeline = () => {
  return (
    <Card sx={{ mt: 2, borderRadius: 3 }}>
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={3}
        >
          Audit Logs
        </Typography>

        <Stack spacing={2}>

          {logs.map((log) => (
            <Typography key={log}>
              {log}
            </Typography>
          ))}

        </Stack>

      </CardContent>
    </Card>
  );
};

export default AuditTimeline;