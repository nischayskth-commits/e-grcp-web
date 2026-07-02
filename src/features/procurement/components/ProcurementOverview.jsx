import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Chip,
  Stack,
} from "@mui/material";

const getStatusColor = (status) => {
  switch (status) {
    case "Approved":
      return "success";
    case "Pending":
      return "warning";
    case "Rejected":
      return "error";
    default:
      return "default";
  }
};

const ProcurementOverview = ({ procurement }) => {
  return (
    <Grid container spacing={3} mt={1}>

      {/* Request Information */}
      <Grid item xs={12} md={6}>
        <Card elevation={2} sx={{ borderRadius: 3 }}>
          <CardContent>

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
            >
              Request Information
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Stack spacing={2}>

              <Typography>
                <b>Request ID:</b> {procurement.id}
              </Typography>

              <Typography>
                <b>Title:</b> {procurement.title}
              </Typography>

              <Typography>
                <b>Department:</b> {procurement.department}
              </Typography>

              <Typography>
                <b>Requester:</b> {procurement.requester}
              </Typography>

              <Typography>
                <b>Vendor:</b> {procurement.vendor}
              </Typography>

            </Stack>

          </CardContent>
        </Card>
      </Grid>

      {/* Financial Information */}
      <Grid item xs={12} md={6}>
        <Card elevation={2} sx={{ borderRadius: 3 }}>
          <CardContent>

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
            >
              Financial Information
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Stack spacing={2}>

              <Typography>
                <b>Amount:</b> ₹{" "}
                {procurement.amount.toLocaleString()}
              </Typography>

              <Typography>
                <b>Priority:</b> {procurement.priority}
              </Typography>

              <Typography>
                <b>Created:</b> {procurement.createdDate}
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <Typography>
                  <b>Status:</b>
                </Typography>

                <Chip
                  label={procurement.status}
                  color={getStatusColor(procurement.status)}
                />
              </Stack>

            </Stack>

          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
};

export default ProcurementOverview;