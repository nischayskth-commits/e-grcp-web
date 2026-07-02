import {
  Card,
  CardContent,
  Grid,
  Typography,
  Chip,
} from "@mui/material";

const VendorRisk = ({ vendor }) => {
  const getRiskColor = () => {
    switch (vendor.risk) {
      case "Low":
        return "success";

      case "Medium":
        return "warning";

      case "High":
        return "error";

      default:
        return "default";
    }
  };

  return (
    <Card elevation={2}>
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={3}
        >
          Risk Information
        </Typography>

        <Grid
          container
          spacing={3}
        >

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              color="text.secondary"
            >
              Risk Level
            </Typography>

            <Chip
              label={vendor.risk}
              color={getRiskColor()}
              sx={{ mt: 1 }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              color="text.secondary"
            >
              Compliance Status
            </Typography>

            <Typography
              fontWeight="bold"
              mt={1}
            >
              Compliant
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              color="text.secondary"
            >
              Last Assessment
            </Typography>

            <Typography
              fontWeight="bold"
              mt={1}
            >
              15-Jun-2025
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography
              color="text.secondary"
              mb={1}
            >
              Risk Summary
            </Typography>

            <Typography>
              This vendor is currently classified as{" "}
              <b>{vendor.risk}</b> risk based on
              previous assessments, compliance
              records and procurement history.
            </Typography>
          </Grid>

        </Grid>

      </CardContent>
    </Card>
  );
};

export default VendorRisk;