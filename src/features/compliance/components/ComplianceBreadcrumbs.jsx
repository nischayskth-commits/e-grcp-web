import {
  Breadcrumbs,
  Link,
  Typography,
} from "@mui/material";

import {
  Link as RouterLink,
} from "react-router-dom";

const ComplianceBreadcrumbs = ({
  id,
}) => {
  return (
    <Breadcrumbs
      sx={{ mb: 3 }}
    >
      <Link
        component={RouterLink}
        underline="hover"
        color="inherit"
        to="/dashboard"
      >
        Dashboard
      </Link>

      <Link
        component={RouterLink}
        underline="hover"
        color="inherit"
        to="/compliance"
      >
        Compliance
      </Link>

      <Typography color="text.primary">
        {id}
      </Typography>
    </Breadcrumbs>
  );
};

export default ComplianceBreadcrumbs;