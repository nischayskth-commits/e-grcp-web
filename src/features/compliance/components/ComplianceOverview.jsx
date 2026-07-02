import {
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const Row = ({
  label,
  value,
}) => (
  <Grid
    size={{ xs: 12, md: 6 }}
  >
    <Typography
      variant="subtitle2"
      color="text.secondary"
    >
      {label}
    </Typography>

    <Typography
      fontWeight="600"
      mb={2}
    >
      {value}
    </Typography>
  </Grid>
);

const ComplianceOverview = ({
  compliance,
}) => {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
      }}
    >
      <CardContent>

        <Grid
          container
          spacing={3}
        >

          <Row
            label="Department"
            value={
              compliance.department
            }
          />

          <Row
            label="Owner"
            value={
              compliance.owner
            }
          />

          <Row
            label="Severity"
            value={
              compliance.severity
            }
          />

          <Row
            label="Status"
            value={
              compliance.status
            }
          />

          <Row
            label="Document Status"
            value={
              compliance.documentStatus
            }
          />

          <Row
            label="Certification Expiry"
            value={
              compliance.certificationExpiry
            }
          />

          <Row
            label="Last Review"
            value={
              compliance.lastReview
            }
          />

        </Grid>

      </CardContent>
    </Card>
  );
};

export default ComplianceOverview;