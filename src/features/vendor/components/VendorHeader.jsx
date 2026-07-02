import {
  Box,
  Typography,
  Button,
} from "@mui/material";

import {
  ArrowBack,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

const VendorHeader = ({
  vendor,
}) => {

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        mb: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >

      <Box>

        <Button
          startIcon={<ArrowBack />}
          onClick={() =>
            navigate("/vendors")
          }
          sx={{ mb: 2 }}
        >
          Back to Vendors
        </Button>

        <Typography
          variant="h4"
          fontWeight="bold"
        >
          {vendor.name}
        </Typography>

        <Typography
          color="text.secondary"
        >
          {vendor.id}
        </Typography>

      </Box>

     

    </Box>
  );
};

export default VendorHeader;