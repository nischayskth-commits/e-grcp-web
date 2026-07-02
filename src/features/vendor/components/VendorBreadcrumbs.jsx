import {
  Breadcrumbs,
  Link,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const VendorBreadcrumbs = ({ id }) => {
  const navigate = useNavigate();

  return (
    <Breadcrumbs sx={{ mb: 3 }}>
      <Link
        underline="hover"
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </Link>

      <Link
        underline="hover"
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/vendors")}
      >
        Vendors
      </Link>

      <Typography color="text.primary">
        {id}
      </Typography>
    </Breadcrumbs>
  );
};

export default VendorBreadcrumbs;