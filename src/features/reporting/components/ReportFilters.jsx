import {
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";

const ReportFilters = ({
  filter,
  setFilter,
}) => {
  return (
    <Grid
      container
      spacing={2}
      mb={3}
    >

      <Grid
        size={{
          xs: 12,
          md: 4,
        }}
      >

        <TextField
          select
          fullWidth
          label="Report Type"
          value={filter}
          onChange={(e) =>
            setFilter(
              e.target.value
            )
          }
        >

          <MenuItem value="All">
            All
          </MenuItem>

          <MenuItem value="Procurement">
            Procurement
          </MenuItem>

          <MenuItem value="Vendor">
            Vendor
          </MenuItem>

          <MenuItem value="Risk">
            Risk
          </MenuItem>

          <MenuItem value="Compliance">
            Compliance
          </MenuItem>

        </TextField>

      </Grid>

    </Grid>
  );
};

export default ReportFilters;