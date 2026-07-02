import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";

const Row = ({ label, value }) => (
  <>
    <Grid size={{ xs: 12, md: 4 }}>
      <Typography
        fontWeight="bold"
        color="text.secondary"
      >
        {label}
      </Typography>
    </Grid>

    <Grid size={{ xs: 12, md: 8 }}>
      <Typography>
        {value}
      </Typography>
    </Grid>
  </>
);

const VendorOverview = ({ vendor }) => {
  return (
    <Card elevation={2}>
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={3}
        >
          Basic Details
        </Typography>

        <Grid
          container
          spacing={2}
        >

          <Row
            label="Vendor Name"
            value={vendor.name}
          />

          <Row
            label="Vendor ID"
            value={vendor.id}
          />

          <Row
            label="Category"
            value={vendor.category}
          />

          <Row
            label="Status"
            value={vendor.status}
          />

          <Row
            label="Risk"
            value={vendor.risk}
          />

          <Row
            label="GST Number"
            value={vendor.gst}
          />

          <Row
            label="PAN Number"
            value={vendor.pan}
          />

          <Row
            label="City"
            value={vendor.city}
          />

          <Row
            label="State"
            value={vendor.state}
          />

          <Row
            label="Country"
            value={vendor.country}
          />

          <Row
            label="Registered On"
            value={vendor.registrationDate}
          />

          <Row
            label="Total Contracts"
            value={vendor.contracts}
          />

          <Row
            label="Total Spend"
            value={`₹ ${vendor.spend.toLocaleString()}`}
          />

        </Grid>

        <Divider sx={{ mt: 3 }} />

      </CardContent>
    </Card>
  );
};

export default VendorOverview;