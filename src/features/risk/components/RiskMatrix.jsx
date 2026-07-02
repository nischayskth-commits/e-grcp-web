import {
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
} from "@mui/material";

const RiskMatrix = ({ risks }) => {
  const highRisk = risks.find(
    (risk) => risk.score >= 20
  );

  const mediumRisk = risks.find(
    (risk) =>
      risk.score >= 10 &&
      risk.score < 20
  );

  const lowRisk = risks.find(
    (risk) => risk.score < 10
  );

  return (
    <Card
      elevation={3}
      sx={{
        mt: 4,
        borderRadius: 3,
      }}
    >
      <CardContent>

        <Typography
          variant="h5"
          fontWeight="bold"
          mb={3}
        >
          Risk Matrix
        </Typography>

        <Stack spacing={2}>

          <Chip
            color="error"
            label={`High Risk - ${
              highRisk?.category ??
              "N/A"
            }`}
            sx={{
              justifyContent: "flex-start",
              fontSize: 16,
              py: 3,
            }}
          />

          <Chip
            color="warning"
            label={`Medium Risk - ${
              mediumRisk?.category ??
              "N/A"
            }`}
            sx={{
              justifyContent: "flex-start",
              fontSize: 16,
              py: 3,
            }}
          />

          <Chip
            color="success"
            label={`Low Risk - ${
              lowRisk?.category ??
              "N/A"
            }`}
            sx={{
              justifyContent: "flex-start",
              fontSize: 16,
              py: 3,
            }}
          />

        </Stack>

      </CardContent>
    </Card>
  );
};

export default RiskMatrix;