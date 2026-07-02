import {
  Card,
  CardContent,
  Grid,
  Typography,
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

const VendorContacts = ({ vendor }) => {
  return (
    <Card elevation={2}>
      <CardContent>

        <Typography
          variant="h6"
          fontWeight="bold"
          mb={3}
        >
          Contact Information
        </Typography>

        <Grid
          container
          spacing={2}
        >

          <Row
            label="Contact Person"
            value={vendor.contactPerson}
          />

          <Row
            label="Email"
            value={vendor.email}
          />

          <Row
            label="Phone"
            value={vendor.phone}
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

        </Grid>

      </CardContent>
    </Card>
  );
};

export default VendorContacts;