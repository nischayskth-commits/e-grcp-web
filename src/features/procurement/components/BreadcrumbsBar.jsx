import { Breadcrumbs, Typography, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink } from "react-router-dom";

const BreadcrumbsBar = ({ id }) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
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
        to="/procurement"
      >
        Procurement
      </Link>

      <Typography color="text.primary">
        {id}
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsBar;